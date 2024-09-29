import React, { useState } from 'react'
import {assets} from "../assets/assets"
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [token,setToken] = useState(true);
    const [showLink,setShowLink] = useState(false)
    const Navigate = useNavigate();
  return (
    <nav className='flex justify-between items-center h-20 border-b border-gray-400'>
        <img src={assets.logo} alt="" className='w-44 cursor-pointer' onClick={()=> Navigate("/")} />
        <div className='items-start hidden md:flex gap-5 font-medium text-sm text-zinc-800'>
           <NavLink to="/" className="hover:text-zinc-950">
            HOME
            <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden'/>
           </NavLink>
           <NavLink to="/about" className="hover:text-zinc-950">
            ABOUT
            <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden'/>
           </NavLink>
           <NavLink to="/doctors" className="hover:text-zinc-950">
            DOCTORS
            <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden'/>
           </NavLink>
           <NavLink to="/contact" className="hover:text-zinc-950">
            CONTACT
            <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden'/>
           </NavLink>
        </div>
        {
          token ? <div className='flex items-center gap-2 cursor-pointer group relative'> 
              <img src={assets.profile_pic} alt="" className='w-8 rounded-full'/>
              <img src={assets.dropdown_icon} alt="" className='w-2.5'/>
              <div className='absolute top-0 right-0 pt-14 text-gray-600 text-base font-medium z-20 hidden group-hover:block'>
                  <div className='min-w-48 bg-stone-100 flex flex-col gap-4 p-4'>
                  <p onClick={()=> Navigate("/my-profile")} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={()=> Navigate("/my-appointments")} className='hover:text-black cursor-pointer'>My Appointment</p>
                  <p onClick={()=> setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                  </div>
              </div>
          </div>
          : <div className='w-[100px] lg:w-[150px] lg:text-sm bg-primary flex items-center justify-center rounded-full text-white p-2 text-xs'>
            <button onClick={()=> Navigate("/login")}>Create account</button>
        </div>
        }
    </nav>
  )
}

export default Navbar
