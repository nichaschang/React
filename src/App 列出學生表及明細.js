import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomeOne from './pages/HomeOne'
import Student from './pages/Student'
function App(props) {
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
        </ul>
        <br />
        <Switch>
          <Route path="/Student/:id?">
            <Student />
          </Route>
          <Route exact path="/">
            <HomeOne />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
