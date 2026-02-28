import React from 'react'
import Logo from './Logo' 
const Navbar = () => {
  return (
    <nav className='flex flex-row justify-around bg-black text-white py-3 items-center '>
      <div className=''>
        <Logo />
      </div>
      <div className='flex flex-row m-2 text-gray-300 '>
        <ul className='flex flex-row '>
          <li className='px-2 hover:text-white hover:underline '><a href="">Home</a></li>
          <li className='px-2 hover:text-white hover:underline' ><a href="">About</a></li>
          <li className='px-2 hover:text-white hover:underline'><a href="">Services</a></li>
          <li className='px-2 hover:text-white hover:underline'><a href="">Contact</a></li>
        </ul>
      </div>
      <div className='flex flex-row gap-2'>
        <button className='border px-2 py-1 rounded hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300'>Sign in</button>
        <button className='border px-2 py-1 rounded hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300'>Sign up</button>
      </div>
    </nav>
  )
}
1
export default Navbar
