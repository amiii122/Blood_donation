import React from 'react'
import { asserts } from '../../assets/assets'
const index = ({params}) => {
  const {count,icon,title,disc}=params
   const Icon=icon
  return (
       <div className='z-11 flex relative flex-col gap-2  items-center w-20 text-black  text-center '>
          <span className='absolute text-white  -top-3 bg-red-700  px-[5px] py-[1px] text-[10px] rounded-full z-99' >{count}</span>
          <div className='relative w-13 flex items-center justify-center h-13 bg-red-100 rounded-full '>
           <Icon size={25} strokeWidth={1.8} />
          </div>
          <h4 className='font-bold w-30  text-[11px] capetalize'>{title}</h4>
          <p className='text-[8px] font-bold text-gray-800'>{disc}</p>
        </div>
  )
}

export default index
