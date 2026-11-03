import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  // Variable will update but will not be reflected in the UI
  // let counter = 15

  const addValue = () => {
    // counter += 1
    // setCounter(counter + 1)
    if(counter < 20)
      setCounter(counter + 1)
  }

  const removeValue = () => {
    // setCounter(counter - 1)
    if(counter > 0)
      setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Couter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value: {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value: {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
