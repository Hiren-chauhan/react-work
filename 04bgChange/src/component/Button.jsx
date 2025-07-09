import React from 'react'
function Button({colorName}) {
  return (
    <button className='outline-0 px-3 py-2 rounded-xl text-white' style={{backgroundColor:colorName}}>{colorName}</button>
  )
}
export default Button