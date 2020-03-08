import React, { useState } from 'react'
import TextInputFunction from './component/TextInputFunction'
import TextFunction from './component/TextFunction'

function App(props) {
  const [nameFromChild, setNameFromChild] = useState('')

  return (
    <>
      <TextInputFunction
        sendText={text => {
          setNameFromChild(text)
        }}
      />
      <TextFunction myName={nameFromChild} />
    </>
  )
}

export default App
