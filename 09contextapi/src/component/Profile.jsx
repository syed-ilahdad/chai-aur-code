import React, { useContext } from 'react'
import UserContext from '../context/Userconext'

function Profile() {
    const {user} = useContext(UserContext)
    console.log(user)
    console.log(user.password)
    //below code has error
    if (!user) return <div> please login </div>
    return <div> welcome {user.username}</div>
  }

export default Profile