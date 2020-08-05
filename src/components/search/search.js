import React, {useState} from 'react'

export default props => {

  const [value, setValue] = useState('')

  const valueChange = event => {
    setValue(event.target.value)
  }

  return (
    <div className="input-group mt-3 mb-3">
      <input value={value} onChange={valueChange} type="text" className="form-control"  />
      <div className="input-group-append">
        <button onClick={() => props.onSearch(value)} className="btn btn-outline-secondary" id="button-addon2">Найти</button>
      </div>
    </div>
  )
}
