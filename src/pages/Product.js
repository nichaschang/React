import React from 'react'
import Banner from '../component/Banner'
import { withRouter, Link } from 'react-router-dom'

function Product(props) {
  // 如果method使用get的話，可透過URLSearchParams來取得值
  let mySearchParams = new URLSearchParams(props.location.search)
  let id = mySearchParams.get('id')
  let type = mySearchParams.get('type')
  return (
    <>
      <Banner pagename={props.match.params.type} />
      <br />
      <p>產品Type：{type}</p>
      <p>產品ID：{id}</p>
    </>
  )
}

export default withRouter(Product)
