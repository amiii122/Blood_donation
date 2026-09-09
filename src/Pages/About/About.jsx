import React from 'react'
import { UserPlus, Search, Bell, Heart } from "lucide-react";
import Card from '../About/components/Cards'
import AboutHero from './components/AboutHero'
import Statistics from './components/Statistics'
import OurStory from './components/OurStory'
import Process from './components/Process'
import AboutCTA from './components/AboutCTA'
import { useAppContext } from '../../AppContext/Appcontext';
const About = () => {
     const {navigate}=useAppContext()
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
    <div>
      <AboutHero/>
      <Card/>
      <Statistics/>
      <OurStory/>
      <Process heading="How We Make a Difference" data={steps}/>
      <AboutCTA/>
    </div>
  )
}

export default About
