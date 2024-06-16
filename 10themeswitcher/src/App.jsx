
import { useEffect, useState } from 'react'
import './App.css'
import { Themeprovider } from './context/theme'
import Themebtn from './components/Themebtn'
import Card from './components/Card'

function App() {
  const [themeMode,setThemeMode]=useState('dark')
  
  const darkTheme=()=>{
    setThemeMode('dark')
  }
  const lightTheme=()=>{
    setThemeMode('light')
  }

  useEffect(()=>{

    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])


  return (
    <Themeprovider value={{themeMode,darkTheme,lightTheme}}>
      
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <Themebtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                  <Card/>
                    </div>
                </div>
            </div>
    </Themeprovider>
  )
}

export default App
