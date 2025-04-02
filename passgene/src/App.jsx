import { useEffect, useState } from 'react'


import { useCallback } from 'react';

function App() {
  const [length, setlength] = useState(8)
  const [numbers , setnumber] = useState(false);
  const [characters , setcharacters] = useState(false);
  const [pass , setpass] = useState("")

  const PasswordGenerator = useCallback(()  => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numbers) str += "0123456789"
    if(characters) str += "!@#$%^&*()_-+=[]{}|;:`~"
    for(let i = 1; i<=length ; i++){
      let char = Math.floor(Math.random() * str.length + 1 )
      pass = pass + str.charAt(char)
    }
    setpass(pass)

  } , [length , numbers , characters ,setpass ])
  useEffect(() => {
    PasswordGenerator()
  },[length ,numbers , characters , PasswordGenerator])


  return (
   <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8  text-blue-500 bg-gray-700 '>
      <h1 className='text-white text-center '>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"  value={pass}
        className='outline-none w-full py-1 px-3 my-3 ' placeholder='password' readOnly
        />
        <button className='bg-blue-700 text-white px-2  shrink-0 rounded-xl '>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min= {6}
          max = {100}
          className='cursor-pointer'
          onChange={(e)=> {setlength(e.target.value)}}/>
          <label htmlFor="">Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked = {numbers}
          id = "numberinput"
          onChange={() => {
            setnumber((prev) => !prev)
          }} />
          <label htmlFor="">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked = {characters}
          id = "characterinput"
          onChange={() => {
            setcharacters((prev) => !prev)
          }} />
          <label htmlFor="">Characters</label>
        </div>

      </div>
    </div>
   </>
  )
}

export default App
