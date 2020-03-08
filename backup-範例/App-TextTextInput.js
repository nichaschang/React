import React from 'react'
import TextInput from './component/TextInput'
import Text from './component/Text'

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
        <br />
        <Text myName={this.state.nameFromChild} />
      </>
    )
  }
}

export default App
