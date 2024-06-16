import { useState,useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  //defining every hooks needed in the project
  const [len, setlen] = useState(8) //used for handling length of the password
  const [numallow,setnumallow]=useState(false) //used for handling number allowed functionality in the password
  const [charallow,setcharallow]=useState(false) //used for handling symbols allowed functionality in the password
  const [password,setpassword]=useState("") //used for handling password

  const passwordref=useRef(null) //it is used for optimizing and handling copied password
  const copyclip=useCallback(()=>{
 
    passwordref.current?.select(); //visiblilty of copied password
    passwordref.current?.setSelectionRange(0,3); //0-3 index is given as range to be copied from password
    window.navigator.clipboard.writeText(password) //the clipboard text is copied from password
  },[password])

  //below is function created for password generation

  const passwordGen = useCallback(()=>{ //callback is used to generate password according to the effect on multiple dependencies given

    let pass="" //declaring the password variable to be generated
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 
    if (numallow) {
      str=str+"1234567890" //adding numbers to the str
    }//if can also be defined as 
    if (charallow) str+=".,/;'[]-=/*+<>?:{}()_!@#$%^&*~" //adding symbols to the str 
    
    for (let i = 1; i <= len; i++) { 
      let strindex=Math.floor(Math.random()*str.length+1) //a index number is randomly generated from length of str declared (+1 is taked to avoid 0 while random generation)
      pass=pass+str.charAt(strindex) //password is created using strindex and running it in for loop
    }
    setpassword(pass) //the generated password is returned in setpassword function

  },[len,numallow,charallow,setpassword]//dependencies called when the change in effect is done
  )

  useEffect(()=>{passwordGen()},[len,numallow,charallow,passwordGen] //useeffect is used to call passwordGen() when the following dependencies are changed of effected
    )

  return (
    <>
    
      <div className='w-full max-w-md mx-auto my-8 rounded-xl shadow-xl px-4 py-3 bg-orange-600'>
      <h1 className='text-white text-center my-3 text-2xl'>password generator</h1>
      <div className='flex shadow rounded-xl overflow-hidden mb-4'>
        
        <input 
        value={password} //calling password generated from above(password created ->callback ->useeffect ->usestate)
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordref} //ref is the prop used to call passwordref i.e a useref hook
        type="text" />
        <button className='outline-none bg-blue-700 text-white px-3 py-1 shrink-3 text-xl'
        onClick={copyclip} >copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={8}
          max={50}
          value={len}
          className='cursor-pointer'
          onChange={function (e) { setlen(e.target.value) }} //this function navigates the values of len using range
          />
          <label> Length : {len}</label>
        </div>

        <div className='flex text-sm gap-x-1'>
        <input
         type="checkbox" 
         defaultChecked={numallow}
         id="numinput"
         onChange={()=>{setnumallow((prev)=>!prev)}} //this callbackfunction navigates values of checkox from false - true
         />
         <label> Number</label>
      </div>

      <div className='flex text-sm gap-x-1'>
        <input
         type="checkbox" 
         defaultChecked={charallow}
         id="charallow"
         onChange={()=>{setcharallow((prev)=>!prev)}}/>
         <label> Characters</label>
      </div>

      </div>
      </div>
    </>
  )
}

export default App
