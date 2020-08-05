import React from 'react'

export default props => {
const shevron = <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-expand" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/>
  </svg>
const shevronUp = <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
  </svg>

const shevronDown = <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
  </svg>

return (
    <table className="table mt-3 mb-3">
      <thead>
        <tr>
          <th onClick={props.onSort.bind(null, 'id')}>
            Id
            {props.sortField === 'id' ? (props.sortDirection === 'asc' ? shevronDown : shevronUp) : shevron}
          </th>
          <th onClick={props.onSort.bind(null, 'firstName')}>
            First Name
            {props.sortField === 'firstName' ? (props.sortDirection === 'asc' ? shevronDown : shevronUp) : shevron}
          </th>
          <th onClick={props.onSort.bind(null, 'lastName')}>
            Last Name
            {props.sortField === 'lastName' ? (props.sortDirection === 'asc' ? shevronDown : shevronUp) : shevron}
          </th>
          <th onClick={props.onSort.bind(null, 'email')}>
            Email
            {props.sortField === 'email' ? (props.sortDirection === 'asc' ? shevronDown : shevronUp) : shevron}
          </th>
          <th onClick={props.onSort.bind(null, 'phone')}>
            Phone
            {props.sortField === 'phone' ? (props.sortDirection === 'asc' ? shevronDown : shevronUp) : shevron}
          </th>
        </tr>
      </thead>
      <tbody>
        {props.data.map( item => (
          <tr key={item.id + item.phone} onClick={props.onRowSelect.bind(null, item)}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
