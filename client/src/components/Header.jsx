import React from 'react'
import {assets} from "../assets/assets"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex flex-col flex-wrap md:flex-row bg-primary text-white px-6 rounded-lg mt-4 md:px-10 lg:px-20'>
      
      {/* --------- Left Side ---------- */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl font-semibold leading-tight md:leading-tight lg:leading-tight text-white'>Book Appointment <br/> With Trusted Doctors</p>
        <div className='flex gap-4 items-center flex-col md:flex-row font-light text-md'>
            <img className='w-28' src={assets.group_profiles} alt="" />
            <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        </div>
        <a href="#speciality">
        <div className='flex bg-white text-gray-600 text-xs py-3 px-6 rounded-full gap-2 hover:scale-105 transition-all duration-500'>
            <button>Book Appointment</button>
            <img className='w-3' src={assets.arrow_icon} alt=""/>
        </div>
        </a>
      </div>
      {/* --------- Right Side --------- */}
      <div className='md:w-1/2 relative'>
       <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header
