import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Footer() {
  return (
  <> <footer className='bg-blue-800 text-white flex justify-between items-center mx-60 p-5 lg:py-8'>
    <Link to='home'>home</Link>
    <Link to='about'>About us</Link>
    <Link to='#'>Contact us</Link>
</footer></>
   
  )
}

export default Footer