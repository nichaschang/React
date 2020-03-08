import React, { useState } from 'react'

function App() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="text"
          className="form-control is-valid"
          id="exampleInputEmail1"
          name="userName"
          aria-describedby="emailHelp"
          onChange={event => setUserName(event.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          name="password"
          onChange={event => setPassword(event.target.value)}
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <span style={{ color: 'red', background: 'lightblue' }}>注意事項</span>
    </>
  )
}

export default App
