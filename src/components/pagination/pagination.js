import React from 'react'

export default props => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination d-flex justify-content-center flex-wrap">
        {props.pageList.map( item => (
          <li key={item.toString()} className={((props.currentPage + 1) === item ? 'active ' : '') + 'page-item'}>
            <a onClick={props.setPage.bind(null, item)} className="page-link">{item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
