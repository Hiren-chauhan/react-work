import React from 'react'
import reactLogo from '../assets/react.svg'
function Card({userName, btnClick='View Profile'}) {
  return (
    <div className='relative h-[400-px] w-[300px] rounded-md'>
      <img src={reactLogo} className='z-0 h-full w-full rounded-md object-cover' alt="react svg" />
      <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent'></div>
      <div className='absolute bottom-4 left-4 text-left'>
        <h1 className='text-lg font-semibold text-white'>{userName}</h1>
        <p className='mt-2 text-sm text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In est consequatur assumenda possimus nulla tenetur, id alias consectetur! Sapiente saepe ea nihil dolorem asperiores doloribus labore id! Adipisci, quia et.</p>
        <button className='mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white'>{btnClick} -</button>
      </div>
    </div>
  )
}
export default Card