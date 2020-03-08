import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function Breadcrump(props) {
  return (
    <>
      <div className="my-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {props.location.pathname}
            </li>
          </ol>
        </nav>
      </div>
    </>
  )
}

export default withRouter(Breadcrump)
