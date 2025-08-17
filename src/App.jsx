import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Headlines from './components/Business'
import Sports from './components/Sports'
import Technology from './components/Technology'
import Health from './components/Health'
import Business from './components/Business'
const router = createBrowserRouter(
  [
    {
      path:'/',
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:'/business',
      element:
      <div>
        <Navbar/>
        <Business/>
      </div>
    },
    {
      path:'/sports',
      element:
      <div>
        <Navbar/>
        <Sports/>
      </div>
    },
    {
      path:'/technology',
      element:
      <div>
        <Navbar/>
        <Technology/>
      </div>
      
    },
    {
      path:'/health',
      element:
      <div>
        <Navbar/>
        <Health/>
      </div>
    }
  ]
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header className='flex p-3 bg-blue-100'>
        <h1 className='text-xl font-bold'>Newsly</h1>
        <p className='text-center w-[100%]'>All News Top Headlines</p>
      </header>
      <div className='flex flex-col items-center mt-3 font-medium text-xl'>
        <h2>Stay Update with Trendy News</h2>
        <RouterProvider router={router}/>
      </div>
    </div>
  )
}

export default App
