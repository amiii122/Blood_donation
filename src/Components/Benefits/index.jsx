import React from 'react'
import './style.css'
import { asserts  } from '../../assets/assets'
const index = ({params}) => {
  const {icon,title,dis}=params

  return (
    <div className='flex-none shrink-0 transition-all duration-300 hover:scale-[1.03] flex flex-col gap-2 items-center bg-white w-53 h-50 text-black rounded-xl text-center p-4 shadow-lg shadow-gray-400 '>
      <div className='relative w-14 h-14 bg-red-200 rounded-full '>
        <img className='absolute w-full h-full object-cover p-3' src={icon} alt={icon} />
      </div>
      <h4 className='font-bold   text-[13px] capetalize'>{title}</h4>
      <p className='text-[12px] font-semibold text-gray-700 w-38'>{dis}</p>
    </div>
  )
}

export default index
