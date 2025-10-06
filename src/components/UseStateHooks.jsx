import React from 'react'
import { useState } from 'react'

const UseStateHooks = () => {
    const [counter, setCounter] = useState(0)
    
    const increaseHandler = () =>{
    setCounter(counter + 1)
    }
    const decreaseHandler = () =>{
    setCounter(counter-1)
    }
  return (
    <div>

      <h2>Interactive Counter with React useState Hook</h2>
      <p>The value of the counter is {counter}</p>
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={decreaseHandler}>decrease</button>

    </div>
  )
}

export default UseStateHooks
