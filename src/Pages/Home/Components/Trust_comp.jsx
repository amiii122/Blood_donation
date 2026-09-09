import React from 'react'
import { asserts } from '../../../assets/assets'

const Trust_comp = ({params}) => {
  const {icon,count,name}=params
  
  return (
    <div className='flex items-center gap-3 '>
           <img className='w-8 h-8' src={icon} alt={icon} />
            
           <div className=''>
               <h2 className='font-bold text-[14px]'>{count}</h2>
                <p className='text-[11px]'>{name}</p>
           </div>
    </div> 
  )
}

export default Trust_comp
