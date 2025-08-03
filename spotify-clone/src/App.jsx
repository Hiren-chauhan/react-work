import React from 'react'
import { SideBar, Player, Display } from './components'
function App() {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%]  flex">
        <SideBar/>
        <Display/>
      </div>
      <Player/>
    </div>
  )
}
export default App