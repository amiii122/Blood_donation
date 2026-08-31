import React from "react";
const SearchSummary = () => {
  return (
    <div
      className=" p-4 w-full h-full bg-white border border-gray-200 rounded-xl shadow-sm" >

      {/* Heading */}
      <h2
        className="text-lg font-bold text-gray-900  mb-5 ">
        Search Summary
      </h2>


      {/* Summary Information */}
      <div
        className="flex md:flex-col md:items-start md:gap-4 items-center justify-evenly"
      >

        {/* Blood Group */}
        <div className="text-center md:text-left">
          <p
            className="
              text-[10px]
              sm:text-xs
              text-gray-500
             
            "
          >
            Blood Group
          </p>

          <div
            className="
              flex
              items-center
              justify-center
              md:justify-start
              gap-1
              font-bold
              text-red-600
              text-sm
            "
          >
            <span>🩸</span>
            <span>O+</span>
          </div>
        </div>


        {/* City */}
        <div className="text-center md:text-left">
          <p
            className="
              text-[10px]
              sm:text-xs
              text-gray-500
              mb-1
            "
          >
            City
          </p>

          <div
            className="
              flex
              items-center
              justify-center
              md:justify-start
              gap-1
              font-semibold
              text-gray-700
              text-sm
            "
          >
            <span>📍</span>
            <span>Lahore</span>
          </div>
        </div>


        {/* Availability */}
        <div className="text-center md:text-left">
          <p className=" text-[10px]  sm:text-xs text-gray-500 mb-1 " >  Availability </p>

          <div className="flex items-center justify-center md:justify-start  gap-1 font-semibold  text-green-600 text-sm  "  >
            <span>●</span>
            <span>All</span>
          </div>
        </div> 
         </div>


      {/* Divider */}
      <div className="border-t border-gray-100 my-5" />


      {/* Total Donors */}
      <div className="text-center">
        <p  className="text-xs  text-gray-500 " > Total Donors Found </p>
        <h3 className="text-2xl  font-bold  text-red-600 mt-1 " >   12  </h3>
      </div>

    </div>
  );
};

export default SearchSummary;