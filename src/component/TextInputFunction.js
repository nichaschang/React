import React, { useState } from 'react'

function TextInputFunction(props) {
  const [name, setName] = useState('')

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={event => {
          setName(event.target.value)
        }}
      />
      <button onClick={() => props.sendText(name)}>送出</button>
    </>
  )
}
export default TextInputFunction
