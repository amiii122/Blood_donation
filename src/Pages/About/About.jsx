import React from 'react'
import Card from '../About/components/Cards'
import AboutHero from './components/AboutHero'
import Statistics from './components/Statistics'
import OurStory from './components/OurStory'
import Process from './components/Process'
import AboutCTA from './components/AboutCTA'
const About = () => {
  return (
    <div>
      <AboutHero/>
      <Card/>
      <Statistics/>
      <OurStory/>
      <Process/>
      <AboutCTA/>
    </div>
  )
}

export default About
