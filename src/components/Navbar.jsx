import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='grid grid-cols-5 gap-4 place-content-evenly mt-4  max-md:grid-cols-3'>
      <NavLink className='text-white bg-red-500 pl-4 pr-4 rounded-3xl focus:text-blue-500 border-b text-center'  to="/">
        Home
      </NavLink>

      <NavLink className='text-white bg-red-500 pl-4 pr-4 rounded-3xl focus:text-blue-500 border-b text-center' to ="/business">
        Business
      </NavLink>

      <NavLink className='text-white bg-red-500 pl-4 pr-4 rounded-3xl pl-4 pr-4 rounded-3xl focus:text-blue-500 border-b text-center' to ="/sports">
        Sports
      </NavLink>

      <NavLink className='text-white bg-red-500 pl-4 pr-4 rounded-3xl focus:text-blue-500 border-b text-center' to ="/technology">
        Technology
      </NavLink>

      <NavLink className='text-white bg-red-500 pl-4 pr-4 rounded-3xl focus:text-blue-500 border-b text-center' to ="/health">
        Health
      </NavLink>
    </div>
  )
}

export default Navbar