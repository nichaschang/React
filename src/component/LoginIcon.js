import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function LoginIcon(props) {
  console.log(props)
  return (
    <>
      {props.login.loginState ? (
        <button className="btn btn-danger" onClick={props.login.trigger}>
          登出
        </button>
      ) : (
        <button className="btn btn-primary" onClick={props.login.trigger}>
          登入
        </button>
      )}

      {/* <button onClick={props.login.trigger}>
        {props.login ? '登出' : '登入'}
      </button> */}
    </>
  )
}

export default withRouter(LoginIcon)
