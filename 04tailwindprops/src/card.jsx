import React from 'react'

function Card({head="box",object="object unavailable" ,image=""}) {   

  return (
    <>
    <div className='p-4 bg-yellow-400 rounded-xl border-t-8 border-white'>
        <h1>{head}</h1>
        <p>this card represent vite X tailwind </p>
        <img src={image} alt='not available'/>
        <p>{Object.values(object)}</p>
    </div>
    </>
    
  )
}

export default Card