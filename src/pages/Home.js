import React from 'react'
import Banner from '../component/Banner'
import { withRouter } from 'react-router-dom'

function Home() {
  return (
    <>
      <Banner pagename="Home" />
      <Banner pagename="Home" />
      <Banner pagename="Home" />
      <Banner pagename="Home" />
    </>
  )
}

export default withRouter(Home)
