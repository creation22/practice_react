import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  
  const addvalue = ( ) => {

    if(counter <20){

      setCounter(counter+1)
    }
  }
  const subvalue = ( ) => {
    if(counter>0){

      setCounter(counter-1)
    }
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value : {counter} </h2>
    <button onClick={addvalue}>Add Value</button>
    <br />
    <br />
    <button onClick={ subvalue}>Sub Value</button>
    </>
  )
}

export default App
