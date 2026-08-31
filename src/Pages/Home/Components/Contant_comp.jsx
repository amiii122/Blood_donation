import React from 'react'
import { asserts } from '../../../assets/assets'

const Contant_comp = ({params}) => {
    const {icon,name,addres}=params
  return (
    <div className='flex items-center gap-3 mt-4 '>
        <div className='relative w-10 h-10 bg-red-700 rounded-full'>
            <img className='absolute w-full h-full object-cover p-2' src={icon} alt={name} />
        </div>
           <div className=''>
               <h2 className='font-bold text-[12px]'>{name}</h2>
                <p className='text-[12px] text-semibold'>{addres}</p>
           </div>
    </div> 
  )
}

export default Contant_comp
