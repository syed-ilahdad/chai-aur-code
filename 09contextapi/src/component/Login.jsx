import React, { useState,useContext } from 'react'
import UserContext from '../context/Userconext'

function Login() {

    const {setUser} = useContext(UserContext)
    const [username,setusername]=useState('')
    const [password, setpassword] = useState('')

    const loginsubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <>
    <h2>login</h2>
    <input type="text" value={username}
    onChange={(e)=> setusername(e.target.value)}
    placeholder='username' />
{"  "}
    <input type="password" value={password}
    onChange={(e)=> setpassword(e.target.value)} 
    placeholder='password'/>

    <button onClick={loginsubmit}>submit</button>
    </>
  )
}

export default Login