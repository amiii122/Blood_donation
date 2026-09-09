import React, { useState } from 'react'
import './style.css'
import { asserts } from '../../assets/assets'
import { useAppContext } from '../../AppContext/Appcontext'
const index = () => {
  const {navigate}=useAppContext()

  const [searchdata,setsearchdata]=useState({
    bloodGroup:"",
    city:""
  })

  const handleChange = (e) => {
    setsearchdata({ ...searchdata, [e.target.name]: e.target.value });
  };
  return (
    
   <div className="w-[92vw] sm:w-[88vw] lg:w-[84vw] min-h-[auto] lg:h-[20vh] flex flex-col lg:flex-row items-stretch lg:items-center justify-evenly gap-5 lg:gap-0 bg-red-600 rounded-xl relative -top-9 mx-auto px-5 py-6 lg:px-0 lg:py-0">

  {/* First Section */}
  <div className="flex items-center gap-4 text-white">

    <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full shrink-0">
      <img
        className="absolute w-full h-full p-3"
        src={asserts.search_icon}
        alt="search icon"
      />
    </div>

    <div>
      <h2 className="text-lg sm:text-[22px] font-bold">
        Find Blood Donors
      </h2>

      <p className="text-[10px] sm:text-xs pt-1 sm:pt-2">
        Search available donors by blood group and city.
      </p>
    </div>

  </div>


  {/* Blood Group */}
  <div className="flex flex-col gap-2 w-full lg:w-auto">

    <h2 className="text-white font-semibold text-[12px]">
      Blood Group
    </h2>

     <div className='w-full h-12 rounded-lg bg-white px-4'>
           <select name='bloodGroup' value={searchdata.bloodGroup} onChange={handleChange} className="w-full h-11  bg-white   text-sm text-gray-600 font-medium outline-none transition-all duration-200  cursor-pointer">
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


  {/* City */}
  <div className="flex flex-col gap-2 w-full lg:w-auto">

    <h2 className="text-white font-semibold text-[12px]">
      City
    </h2>
      <div className='w-full h-12  rounded-lg bg-white px-3'>
          <select name='city' value={searchdata.city} onChange={handleChange} className="w-full h-11  bg-white   text-sm text-gray-600 font-medium outline-none transition-all duration-200  cursor-pointer">
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


  {/* Search Button */}
  <button onClick={()=>navigate('./search',{state:searchdata})} className="bg-white px-5 flex items-center justify-center gap-2 cursor-pointer py-3 lg:py-2 rounded-md text-red-700 text-[14px]
    sm:text-[15px] font-semibold lg:mt-6 w-full lg:w-auto font-semibold
            cursor-pointer transition-all duration-300  hover:shadow-md  hover:scale-[1.01]  active:scale-[0.98]  ">
    <img  className="w-5 h-5"   src={asserts.search_icon}  alt="Search icon"/> Search Donors
 </button>
 </div>
  )
}

export default index
