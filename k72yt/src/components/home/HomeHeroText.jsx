import React from 'react'
import Video from './Video'
const HomeHeroText = () => {
  return (
    <div className='font-[lausanne-300] pt-5 text-center'>
      <div className='text-[9.5vw] uppercase leading-[9vw]'>L'étincelle</div>
      <div className='text-[9.5vw] uppercase leading-[9vw] flex justify-center items-center'>
        qui
        <div className='h-[7vw] w-[16vw] -mt-4 rounded-full overflow-hidden flex justify-center items-center'>
          <Video/>
        </div>
        génère
      </div>
      <div className='text-[9.5vw] uppercase leading-[9vw]'>la créativité</div>
    </div>
  )
}
export default HomeHeroText