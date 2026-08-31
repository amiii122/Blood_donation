import React from 'react'
import Benefit from '../../../Components/Benefits/index'
import { Why_seacton_data } from '../../../assets/assets'
const Why_section = () => {
  return (
<div className="bg-gray-100 flex flex-col items-center gap-8 sm:gap-10 lg:gap-12 px-5 py-10 lg:py-12">

  {/* Section Heading */}
  <div className="flex flex-col items-center justify-center gap-1">
    <h1 className="font-bold text-xl sm:text-[22px] text-center">
      Why Donate Blood?
    </h1>

    <div className="w-15 h-[3px] bg-red-600 rounded-full"></div>
  </div>

  {/* Benefits */}
  <div className="w-full max-w-[1200px] flex flex-wrap items-center justify-center gap-5 lg:gap-10">

    {Why_seacton_data.map((ele, index) => (
      <Benefit key={index} params={ele} />
    ))}

  </div>

</div>
  )
}

export default Why_section
