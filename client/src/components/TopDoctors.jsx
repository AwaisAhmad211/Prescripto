import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
    const naviagate = useNavigate();
    const {doctors} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center mt-20 gap-6'>
       <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
       <p className='w-88 text-center text-gray-500 text-sm'>Simply browse through extensive list of trusted doctors</p>
       <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'> 
        {
            doctors.slice(0,10).map((item,index) => (
                <div onClick={()=> naviagate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-blue-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-green-500'>
                            <p className='size-2 rounded-full bg-green-500'></p><p>Availble</p>
                        </div>
                        <p className='font-medium text-gray-900'>{item.name}</p>
                        <p className='text-sm text-gray-500'>{item.speciality}</p>
                    </div>
                </div>
            ))
        }
       </div>
       <button onClick={() =>{ naviagate("/doctors");scrollTo(0,0)}} className='bg-primary text-white text-sm font-medium px-12 py-3 rounded-full mt-10 hover:bg-blue-500 transition-all duration-300'>More</button>
    </div>
  )
}

export default TopDoctors
