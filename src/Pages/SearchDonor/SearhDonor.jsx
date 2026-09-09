import React from 'react'
import SearchHero from './components/SearchHero'
import SearchFilter from './components/SearchFilter'
import SearchResultsHeader from './components/SearchResult'
import DonorCard from './components/DonorCard'
import SearchSummary from './components/SearchSummary'
import RequestBlood from './components/RequestBlood'

const SearchDonor = () => {
  return (
    <div className=''>
      <SearchHero/>
      <SearchFilter/>
      <div className="flex flex-col md:flex-row mt-1 gap-2 items-center relative z-20 w-[92%] md:h-[84vh] max-w-6xl mx-auto bg-white rounded-xl  shadow-md  border border-gray-100  p-4 sm:p-5 md:p-6">
         <div className='h-[75vh] w-full md:h-full md:w-[75%] overflow-hidden  p-2  bg-white rounded-xl  shadow-md  border border-gray-100 '>
           <SearchResultsHeader/>
            <DonorCard/>
            <DonorCard/>
            <DonorCard/>
            <DonorCard/>
            <DonorCard/>
            <DonorCard/>
            <DonorCard/>
         </div>
         <div className='h-[25%] w-full md:h-full md:w-[25%] bg-white  '>
                  <div className='w-full overflow-hidden  sm:h-[66%] '>
                   <SearchSummary/>
                  </div>
                  <div className=' mt-1 h-[30%] bg-white rounded-xl  shadow-md  border border-gray-100 '>
                    <RequestBlood/>
                  </div>
         </div>
      </div>
    </div>
  )
}

export default SearchDonor
