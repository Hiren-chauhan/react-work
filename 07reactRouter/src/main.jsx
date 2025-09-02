import { StrictMode } from 'react'
import { createRoot, Route } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Laypout from './Laypout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
// Method 1 for routing
const router = createBrowserRouter([
  {
    path: '/',
    element: <Laypout/>,
    children:[
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path:'user/:userid',
        element: <User/>
      },
      {
        path:'github',
        element: <Github/>
      }
    ]
  }
])
// Method 2 for routing
// const router = createBrowserRouter([
//   <Route path='/' element={<Laypout/>}>
//     <Route path='' element={<Home/>}/>
//     <Route path='about' element={<About/>}/>
//     <Route path='contact' element={<Contact/>}/>
//     <Route path='user/:id' element={<User/>}/>
//   </Route>
// ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
