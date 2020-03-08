import React from 'react'
import { NavLink } from 'react-router-dom'
import LoginIcon from '../component/LoginIcon'
function Menu(props) {
  console.log(props)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <NavLink className="navbar-brand" to="/">
          Home
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <NavLink className="nav-link" to="/About">
                About <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/Product">
                Product <span className="sr-only">(current)</span>
              </NavLink>
            </li>

            <li className="nav-item ">
              <NavLink className="nav-link" to="/Cart">
                Cart <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/Member">
                Member <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/ProductCategory">
                ProductCategory <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/ProductList">
                ProductList <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/ProductCategory">
                <LoginIcon login={props} />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Menu
