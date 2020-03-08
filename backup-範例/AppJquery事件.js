import React from 'react'
import $ from 'jquery'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 0,
    }
  }

  componentDidMount() {
    $('.one').click(() => alert(this.state.data))
  }
  // 更換data的內容
  changeData = () => this.setState({ data: 999 })

  render() {
    return (
      <>
        <button className="one">Click</button>
        <button onClick={this.changeData}>Change</button>
      </>
    )
  }
}

export default App
