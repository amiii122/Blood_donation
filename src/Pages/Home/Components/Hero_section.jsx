import React from 'react'
import { asserts } from '../../../assets/assets'
import Trust_comp from './Trust_comp'
import { Trust } from '../../../assets/assets'

const Hero_section = () => {
  
  return (
    <div className="w-full min-h-[68vh] bg-white flex flex-col lg:flex-row">

  {/* Left Section */}
  <div className="w-full lg:w-[50%] px-6 sm:px-10 lg:pl-20 lg:pr-6 py-10 lg:py-0 flex flex-col justify-center">

    <h2 className="text-4xl sm:text-5xl lg:text-[50px] leading-tight font-bold max-w-[440px]">
      Donate Blood,{" "}
      <span className="text-4xl sm:text-5xl lg:text-[50px] font-bold text-red-700">
        Save Lives
      </span>
    </h2>

    <p className="mt-4 text-base sm:text-lg lg:text-[20px] max-w-[480px] font-semibold leading-relaxed">
      Your single donation can bring hope, strength and life to someone in need
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-5">

      <button className="px-5 py-3 bg-red-600 rounded font-bold text-white flex items-center justify-center gap-2 w-full sm:w-fit">
        <img
          className="w-4 h-4"
          src={asserts.white_heart_icon}
          alt="heart icon"
        />
        Become a Donor
      </button>

      <button className="px-5 py-3 flex items-center justify-center text-red-600 border border-red-600 rounded font-semibold gap-1 w-full sm:w-fit">
        <img
          className="w-5 h-5"
          src={asserts.red_drop_icon}
          alt="drop icon"
        />
        Request Blood
      </button>

    </div>

    {/* Trust / Stats */}
    <div className="pt-7 flex flex-wrap items-center gap-x-8 gap-y-5 sm:gap-x-12">
      {Trust.map((ele, index) => (
        <Trust_comp key={index} params={ele} />
      ))}
    </div>

  </div>

  {/* Right Section */}
  <div className="relative w-full lg:w-[50%] h-[300px] sm:h-[400px] lg:h-[68vh]">
    <img
      className="absolute inset-0 w-full h-full object-cover"
      src={asserts.Hero_section}
      alt="Blood donation"
    />
  </div>

</div>
  )
}

export default Hero_section
