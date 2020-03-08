import React from 'react'
import Banner from '../component/Banner'
import { withRouter, NavLink, Switch, Route } from 'react-router-dom'
import Product from './Product'

function ProductCategory(props) {
  console.log(props)
  const url = props.match.url
  const path = props.match.path
  return (
    <>
      <Banner pagename="ProductCategory" />
      <nav className="nav nav-pills">
        <li className="nav-item">
          <NavLink className="nav-link" to={`${url}/pc`}>
            PC
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={`${url}/Phone`}>
            Phone
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={`${url}/Ear`}>
            Ear
          </NavLink>
        </li>
      </nav>
      <Switch>
        <Route exact path={path}>
          <h3>請選擇分類</h3>
        </Route>
        <Route path={`${path}/:type?/:id?`}>
          <Product />
        </Route>
      </Switch>
    </>
  )
}

export default withRouter(ProductCategory)
