import React from 'react'
import { Link,NavLink } from 'react-router-dom'
function Head() {
  return (
    <>
     <header className='bg-gray-500'>
     <div className='text-yellow-200 flex flex-wrap justify-between items-center m-5 p-5'>
    <Link to=''>
    <img 
    className='h-32 w-32' src="https://i.pinimg.com/474x/3f/36/fc/3f36fcdd50dcbfd4a15080c52743a596.jpg" alt="not available" />
    </Link>

    <NavLink to='/home'  className={({isActive}) =>`${isActive ? "text-black" : "text-yellow-200"}  hover:text-orange-700`}>
      home</NavLink>

    <NavLink to='/about' className={({isActive})=>
      `${isActive ?"text-black": "text-yellow-200"} hover:text-orange-700`}>
        About</NavLink>

    <NavLink to='/contact' className={({isActive})=>
      `${isActive ?"text-black": "text-yellow-200"} hover:text-orange-700`}>contact us</NavLink>

          <NavLink to='/user' className={({isActive})=>
      `${isActive ?"text-black": "text-yellow-200"} hover:text-orange-700`}>User</NavLink>

    <Link className='m-3 p-2 bg-red-600'>log in </Link>
    
    <Link to='/github' className='m-3 p-2 bg-red-600'> Github </Link>

    </div>
     </header>
</>
  )
}

export default Head