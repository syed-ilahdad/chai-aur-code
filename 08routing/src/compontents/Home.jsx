import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Home() {
  return (
    <>
    <div className='m-40 '>
      <Link to='/' className='p-4 rounded-2xl bg-lime-700 text-white' >click here to origin page</Link>
    <p className='m-10 bg-orange-400 rounded-xl h-20'>Lorem ipsum dolor sit amet.</p>
    </div>
    
    </>
  )
}

export default Home