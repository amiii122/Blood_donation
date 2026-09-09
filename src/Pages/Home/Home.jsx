import React from 'react'
import Hero_section from './Components/Hero_section'
import Search_sec from '../../Components/Search/index'
import Why_section from './Components/Why_sectoin'
import About_section from './Components/About_section'
import Contact_us from './Components/Contact_us'
import Process from '../About/components/Process'
import { UserPlus, Search, Bell, Heart } from "lucide-react";

const Home = () => {
  const steps = [
    {
      icon: UserPlus,
      count: "1",
      title: "Register",
      disc: "Donors register and create their profile on BloodCare.",
    },
    {
      icon: Search,
      count: "2",
      title: "Search / Request",
      disc: "Recipients search for donors or request the blood they need.",
    },
    {
      icon: Bell,
      count: "3",
      title: "We Notify",
      disc: "Available donors near the required location are notified.",
    },
    {
      icon: Heart,
      count: "4",
      title: "Donate & Save",
      disc: "Donors connect with recipients and help save a life.",
    },
  ];
  return (
    <div className='bg-gray-100'>
      <Hero_section/>
       <Search_sec/>
       <Why_section/>
       <About_section/>
       <Process heading="How it works" data={steps}/>
       <Contact_us/>
    </div>
  )
}

export default Home
