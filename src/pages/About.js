import React from 'react'
import Banner from '../component/Banner'
import { withRouter } from 'react-router-dom'

function About(props) {
  return (
    <>
      <Banner pagename="About" />
    </>
  )
}

export default withRouter(About)
