import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {    
    if(counter >= 20){
      alert("You have reached the max count! ")
    }
    else{
      counter++;
      setCounter(counter);
    }
  }

  const removeValue = () => {
    if(counter === 0){
      alert(`Counter is ${counter}!`)
    }
    else{
      counter--;
      setCounter(counter);
    }
  }

  return (
    <>
    <h1>Your Counter</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <button onClick={removeValue}>remove value</button>
    </>
  )
}
export default App
