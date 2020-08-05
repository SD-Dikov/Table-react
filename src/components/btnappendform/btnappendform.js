import React from 'react'

export default props => (
  <button onClick={props.click} type="button" className="btn btn-primary mt-3 mb-3">{props.text}</button>
)
