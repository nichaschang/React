import React from 'react'

function getDataFromServer() {
  return [
    { name: 'apple', price: 100 },
    { name: 'book', price: 200 },
    { name: 'card', price: 300 },
    { name: 'diamond', price: 400 },
    { name: 'egg', price: 500 },
  ]
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: [],
      isLoadingOK: false,
    }
    console.log('constructor')
  }

  componentDidMount() {
    const data = getDataFromServer()
    setTimeout(
      () => this.setState({ product: [...data], isLoadingOK: true }),
      3000
    )

    console.log('componentDidMount')
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value })
    console.log(event)
  }

  handleSend = event => {
    this.state.username === 'Alex'
      ? this.setState({ usernameIsOK: true })
      : this.setState({ usernameIsOK: false })
    this.state.password === '12345'
      ? this.setState({ passwordIsOK: true })
      : this.setState({ passwordIsOK: false })
  }

  render() {
    console.log('render')
    const loading = (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )

    const data = (
      <ul>
        {' '}
        {this.state.product.map((value, index) => {
          return (
            <li key={index}>
              name:{value.name} / price:{value.price}
            </li>
          )
        })}
      </ul>
    )

    return <>{!this.state.isLoadingOK ? loading : data}</>
  }
}

export default App
