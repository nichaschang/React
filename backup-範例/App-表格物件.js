import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value })
    console.log(event)
  }
  //   本章重點
  // element 裏頭的class,for,style使用方式不同,並透過hadleInput函式 解決多表格所需要的函式
  render() {
    return (
      <>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="username"
              aria-describedby="emailHelp"
              onChange={this.handleInput}
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
              onChange={this.handleInput}
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
          <span style={{ color: 'red', background: 'lightblue' }}>
            注意事項
          </span>
        </form>
      </>
    )
  }
}

export default App
