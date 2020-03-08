import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Product from '../src/pages/Product'
import Menu from '../src/component/Menu'
function App(props) {
  return (
    <Router>
      <>
        <Menu />
      </>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Product">
          <Product />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
