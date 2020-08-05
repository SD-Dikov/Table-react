import React, {useState} from 'react'

export default props => {

  const [form, setForm] = useState(
    {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: {
        streetAddress: '',
			  city: '',
			  state: '',
			  zip: ''
		},
		description: ''})

  const change = event => {
    const value = event.target.value
    const name = event.target.name
    setForm({
      ...form,
      [name]:value
      })
  }

  return (
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Id</label>
          <input value={form.id} onChange={change} name="id" type="text" className="form-control" id="exampleInputId"  />
          <label htmlFor="exampleInputFirstName">Имя</label>
          <input value={form.firstName} onChange={change} name="firstName" type="text" className="form-control" id="exampleInputFirstName"  />
          <label htmlFor="exampleInputLastName">Фамилия</label>
          <input value={form.lastName} onChange={change} name="lastName" type="text" className="form-control" id="exampleInputLastName"  />
          <label htmlFor="exampleInputEmail">Email адрес</label>
          <input value={form.email} onChange={change} name="email" type="email" className="form-control" id="exampleInputEmail"  />
          <label htmlFor="exampleInputPhone">Телефон</label>
          <input value={form.phone} onChange={change} name="phone" type="tel" className="form-control" id="exampleInputPhone"  />
        </div>
      <button onClick={() => props.onAppend(form)} type="button" className="btn btn-primary">Добавить в таблицу</button>
    </form>
  )}
