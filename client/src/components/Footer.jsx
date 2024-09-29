import React from 'react'
import {assets} from "../assets/assets"
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col items-center mx-8 my-32 gap-10'>
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='flex-1 flex flex-col gap-6'>
          <img className='w-32' src={assets.logo} alt="" />
          <p className='text-sm text-gray-500 w-10/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nostrum deserunt quo magni eum possimus natus, pariatur reprehenderit nisi! Nihil ea voluptatibus molestias suscipit quibusdam reprehenderit aperiam ipsam perferendis! Fugit, dolorum eveniet.</p>
        </div>
        <div className='flex-1 flex flex-wrap gap-6'>
          <div className='flex-1 flex flex-col gap-6'>
            <h3 className='font-medium'>COMPANY</h3>
            <div className='flex flex-col text-gray-500 text-sm gap-2'>
            <p><Link onClick={()=> scrollTo(0,0)} to="/">Home</Link></p>
            <p><Link to="/about">About Us</Link></p>
            <p><Link to="/contact">Contact Us</Link></p>
            <p><Link>Privacy Policy</Link></p>
            </div>
          </div>
          <div className='flex-1 flex flex-col gap-6'>
            <h3 className='font-medium'>GET IN TOUCH</h3>
            <div className='flex flex-col text-gray-500 text-sm gap-2'>
            <p>+1-234-567-8945</p>
            <p>prescripto@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className='text-sm font-medium text-gray-600 text-center'>Copyright 2024 c Prescripto - All Right Reserved</div>
    </div>
  )
}

export default Footer
