import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import About from './compontents/About.jsx'
import Home from './compontents/Home.jsx'
import Contact from './compontents/Contact'
import User from './compontents/User.jsx'
import Github from './compontents/Github'
import { githubloader } from './compontents/Github'

// const router=createBrowserRouter( [
//   {
//     path:"/",
//     element:<App/>,
//     children:[
//     {
//       path:"",
//     element:<Home/>
//   },
//   {
//     path:"/about",
//     element:<About/>
//   }
//     ]
//   }
// ])

//can also be written as :
const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='/about' element={<About/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='user/:userid' element={<User/>}/>
    <Route path='user' element={<User/>}/>
    <Route loader={githubloader} path='github' element={<Github/>}/>

  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)