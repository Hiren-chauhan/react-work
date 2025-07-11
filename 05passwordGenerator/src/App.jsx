import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [symbolAllow, setSymbolAllow] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)
   // state to track copy button click
  // useRef Hook
  const passwordRef = useRef(null)
  // Removed the line that overwrites passwordRef.current
  // password generator
  const passwordGenerator = useCallback(() => {
    //set some variable for password 
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    // if number allow then append in string variable
    if (numberAllow) str += "0123456789"
    // if symbol allow then append in string variable
    if (symbolAllow) str += "!@#$%^&*-_+=[]{}~`"
    // generate password
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    // console.log(pass)
    setPassword(pass)
  }, [length, numberAllow, symbolAllow, setPassword])
  // render the passwordGenerator using useEffect
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllow, symbolAllow, passwordGenerator])
  // Copy password on clipboard
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 300) // reset copied state after 2 seconds
  }, [password])
  return (
    <>
      <div className="text-center w-full max-w-md mx-auto px-4 py-3 rounded-lg bg-gray-700 text-orange-600">
        <h1 className='text-lg font-bold mb-5 text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full bg-white px-3 py-2'
            placeholder='@Passowrd'
            readOnly
            ref={passwordRef}
          />
          <button
            className={`px-3 py-2 shrink-0 text-white ${copied ? `bg-blue-900` : `bg-blue-600`}`}
            onClick={copyPassword}
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <div className='flex text-center gap-x-2 text-sm'>
          <div className='flex gap-x-1'>
            <input type="range"
              value={length}
              min={8}
              max={20}
              className='cursor-pointer'
              id='legth'
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">length ({length})</label>
          </div>
          <div className='flex gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllow}
              className='cursor-pointer'
              id='number'
              onChange={() => setNumberAllow((prev) => !prev)}
            />
            <label htmlFor="number">Number</label>
          </div>
          <div className='flex gap-x-1'>
            <input type="checkbox"
              defaultChecked={symbolAllow}
              className='cursor-pointer'
              id='symbol'
              onChange={() => setSymbolAllow((prev) => !prev)}
            />
            <label htmlFor="symbol">Symbol</label>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
