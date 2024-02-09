import React, { useContext } from 'react'
import UserContext from '../context/Usercontext'

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div> Please login </div>
  return (
    <div>
      <h1>{user.username}, {user.password}</h1>    
    </div>
  )
}

export default Profile
