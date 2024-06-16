import { useState } from 'react'
import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './compontents/Footer'
import Head from './compontents/Head'


function App() {

  return (
    <>
    <Head />
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
