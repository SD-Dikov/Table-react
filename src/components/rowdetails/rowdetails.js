import React from 'react'

export default ({rowData}) => (
  <div>
    <p>
      Выбран пользователь <b>{rowData.firstName} {rowData.lastName}</b>
    </p>
    <p>
      Описание:
    </p>
    <textarea defaultValue={rowData.description} />
    <p>Адрес проживания: <b>{rowData.address.streetAddress}</b></p>
    <p>Город: <b>{rowData.address.city}</b></p>
    <p>Провинция/штат: <b>{rowData.address.state}</b></p>
    <p>Индекс: <b>{rowData.address.zip}</b></p>
  </div>
)
