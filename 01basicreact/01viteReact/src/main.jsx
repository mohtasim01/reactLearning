import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Hello from './hello.jsx'


function MyApp(){
  return(
    <div>
      <h1>My Custom App</h1>
    </div>
  )
}

// 1. -----> We can also create react element a we have crated in custom react but we have to follow the rules of react
const anotherElement = (
  <a href="https://google.com" target='_blank' >vist google</a>
)

const anotherUser ="Mohtasim"  //test for injecting variables

// ----> Or we can salo use React builtin method and it works as an object as we created in custom react
const reactElement = React.createElement(
  'a', {href: "https://google.com", target: '_blank' },
  'click me to visit google',
  anotherUser  //varibale will be injected at the end
)



// --> this won't work as this does not follow the react expected syntax 
const reactElement1 = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}




createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <MyApp />
  //   <App/>
  //   <Hello/>
  // </React.StrictMode>

  // we can simply call component or function using Js syntax but still it's not recomended 

  // MyApp() //It will not work with inside strict mode

  // anotherElement //we can reder the element like this

  reactElement // creating obj using react lib

  


)
