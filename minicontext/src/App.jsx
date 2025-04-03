import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider.jsx' 
import Profile from './Components/Profile.jsx'
import Login from './Components/Login.jsx'
function App() {

  return (
    <UserContextProvider>
    <h1>Context Api Project  </h1>
 
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
