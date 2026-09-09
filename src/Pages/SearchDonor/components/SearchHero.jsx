import React from "react";
import { asserts } from "../../../assets/assets";

const SearchHero = () => {
  return (
    <section
      className="relative w-full bg-gradient-to-r from-red-700 to-red-600 text-white  overflow-hidden " >
      {/* Content */}
      <div
        className="relative  z-10 max-w-7xl mx-auto  px-6 sm:px-8 g:px-10  
        py-6  sm:py-7 md:py-8  flex items-center  justify-between " >
        {/* Left Content */}
        <div className="max-w-[650px]">
          <h1 className=" font-bold text-2xl sm:text-3xl  md:text-4xl leading-tight ">Search Donors </h1>
          <p  className="mt-2  text-sm   sm:text-base  md:text-[15px]  font-medium  max-w-[500px] ">Find available blood donors quickly and save lives.  </p>
        </div>

        {/* Search Illustration */}
        <div className="  flex-shrink-0  ml-4  sm:ml-8 md:mr-4 ">
          <img
            src={asserts.BloodDropWithSearch}
            alt="Search donors"
            className="w-25 h-25  sm:w-35  sm:h-35  md:w-40  md:h-40  lg:w-45  lg:h-45  object-contain  opacity-80"/>
        </div>

      </div>

      {/* Decorative Background */}
      <div  className="  absolute  right-[-80px]     top-[-100px]    w-72    h-72 bg-red-500   rounded-full   opacity-20   blur-3xl   "  />

      <div  className="   absolute  left-[40%]  bottom-[-100px]  w-64  h-64  bg-red-800   rounded-full opacity-20   blur-3xl   "  />

    </section>
  );
};

export default SearchHero;