import React from 'react'
import './App.css'
import Card from './components/Card'


function App() {

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
     <Card username='Mohtasim' btnText='click me'/>
     <Card username='Ali' btnText='visit me'/>
    </>
  )
}

export default App
