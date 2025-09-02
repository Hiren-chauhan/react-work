import React from 'react'
import { Link } from 'react-router-dom'
const HomeBottomText = () => {
  return (
    <div className='font-[Lausanne-500] flex justify-center gap-6'>
      <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-44 flex items-center px-12  border-white rounded-full uppercase '>
        <Link className='text-[6vw] mt-4' to='/projects '>Projects</Link>
      </div>
      <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-44 flex items-center px-12    border-white rounded-full uppercase '>
        <Link className='text-[6vw] mt-4 ' to='/agence'>Agence</Link>
      </div>
    </div>
  )
}
export default HomeBottomText