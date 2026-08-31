import React from 'react'
import Contant_comp from './Contant_comp'
import { contact_info } from '../../../assets/assets'
const Contact_us = ({params}) => {

  return (
<div className="relative w-[92vw] lg:w-[80vw] mx-auto mt-7 mb-4 p-5 sm:p-7 lg:p-8 rounded-lg shadow-sm shadow-gray-400 bg-white">

  {/* Dotted decoration */}
  <div className="hidden sm:block absolute right-4 top-8 w-12 h-24 opacity-60 bg-[radial-gradient(circle,_#dc2626_1.5px,_transparent_1.5px)] [background-size:12px_12px]"></div>

  <div className="flex flex-col md:flex-row gap-8 md:gap-10">

    {/* Left Section - Contact Information */}
    <div className="w-full md:w-[35%] md:border-r md:border-gray-200 md:pr-8">

      <h1 className="text-xl sm:text-2xl font-bold">
        Contact Us
      </h1>

      <div className="w-16 sm:w-20 h-[3px] bg-red-600 rounded-full mt-1 mb-5"></div>

      <div className="flex flex-col gap-4">

        {
          contact_info.map((ele, index) => (
            <Contant_comp key={index} params={ele} />
          ))
        }

      </div>

    </div>


    {/* Right Section - Contact Form */}
    <div className="w-full md:w-[65%]">

      <form className="flex flex-col gap-3">

        {/* Name + Email */}
        <div className="flex flex-col sm:flex-row gap-3">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full sm:w-1/2 px-4 py-3 text-xs border border-gray-200 rounded-md outline-none focus:border-red-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full sm:w-1/2 px-4 py-3 text-xs border border-gray-200 rounded-md outline-none focus:border-red-500"
          />

        </div>

        {/* Message */}
        <textarea
          placeholder="Your Message"
          className="w-full h-24 sm:h-28 px-4 py-3 text-xs border border-gray-200 rounded-md outline-none resize-none focus:border-red-500"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-md text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
        >
          <span>➤</span>
          Send Message
        </button>

      </form>

    </div>

  </div>

</div>
  )
}

export default Contact_us
