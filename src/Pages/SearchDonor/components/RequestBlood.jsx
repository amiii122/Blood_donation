import React from "react";
const RequestBlood = () => {
  return (
    <div
      className="  bg-red-50  p-2 border border-red-100  rounded-xl  transition-all  duration-300  hover:shadow-md " >

      {/* Heading */}
      <h2
        className="text-base sm:text-lg  font-bold text-gray-900   " >
        Can't find a donor?
      </h2>


      {/* Description */}
      <p  className=" text-xs  sm:text-sm text-gray-600 leading-5  mt-2 max-w-md " >
        Request blood and nearby donors will be notified.
        Someone in your area may be able to help.
      </p>


      {/* Button */}
      <button className="  mt-4  px-5 py-2.5  bg-red-600 text-white rounded-lg  text-xs sm:text-sm  font-semibold  flex items-center  justify-center   gap-2  transition-all  duration-300  hover:bg-red-700  hover:shadow-md  hover:scale-[1.02] active:scale-95  ">
        <span>🩸</span>
        <span>Request Blood</span>
      </button>

    </div>
  );
};

export default RequestBlood;