import React from "react";
import { asserts } from "../../../assets/assets";

const DonorCard = ({
  name="Nadia",
  image=asserts.profil,
  bloodGroup="B+",
  city="kohat",
  phone="0346 4131 917",
  distance='12km',
  available = true,
}) => {
  return (
    <div className="w-full  mt-2 bg-white border border-gray-200 rounded-xl px-3 py-3 sm:px-4 shadow-sm
                    flex items-center justify-between transition-all duration-300 hover:shadow-md
                    hover:border-red-200">
       <div className="flex items-center gap-3 justify-center">
          {/* Donor Image */}
          <img src={image}  alt={name} className=" w-12 h-12  sm:w-14  sm:h-14  rounded-full  object-cover  flex-shrink-0 "/>
          {/* Donor Information */}
         <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1">
          <h3 className="font-bold  text-[10px] sm:text-base  text-gray-900  truncate  " >{name}</h3>
          {/* Verified Icon */} 
          <span className="text-red-600 text-[10px]"> ✿ </span>
        </div>


        {/* Blood Group + City */}
        <div
          className="flex items-center gap-3  mt-1  text-[10px]  text-gray-600 " >
          <span className="flex items-center gap-1">
            <span className="text-red-600 ">🩸</span>
            {bloodGroup}
          </span>

          {/* City hidden on mobile */}
          <span className="hidden sm:flex items-center gap-1">
            <span>📍</span>
            {city}
          </span>
        </div>


        {/* Phone - Desktop only */}
        <div className="hidden sm:block  text-[10px] text-gray-600  mt-1 ">☎ {phone}</div>

         </div> 
       </div>
    
      {/* Availability + Distance */}
      <div className=" flex flex-col items-end gap-1 flex-shrink-0 ">

        {/* Available */}
        <span
          className={`px-2  py-1 rounded-full text-[8px]  sm:text-xs font-semibold

            ${
              available
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-500"
            }
          `}
        >
          {available ? "Available" : "Unavailable"}
        </span>


        {/* Distance */}
        <span className="  flex  items-center  gap-1  text-[8px]   sm:text-xs   text-gray-600   " >
          <span>📍</span>
          {distance} km away
        </span>

      </div>

      {/* View Details */}
      <button
        className="
          flex-shrink-0  px-1 py-1.5 sm:px-4  sm:py-2  border border-red-500  text-red-600  rounded-md  text-[10px]
          sm:text-xs font-semibold flex items-center gap-1 transition-all  duration-300  hover:bg-red-600
          hover:text-white  active:scale-95  ">
        {/* <img>{asserts.single_icon}</img> */}
        <img className="w-2 h-2" src={asserts.single_icon} alt="" />
        <span>View Details</span>
      </button>
      </div>
    
  );
};

export default DonorCard;