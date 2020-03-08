import React from 'react'
import Text from './component/Text'
// 與Text.js連結
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }
  render() {
    return (
      <>
        <Text myName={this.state.name} />
      </>
    )
  }
}

export default App
