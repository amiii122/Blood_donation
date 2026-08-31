import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/index'
import Step from './Components/Step/index'
import Home from './Pages/Home/Home'
import SearchDonor from './Pages/SearchDonor/SearhDonor'
import Footer from './Components/Footer/index'
import About from './Pages/About/About'
import Contactus from './Pages/Contactus/ContactusFile'

import { Route, Router, Routes, useLocation } from 'react-router-dom'

function App() {
  const [Admin, setAdmin] = useState(0)
  const isadminpath=useLocation().pathname.includes("admin")
  return (
    <div className="h-screen bg-gray-100">
     {isadminpath ? " " : <Navbar/>}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contactus/>}/>
          <Route path='/search' element={<SearchDonor/>}/>
        </Routes>
        
       {isadminpath ? " ":<Footer/>}
    </div>
  )
}

export default App
