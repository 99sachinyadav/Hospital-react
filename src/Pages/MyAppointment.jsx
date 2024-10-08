import React, { useContext } from 'react'
import { AppContext } from '../Context/Context'

function MyAppointment() {
   const {doctors}=useContext(AppContext)
   
  return (
    <div className='mt-4'>
        <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointment</p>
     <div>
{
    doctors.slice(0,5).map((item,index)=>(
   <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b ' key={index}>
    <div>
        <img className='w-32 bg-indigo-50 ' src={item.image}  />
    </div>
    <div className='flex-1 text-sm text-zinc-700'>
        <p className='text-neutral-800 font-sm'>{item.name}</p>
        <p>{item.specility}</p>
        <p className='text-zinc-800 font-medium mt-1'>Address</p>
        <p className='text-xs '>{item.address.line1}</p>
        <p  className='text-xs'>{item.address.line2}</p>
        <p className='text-sm mt-1'><span className='text-sm text-neutral-800 font-medium '>Date & Time</span> 23, Octuber, 2024 | 8:30 PM </p>
    </div>
    <div></div>
    <div className='flex flex-col gap-2 justify-end'>
        <button className='text-sm border sm:min-w-48 rounded hover:text-white  hover:bg-primary py-2'>Pay Online</button>
        <button className='text-sm border sm:min-w-48 rounded hover:text-white hover:bg-red-600 py-2'>Cancel Appointment</button>
    </div>
   </div>
    ))
}
        </div>
    </div>
  )
}

export default MyAppointment