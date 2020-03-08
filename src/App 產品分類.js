import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Member from './pages/Member'
import ProductCategory from './pages/ProductCategory'
import Menu from './component/Menu'
import LoginIcon from './component/LoginIcon'
function App(props) {
  // 判斷會員是否登入
  const [login, setLogin] = useState(false)
  console.log(login)
  return (
    <Router>
      <>
        <Menu />
      </>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Member">
          <Member
            loginState={login}
            trigger={() => {
              setLogin(!login)
            }}
          />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Product/:type?/:id?">
          <Product />
        </Route>
        <Route path="/ProductCategory">
          <ProductCategory />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
