import React from 'react'
import Banner from '../component/Banner'
import { withRouter } from 'react-router-dom'
import Breadcrump from '../component/Breadcrump'

function Product(props) {
  // 如果method使用get的話，可透過URLSearchParams來取得值
  let mySearchParams = new URLSearchParams(props.location.search)
  console.log(mySearchParams)
  let id = mySearchParams.get('id')
  let type = mySearchParams.get('type')
  return (
    <>
      <Breadcrump />
      <Banner pagename="Product" />
      <p>產品Type：{type}</p>
      <p>產品ID：{id}</p>
    </>
  )
}

export default withRouter(Product)
