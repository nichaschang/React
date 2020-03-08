import React from 'react'
import Banner from '../component/Banner'
import { withRouter } from 'react-router-dom'
import LoginIcon from '../component/LoginIcon'

function Member(props) {
  return (
    <>
      <p>{props.loginState ? '登出' : '未登入'}</p>
      <LoginIcon login={props} />
      <Banner pagename="Member" />
    </>
  )
}

export default withRouter(Member)
