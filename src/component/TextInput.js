import React from 'react'

class TextInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }
  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.name}
          onChange={event => {
            this.setState({ name: event.target.value })
          }}
        />
        <button onClick={() => this.props.sendText(this.state.name)}>
          送出
        </button>
      </>
    )
  }
}

export default TextInput
