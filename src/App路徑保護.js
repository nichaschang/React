import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomeOne from './pages/HomeOne'
import Student from './pages/Student'
import Login from './pages/Login'
import ProtectRoute from './util/ProtectRoute'

function App(props) {
  const [auth, setAuth] = useState(false)
  return (
    <Router>
      <>
        <ul>
          <li>
            <Link to="/">首頁</Link>
          </li>
          <li>
            <Link to="/Student">學生詳細頁</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
        <br />
        <Switch>
          <Route path="/Login">
            <Login
              isAuth={auth}
              login={() => {
                setAuth(true)
              }}
              logout={() => {
                setAuth(false)
              }}
            />
          </Route>
          {/* 使用protectRoute包覆要鎖定的route，將網頁先導入至ProtectRoute.js做判斷，如果為true才可進入裡面的route */}
          {/* 並將值傳入route，獲取登入狀態 */}
          <ProtectRoute path="/Student/:id?">
            <Student isAuth={auth} />
          </ProtectRoute>
          <ProtectRoute exact path="/">
            <HomeOne isAuth={auth} />
          </ProtectRoute>
        </Switch>
      </>
    </Router>
  )
}

export default App
