import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

let [count,countfunc] = useState(0) //count- variable countfunc- function

//explaination : here count is variable or constant that is declared ..... where as countfunc is a function which changes the given count
 let add =()=>{
    if (count<10){
      console.log(count)
    countfunc(count+1)
    }
  }
let sub=()=>{ 
  if(count>0){
  console.log(count)
  countfunc(count-1)
}
}

  return (
    <>
      <h1 id='head'>HOOKS {count}</h1>
      <button onClick={add}>INCREASE +</button>
      <button onClick={sub}>DECREASE -</button>
    </>
  )
  
  }
export default App
