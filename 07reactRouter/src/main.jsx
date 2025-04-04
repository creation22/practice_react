import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Header/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github ,{githubInfoLoader} from './components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element:<Layout/>,
    children : [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "About",
        element : <About/>
      },{
        path : "Contact",
        element : <Contact/>
      },{
        path : "User/:userid" ,
        element : <User/>
      },{
        // loader : {githubInfoLoader},
        path : "Github",
        element : <Github/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
