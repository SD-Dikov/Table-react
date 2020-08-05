import React from 'react'

export default props => {
  const smallUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
  const bigUrl = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

  return (
    <div className="d-flex justify-content-center mt-5">
      <button onClick={() => props.onSelect(smallUrl)} type="button" className="btn btn-primary m-3">Показать малый набор данных</button>
      <button onClick={() => props.onSelect(bigUrl)} type="button" className="btn btn-primary m-3">Показать большой набор данных</button>
    </div>
  )
}
