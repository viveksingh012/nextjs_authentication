import React from 'react'

const Profile = async ({params}) => {
    const {id}= await params;
  return (
    <div>Profile {id}</div>
  )
}

export default Profile