import React from 'react'
import { assets } from '../../assets/assets'
function NavaBar() {
  return (
    <>
      <div className="w-full flex justify-center items-center font-semibold">
        <div className="flex items-center gap-2">
          <img className='w-8 bg-black rounded-2xl corsor-pointer' src={assets.arrow_left} alt="left_arrow" />
          <img className='w-8 bg-black rounded-2xl corsor-pointer' src={assets.arrow_right} alt="right_arrow" />
        </div>
      </div>
    </>
  )
}
export default NavaBar