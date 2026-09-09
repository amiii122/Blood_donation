
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const SearchFilter = () => {
 const location = useLocation();
const searchValues= location.state;


const [searhData,setsearchdata]=useState({
       bloodGroup:"",
       city:"",
       Avalibility:"All"
})

 const handleChange = (e) => {
    setsearchdata({ ...searhData, [e.target.name]: e.target.value });
  };

  const handleSubmit=async (e)=>{
    e.stopPropagation()
    console.log(searhData)
  }
  return (
    <div className="  relative  z-20 w-[92%] max-w-6xl mx-auto  -mt-1 md:-mt-5 bg-white rounded-xl shadow-md borde border-gray-100 p-4  sm:p-5 md:p-6  ">

      <div className=" grid grid-cols-1 md:grid-cols-4 gap-4  md:gap-5 items-end  " >

        {/* Blood Group */}
        <div className="w-full">
          <label  className="block text-xs font-semibold  text-gray-600  mb-2  " >
            Blood Group
          </label>

          <div  className=" h-11  w-full border  border-gray-200 rounded-md px-3 flex  items-center justify-between text-sm font-medium text-gray-700 cursor-pointer  transition-all duration-200 hover:border-red-400   " >
            <div className="flex items-center gap-2 p-1">
              <span className="text-red-600">🩸</span>
               
            <select name="bloodGroup" onChange={handleChange} value={searchValues?.bloodGroup?searchValues.bloodGroup:searhData.bloodGroup} className="px-2  bg-white   text-sm text-gray-600 font-medium outline-none transition-all duration-200  cursor-pointer">
              <option value="" disabled>Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
             </select>
    
            </div>

           
          </div>
        </div>


        {/* City */}
        <div className="w-full">
          <label  className=" block  text-xs font-semibold  text-gray-600  mb-2">   City
          </label>

          <div className=" h-11 w-full border border-gray-200  rounded-md  px-3   flex  items-center justify-between  text-sm  font-medium  text-gray-700 cursor-pointer  transition-all duration-200  hover:border-red-400  " >
            <div className="flex items-center gap-2">
              <span>📍</span>
              <select name="city" onChange={handleChange} value={searchValues?.city?searchValues.city:searhData.city} className="w-[17vw]      text-sm text-gray-600 font-medium outline-none transition-all duration-200  cursor-pointer">
              <option value="">Select city</option>
              <option value="kohat">Kohat</option>
              <option value="peshawer">Peshawer</option>
              <option value="Mardan">Mardan</option>
              <option value="Swat">Swat</option>
              <option value="Abbottabad">Abbottabad</option>
              <option value="Swabi">Swabi</option>
            </select>
            </div>
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
              <select name="Avalibility" value={searhData.Avalibility} onChange={handleChange} className="w-[17vw] text-sm text-gray-600 font-medium outline-none transition-all duration-200  cursor-pointer">
              <option value="All">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            </div>
           
          </div>
        </div>


        {/* Search Button */}
        <button onClick={handleSubmit} className=" h-11  w-full bg-red-600  text-white  rounded-md flex items-center justify-center  gap-2 text-sm font-semibold
            cursor-pointer transition-all duration-300  hover:bg-red-700 hover:shadow-md  hover:scale-[1.01]  active:scale-[0.98]  " >
          <span className="text-base">⌕</span>
          <span>Search Donors</span>
        </button>

      </div>
    </div>
  );
};

export default SearchFilter;