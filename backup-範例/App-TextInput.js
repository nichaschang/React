import React from 'react'
import TextInput from './component/TextInput'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nameFromChild: '',
    }
  }
  render() {
    return (
      <>
        <TextInput
          sendText={text => {
            this.setState({ nameFromChild: text })
          }}
        />
        Hello! {this.state.nameFromChild}
      </>
    )
  }
}

export default App
