import React from 'react'
import { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

// const [data,setData]=useState([]);
// useEffect(()=>{
//     fetch('https://api.github.com/users/syed-ilahdad')
//     .then(response=>response.json())
//     .then(data=>{
//         console.log(data)
//         setData(data)
//     })
// },[]);

const data=useLoaderData()
  return (
  <>
  <div>Github</div>
  <div>user name : {data.login}</div>
  <div>Followers : {data.followers}</div>
  <img src={data.avatar_url}  alt="not available" />
  </>
  )
}

export default Github

export const githubloader = async()=>{
    const response =await fetch('https://api.github.com/users/syed-ilahdad')
    return response.json()
}