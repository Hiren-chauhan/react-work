import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
  const { userid } = useParams()
  return (
    <div className='bg-gray-400 p-4 m-5'>User: {userid}</div>
  )
}
export default User