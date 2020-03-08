import React from 'react'

class Text extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
    console.log(props)
  }
  render() {
    return <>Hello ! {this.props.myName}</>
  }
}

export default Text
