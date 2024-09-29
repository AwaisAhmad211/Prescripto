import React from 'react'
import {assets} from "../assets/assets"
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()
  return (
    <div className='flex mt-20 bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20'>
      <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 flex flex-col gap-6'>
        <p className='text-3xl md:text-4xl font-semibold leading-tight md:leading-tight lg:leading-tight text-white'>Book Appointment <br/> With 100+ Trusted Doctors</p>
        <button onClick={()=>{ navigate("/login");scrollTo(0,0)}} className='w-[150px] bg-white flex items-center justify-center rounded-full text-gray-800 p-2 text-sm'>Create Account</button>
      </div>
      <div className='w-1/2 hidden md:block lg:w-[370px] relative'>
        <img className='w-full absolute right-0 bottom-0 max-w-md' src={assets.appointment_img} alt="" />
      </div>
    </div>
  )
}

export default Banner
