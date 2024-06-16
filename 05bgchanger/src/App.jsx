import { useState } from 'react'


function App() {
  const [color, colorfunc] = useState("black")

//explaination : here color is variable or constant that is declared ..... where as colorfunc is a function which changes the given color according to given vales

  return (
    <>
    <div className='h-screen w-screen p-3' style={{background: color}}>

      <div className='fixed flex flex-wrap bottom-2 justify-center inset-x-0 bg-white p-4 rounded-2xl gap-3 '>

       <button className='p-2 text-white rounded-xl'
    style={{background:"red"}}
    onClick={()=>colorfunc("red")}>
     red
     </button>
     
     <button className='p-2 text-white rounded-xl'
    style={{background:"blue"}}
    onClick={()=>{colorfunc("blue")}}
    >
     blue
     </button>
     <button className='p-2 text-white rounded-xl'
    style={{background:"green"}}
    onClick={()=>{colorfunc("green")}}
    >
     green
     </button>
     
     <button className='p-2 text-white rounded-xl'
    style={{background:"orange"}}
    onClick={()=>{colorfunc("orange")}}
    >
     orange
     </button>
     
     <button className='p-2 text-white rounded-xl'
    style={{background:"gold"}}
    onClick={()=>{colorfunc("gold")}}
    >
     gold
     </button>
     <button className=' p-2 text-white rounded-xl grid gap-4'
    style={{background:"black"}}
    onClick={()=>colorfunc("black")}
    >
     reset (black)
     </button>
     
        </div>
    </div>
    </>
  )
}

export default App
