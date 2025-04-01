import { useState } from 'react'

import './App.css'

function App() {
  const [color , setcolor] = useState("olive")

  return (
  
    <div className='h-screen w-full' style={{backgroundColor : color}}>
      <div className='p-10  bg-blue-400 border-r-amber-500 font-serif text-center text-5xl rounded-lg'>Background Changer</div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 text-white '>
        <button onClick={() => setcolor("green")}
        className='outline-none px-4 py-1 rounded-full texct-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>
        <button onClick={() => setcolor("brown")}
        className='outline-none px-4 py-1 rounded-full texct-white shadow-lg' style={{backgroundColor:"brown"}}>Brown</button>
        <button onClick={() => setcolor("aqua")}
        className='outline-none px-4 py-1 rounded-full texct-white shadow-lg' style={{backgroundColor:"aqua"}}>Aqua</button>
        <button onClick={() => setcolor("blue")}
        className='outline-none px-4 py-1 rounded-full texct-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={() => setcolor("yellow")}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"Yellow"}}>Yellow</button>
        <button onClick={() => setcolor("red")}
        className='outline-none px-4 py-1 rounded-full texct-white shadow-lg' style={{backgroundColor:"Red"}}>Red</button>
      </div>

    </div>
    
  )
}

export default App
