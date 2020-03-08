import React from 'react'
import $ from 'jquery'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 0,
    }
    this.btnRef = React.createRef()
  }

  componentDidMount() {
    $(this.btnRef.current).click(() => alert(this.state.data))
  }
  // 更換data的內容
  changeData = () => this.setState({ data: 999 })

  render() {
    return (
      <>
        <button ref={this.btnRef}>Click</button>
        <button onClick={this.changeData}>Change</button>
      </>
    )
  }
}

export default App
