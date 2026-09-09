import React from "react";
const SearchResultsHeader = () => {
  return (
    <div
      className="
        w-full flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-4">
      {/* Result Information */}
      <div>
        <h2
          className="text-lg sm:text-xl font-bold text-gray-900 ">
          Search Results
        </h2>

        <p
          className="
            text-xs
            sm:text-sm
            text-gray-600 " >12 donors found for O+ in Lahore
        </p>
      </div>

      {/* Sort Dropdown */}
      <div className="w-full sm:w-auto  min-w-[170px]  ">
        <div  className="  h-10 px-3 border  border-gray-200 rounded-md bg-white flex items-center justify-between text-xs sm:text-sm text-gray-600 cursor-pointer transition-all duration-200 hover:border-red-400 ">
           <select className="w-full bg-white   text-sm text-gray-600 font-medium outline-none transition-all duration-200  cursor-pointer">
              <option value="" >Sorted By:</option>
              <option value="Nearest">Nearest First</option>
              <option value="Availability">Availability</option>
            </select>
           
        </div>
      </div>
    </div>
  );
};

export default SearchResultsHeader;
