import React from 'react'
import { useRouter } from 'next/router'

const SingleUser = () => {
    const router = useRouter();
  return (
    <div>
        {/* http://localhost:3000/users/1 file based routing  */}
        <h1>Single User Page of ID : {router.query.id} </h1>
        <p>This page displays the details of a single user.</p>
        {/* You can add more user-specific information here */}
      
    </div>
  )
}

export default SingleUser
