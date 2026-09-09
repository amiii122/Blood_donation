import React from 'react'
import './style.css'
import { asserts } from '../../assets/assets'
import { useState } from "react";
import { NavLink } from 'react-router-dom';

const index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <nav className="relative w-full bg-white shadow-sm z-50">

  {/* Main Navbar */}
  <div className="h-[72px] flex items-center justify-between px-5 sm:px-8 lg:px-12">

    {/* Logo */}
    <NavLink to="/" className="flex items-center">
      <img
        className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
        src={asserts.Logo}
        alt="BloodCare logo"
      />
    </NavLink>


    {/* Desktop Navigation */}
    <div className="hidden md:flex items-center">

      <ul className="flex items-center gap-8 lg:gap-11">

        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative py-6 text-sm font-semibold transition-all duration-300
              ${isActive
                ? "text-red-600 after:absolute after:left-0 after:right-0 after:bottom-2 after:h-[2px] after:bg-red-600 after:rounded-full"
                : "text-gray-700 hover:text-red-600"
              }`
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `relative py-6 text-sm font-semibold transition-all duration-300
              ${isActive
                ? "text-red-600 after:absolute after:left-0 after:right-0 after:bottom-2 after:h-[2px] after:bg-red-600 after:rounded-full"
                : "text-gray-700 hover:text-red-600"
              }`
            }
          >
            Search Donor
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative py-6 text-sm font-semibold transition-all duration-300
              ${isActive
                ? "text-red-600 after:absolute after:left-0 after:right-0 after:bottom-2 after:h-[2px] after:bg-red-600 after:rounded-full"
                : "text-gray-700 hover:text-red-600"
              }`
            }
          >
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative py-6 text-sm font-semibold transition-all duration-300
              ${isActive
                ? "text-red-600 after:absolute after:left-0 after:right-0 after:bottom-2 after:h-[2px] after:bg-red-600 after:rounded-full"
                : "text-gray-700 hover:text-red-600"
              }`
            }
          >
            Contact Us
          </NavLink>
        </li>

      </ul>

    </div>


    {/* Desktop Buttons */}
    <div className="hidden md:flex items-center gap-3 lg:gap-4">
     <NavLink to='login'>
      <button className=" text-red-500 px-12 py-2 border border-red-500  rounded-md flex items-center justify-center  gap-2 text-sm font-semibold
            cursor-pointer transition-all duration-300  hover:bg-red-700  hover:text-white hover:shadow-md  hover:scale-[1.01]  active:scale-[0.98]  " >
             Login
        </button>
      </NavLink>
       <NavLink to='register'>
             <button className=" px-6 py-2 bg-red-600 text-white  rounded-md flex items-center justify-center
            gap-2 text-sm font-semibold cursor-pointer transition-all duration-300  hover:bg-red-700
              hover:text-white hover:shadow-md hover:scale-[1.01]  active:scale-[0.98]  ">
             <img className="w-4 h-4" src={asserts.register_white_icon} alt="register" />Register
             </button>
       </NavLink>

    </div>


    {/* Mobile Menu Button */}
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden w-10 h-10 flex items-center justify-center
      rounded-md text-gray-700 hover:text-red-600 hover:bg-red-50
      transition-all duration-300"
    >
      <span
        className={`text-2xl transition-transform duration-300 ${
          isOpen ? "rotate-90" : "rotate-0"
        }`}
      >
        {isOpen ? "✕" : "☰"}
      </span>
    </button>

  </div>


  {/* Mobile Menu */}
  <div
    className={`md:hidden absolute top-full right-0 w-full sm:w-[360px]
    bg-white shadow-lg border-t border-gray-100
    transition-all duration-300 ease-in-out overflow-hidden
    ${
      isOpen
        ? "max-h-[500px] opacity-100 visible"
        : "max-h-0 opacity-0 invisible"
    }`}
  >

    <div className="px-6 py-5">

      {/* Mobile Links */}
      <ul className="flex flex-col gap-1">

        <li>
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-md text-sm font-semibold transition-all duration-300
              ${
                isActive
                  ? "bg-red-50 text-red-600"
                  : "text-gray-700 hover:bg-red-50 hover:text-red-600"
              }`
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/search"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-md text-sm font-semibold transition-all duration-300
              ${
                isActive
                  ? "bg-red-50 text-red-600"
                  : "text-gray-700 hover:bg-red-50 hover:text-red-600"
              }`
            }
          >
            Search Donor
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-md text-sm font-semibold transition-all duration-300
              ${
                isActive
                  ? "bg-red-50 text-red-600"
                  : "text-gray-700 hover:bg-red-50 hover:text-red-600"
              }`
            }
          >
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-md text-sm font-semibold transition-all duration-300
              ${
                isActive
                  ? "bg-red-50 text-red-600"
                  : "text-gray-700 hover:bg-red-50 hover:text-red-600"
              }`
            }
          >
            Contact Us
          </NavLink>
        </li>

      </ul>


      {/* Mobile Buttons */}
      <div className="flex flex-col gap-3 mt-5 pt-5 border-t border-gray-100">
        <NavLink to="/login">
          <button className="w-full py-2.5 rounded-md border border-red-600
           text-red-600 text-sm font-bold transition-all duration-300
           hover:bg-red-600 hover:text-white" >
           Login
         </button>
        </NavLink>
        <NavLink to="/register">
        <button
          className="w-full py-2.5 rounded-md bg-red-600 text-white
          text-sm font-bold flex items-center justify-center gap-2
          transition-all duration-300 hover:bg-red-700">
          <img  className="w-4 h-4"  src={asserts.register_white_icon} alt="register"/> Register
        </button>
        </NavLink> 

      </div>

    </div>

  </div>

</nav>
  );
};

export default index