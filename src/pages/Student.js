import React from 'react'
import { data } from '../data/index'
import { withRouter, Redirect } from 'react-router-dom'

function Student(props) {
  let info = null
  let id = props.match.params.id
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      info = data[i]
    }
  }
  if (info == null) {
    return (
      <>
        <h2>沒有資料</h2>
        <button onClick={() => props.history.push('/')}>回首頁</button>
      </>
    )
  }
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">id：{info.id}</li>
        <li className="list-group-item">name：{info.name}</li>
        <li className="list-group-item">birth：{info.birth}</li>
      </ul>
    </>
  )
}

export default withRouter(Student)
