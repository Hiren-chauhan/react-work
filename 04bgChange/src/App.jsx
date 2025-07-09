import './App.css'
import {useState} from 'react'
// import Button from './component/Button'
function App() {
  let [color, setColor] = useState("olive")
return <div className='w-full h-screen' style={{backgroundColor:color}}>
    <div className='w-full fixed flex bottom-10 justify-center justify-items-center mx-4'>
      <div className='flex flex-wrap justify-items-center px-3 py-2 bg-white rounded-3xl shadow-2xl gap-2'>
        {/* <Button onClick={() => setColor('red')} colorName={'red'}/> */}
        <button onClick={() => setColor('red')} className='outline-0 px-3 py-2 rounded-xl text-white' style={{backgroundColor:'red'}}>Red</button>
        <button onClick={() => setColor('green')} className='outline-0 px-3 py-2 rounded-xl text-white' style={{backgroundColor:'green'}}>green</button>
        <button onClick={() => setColor('blue')} className='outline-0 px-3 py-2 rounded-xl text-white' style={{backgroundColor:'blue'}}>blue</button>
      </div>
    </div>
  </div>
}
export default App
