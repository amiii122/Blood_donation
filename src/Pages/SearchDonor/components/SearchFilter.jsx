import React from "react";
const SearchFilter = () => {
  return (
    <div className="  relative  z-20 w-[92%] max-w-6xl mx-auto  -mt-1 md:-mt-5 bg-white rounded-xl shadow-md borde border-gray-100 p-4  sm:p-5 md:p-6  ">

      <div className=" grid grid-cols-1 md:grid-cols-4 gap-4  md:gap-5 items-end  " >

        {/* Blood Group */}
        <div className="w-full">
          <label  className="block text-xs font-semibold  text-gray-600  mb-2  " >
            Blood Group
          </label>

          <div  className=" h-11  w-full border  border-gray-200 rounded-md px-3 flex  items-center justify-between text-sm font-medium text-gray-700 cursor-pointer  transition-all duration-200 hover:border-red-400   " >
            <div className="flex items-center gap-2">
              <span className="text-red-600">🩸</span>
              <span>O+</span>
            </div>

            <span>⌄</span>
          </div>
        </div>


        {/* City */}
        <div className="w-full">
          <label  className=" block  text-xs font-semibold  text-gray-600  mb-2">   City
          </label>

          <div className=" h-11 w-full border border-gray-200  rounded-md  px-3   flex  items-center justify-between  text-sm  font-medium  text-gray-700 cursor-pointer  transition-all duration-200  hover:border-red-400  " >
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Lahore</span>
            </div>

            <span>⌄</span>
          </div>
        </div>


        {/* Availability */}
        <div className="w-full">
          <label className=" block text-xs font-semibold text-gray-600  mb-2  "  >
            Availability
          </label>

          <div className="  h-11 w-full  border border-gray-200 rounded-md  px-3 flex  items-center justify-between text-sm  font-medium text-gray-700 cursor-pointer  transition-all duration-200 hover:border-red-400  " >
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>All</span>
            </div>
             <span>⌄</span>
          </div>
        </div>


        {/* Search Button */}
        <button className=" h-11  w-full bg-red-600  text-white  rounded-md flex items-center justify-center  gap-2 text-sm font-semibold
            cursor-pointer transition-all duration-300  hover:bg-red-700 hover:shadow-md  hover:scale-[1.01]  active:scale-[0.98]  " >
          <span className="text-base">⌕</span>
          <span>Search Donors</span>
        </button>

      </div>
    </div>
  );
};

export default SearchFilter;