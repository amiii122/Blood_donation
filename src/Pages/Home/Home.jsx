import React from 'react'
import Hero_section from './Components/Hero_section'
import Search from '../../Components/Search/index'
import Why_section from './Components/Why_sectoin'
import About_section from './Components/About_section'
import How_it_works from './Components/How_it_works'
import Contact_us from './Components/Contact_us'
import Process from '../About/components/Process'
const Home = () => {
  return (
    <div className='bg-gray-100'>
      <Hero_section/>
       <Search/>
       <Why_section/>
       <About_section/>
       {/* <How_it_works/> */}
       <Contact_us/>
    </div>
  )
}

export default Home
