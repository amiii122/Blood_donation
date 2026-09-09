import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/index'
import Step from './Components/Step/index'
import Home from './Pages/Home/Home'
import SearchDonor from './Pages/SearchDonor/SearhDonor'
import Footer from './Components/Footer/index'
import About from './Pages/About/About'
import Contactus from './Pages/Contactus/ContactusFile'
import BecomDonor from './Components/BecomeDonor/BecomeDonor'
import Login  from './Components/Login/Login'
import Register from './Components/Register/register'

import { Route, Router, Routes, useLocation } from 'react-router-dom'
import { ImageOff } from 'lucide-react'

function App() {
  const [Admin, setAdmin] = useState(0)
  const isadminpath=useLocation().pathname.includes("admin")
  const login=useLocation().pathname.includes("login")
  const register=useLocation().pathname.includes("register")
  const donorreg=useLocation().pathname.includes("donorreg")
  return (
    <div className="h-screen bg-gray-100">
     {(isadminpath || login||register || donorreg)? " " : <Navbar/>}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contactus/>}/>
          <Route path='/search' element={<SearchDonor/>}/>
          <Route path='/donorreg' element={<BecomDonor/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
        
       {(isadminpath || login||register || donorreg)? " ":<Footer/>}
    </div>
  )
}

export default App
