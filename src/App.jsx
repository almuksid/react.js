import './App.css'
import BioData from './components/BioData'
import { useState } from 'react'
function App() {

  const [counter, setCounter] = useState(0)

  const increaseHandler = () =>{
    setCounter(counter + 1)
  }
  const decreaseHandler = () =>{
    setCounter(counter-1)
  }

  return (
    <>
      <h2>Interactive Counter with React useState Hook</h2>
      <p>The value of the counter is {counter}</p>
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={decreaseHandler}>decrease</button>

      <hr />
      <BioData name="Al Muksid" email="web.almuksid@gmail.com" mobile="+8801770058637" linkedin="linkedin.com/in/almuksid" skills={["React.js", "Django"]} interests={["Cricket", "Football", "Badminton"]} />
      <hr />
      <BioData name="Mesion Sheikh" email="sheikh@gmail.com" mobile="+880" linkedin="linkedin.com/in/" skills={["React.js", "Django"]} interests={["Cricket", "Football", "Badminton"]} />
    </>
  )
}

export default App
