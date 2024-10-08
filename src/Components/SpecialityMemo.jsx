import React from 'react'
import{specialityData} from '../assets/assets_frontend/assets'
import {Link} from 'react-router-dom'
function SpecialityMemo() {
  return (
    <div className='flex flex-col items-center gap-4 py-14 text-gray-800   ' id='speciality'>
        <h1 className='text-3xl font-medium'>Find by Speciality</h1>
        <p className='tex-sm w-1/3 text-center'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        <div className='flex items-center justify-center overflow-x-scroll  gap-4 w-4/5' >
          {specialityData.map((item,index)=>(
            <Link onClick={()=>{
              scrollTo(0,0)
            }} className='flex flex-col text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 items-center' key={index} to={`/doctors/${item.speciality}`}>
              <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
              <p >{item.speciality}</p>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default SpecialityMemo