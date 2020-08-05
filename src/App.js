import React from 'react'
import Table from './components/table/table'
import Spinner from './components/spinner/spinner'
import RowDetails from './components/rowdetails/rowdetails'
import ModeSelector from './components/modeselector/modeselector'
import Pagination from './components/pagination/pagination'
import Search from './components/search/search'
import BtnAppendForm from './components/btnappendform/btnappendform'
import Appendform from './components/appendform/appendform'

class App extends React.Component {

  state = {
    isModeSelected: false,
    isLoading: false,
    data: [],
    search: '',
    sortField: '',
    sortDirection: 'asc',
    row: null,
    rowCount: 50,
    currentPage: 0,
    isAppendOpen: false
  }

  async fechData(url) {
    const response = await fetch(url)
    const data = await response.json()
    this.setState({
      isLoading: false,
      data
    })
  }

  onSort = sortField => {
    const clonedData = this.state.data
    const sortType = this.state.sortDirection === 'asc' ? 'desc' : 'asc'
    const sortingData = this.state.sortDirection === 'asc' ? clonedData.sort(compare) : clonedData.sort(compare).reverse()


    function compare(prev, next) {
      if (prev[sortField] > next[sortField]) {
        return 1
      }
      if (prev[sortField] < next[sortField]) {
        return -1
      }
      return 0
    }
    this.setState({
      data: sortingData,
      sortDirection: sortType,
      sortField
    })
  }

  onRowSelect = row => {
   this.setState({
     row
   })
  }

  selectMode = url => {
    this.setState({
      isModeSelected: true,
      isLoading: true
    })
    this.fechData(url)
  }

  getPageList = pageCount => {
    let pageList = []
    for (let i = 1; i <= pageCount; i++) {
      pageList.push(i)
    }
    return pageList
  }

  getSliceData = data => {
    let sliceData = []
    for (let i = 0; i < Math.ceil(data.length/this.state.rowCount); i++){
        sliceData[i] = data.slice((i*this.state.rowCount), (i*this.state.rowCount) + this.state.rowCount)
    }
    return sliceData
  }

  setPage = page => {
    const pageColib = 1
    let currentPage = this.state.currentPage
    currentPage = page - pageColib

    this.setState ({
      currentPage
    })
  }

  onSearch = search => {
    this.setState({search, currentPage: 0})
  }

  getFilteredData() {
    const {data, search} = this.state
    if (!search) {
      return data
    }
    let filtData = data.filter(item => {
      return item['firstName'].toLowerCase().includes(search.toLowerCase())
             || item['lastName'].toLowerCase().includes(search.toLowerCase())
    })
    if (filtData.length === 0) {
      return data
    } else {
    return filtData
    }
  }

  openAppendForm = () => {
    this.setState({
      isAppendOpen: true
    })
  }
  closeAppendForm = () => {
    this.setState({
      isAppendOpen: false
    })
  }

  onAppend = newRow => {
    console.log(newRow);
    const clonedData = this.state.data
    clonedData.unshift(newRow)
    this.setState({
      data: clonedData
    })
  }

  render() {
    if (!this.state.isModeSelected) {
      return (
        <div className="container">
          <ModeSelector onSelect={this.selectMode} />
        </div>
      )
    }
    const filteredData = this.getFilteredData()
    const displayData = this.getSliceData(filteredData)[this.state.currentPage]
    const pageList = this.getPageList(Math.ceil(filteredData.length/this.state.rowCount))
    const open = 'Добавить'
    const close = 'Закрыть'

    return (
      <div className="container">
        {
          this.state.isLoading
          ? <Spinner />
          : <React.Fragment>
            <Search onSearch={this.onSearch} />
            {this.state.isAppendOpen
              ? <React.Fragment>
                  <Appendform onAppend={this.onAppend} />
                  <BtnAppendForm click={this.closeAppendForm} text={close}/>
                </React.Fragment>
              : <BtnAppendForm click={this.openAppendForm} text={open}/>
            }
            <Table
              data={displayData}
              onSort={this.onSort}
              sortDirection={this.state.sortDirection}
              sortField={this.state.sortField}
              onRowSelect={this.onRowSelect}
            />
            {
             pageList.length > 1
             ?  <Pagination
                pageList={pageList}
                setPage={this.setPage}
                currentPage={this.state.currentPage} />
              : null
            }
            </React.Fragment>
        }

        {
          this.state.row
          ? <RowDetails rowData={this.state.row} />
          : null
        }

      </div>
    )
  }
}

export default App
