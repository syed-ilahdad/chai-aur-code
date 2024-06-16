import { useState } from 'react'
import Login from './component/Login'
import Profile from './component/Profile'
import './App.css'
import UserContextProvider from './context/UserconxtProvider'


function App() {

  return (
    <UserContextProvider>
     <h1>react context api</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
