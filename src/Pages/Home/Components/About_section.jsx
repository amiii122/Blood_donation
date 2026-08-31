import React from 'react'
import { asserts } from '../../../assets/assets'
const About_section = () => {
  return (
   <div className="w-full min-h-[38vh] bg-gray-200 mx-auto mt-10 px-5 py-8 lg:px-0 lg:py-0 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">

  {/* Image Section */}
  <div className="w-full sm:w-[70%] md:w-[40%] lg:w-100 h-[220px] md:h-[280px] lg:h-full  rounded-lg">
     <img src={asserts.aboutHeroImg}  className="mx-auto h-full rounded-xl w-full object-cover object-center" />
  </div>

  {/* Content Section */}
  <div className="w-full sm:w-[70%] md:w-auto">

    <h1 className="text-red-700 font-bold text-[13px]">
      ABOUT US
    </h1>

    <h1 className="capitalize font-bold text-2xl sm:text-[30px] leading-tight">
      We connect. we{" "}
      <span className="text-red-500 font-bold text-2xl sm:text-[30px]">
        save.
      </span>
    </h1>

    <p className="font-semibold text-[12px] w-full max-w-[380px] leading-relaxed mt-2">
      Our mission is to connect blood donors with recipient quickly and
      efficiently. We aim to make blood donation simple, accessible and
      reliable for everyone, everywhere.
    </p>

    <button className="px-5 py-2 bg-red-500 text-white rounded-lg text-[12px] mt-3">
      Learn more about us
    </button>

  </div>

</div>
  )
}

export default About_section
