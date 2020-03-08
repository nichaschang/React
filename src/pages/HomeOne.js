import React from 'react'
import { data } from '../data/index'
import { Link, withRouter } from 'react-router-dom'
function HomeOne() {
  return (
    <>
      <h2>HomeOne</h2>
      <ul className="list-group">
        <li className="list-group-item active">學生列表</li>
        {data.map((v, i) => {
          return (
            <li className="list-group-item" key={v.id}>
              <Link to={'/Student/' + v.id}>{v.name}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default withRouter(HomeOne)
