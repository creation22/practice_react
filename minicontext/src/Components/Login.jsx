import React ,{useContext , useState}from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username , setusername] = useState('')
    const [password , setpassword] =   useState('')
    const {setUser}  = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username , password})
    }

  return (
    <div>
      <h2>Login</h2>
      <label htmlFor="">Username : </label>
      <input type="text" placeholder='username' value={username} onChange={(e) => setusername(e.target.value)} />
    <br /> <br />
          <label htmlFor="password">Password : </label>
      <input type="password" placeholder='password'  value={password} onChange={(e) => setpassword(e.target.value)} />
      <br />
 <br />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      <br />
    </div>
  )
}

export default Login
