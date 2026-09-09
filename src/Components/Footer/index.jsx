
import { asserts } from "../../assets/assets";

import { useState } from "react";


const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="overflow-hidden rounded-t-xl bg-red-700 text-white">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-10 lg:py-10">

        {/* ================= MOBILE HEADER ================= */}
        <div className="flex items-center justify-between lg:hidden">
          {/* Logo */}
          <div className="flex">
            <img className="w-27 h-20" src={asserts.WhiteandBluelogo} alt="white and blue logo" />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <img className="w-8 h-8" src={asserts.Facebook} alt="facebook" />
            <img className="w-8 h-8" src={asserts.insta} alt="insta" />
            <img className="w-8 h-8" src={asserts.linkedin} alt="linkdin" />
         
          </div>
        </div>


        {/* ================= MOBILE ACCORDION ================= */}
        <div className="mt-4 border-t border-red-500 lg:hidden">

          {/* Quick Links */}
          <div className="border-b border-red-500">
            <button
              onClick={() => toggleSection("quick")}
              className="flex w-full items-center justify-between py-3 text-left text-xs font-medium"
            >
              Quick Links
               <img className={`w-4 h-4 transition-transform duration-300 ${
                  openSection === "quick" ? "rotate-180" : ""
                }`} src={asserts.Down_arrow} alt="Down_arrow icon" />
             
            </button>

            {openSection === "quick" && (
              <div className="pb-3 text-xs text-red-100">
                <a href="/" className="block py-1">
                  Home
                </a>
                <a href="/search" className="block py-1">
                  Search Donors
                </a>
                <a href="/about" className="block py-1">
                  About Us
                </a>
                <a href="/contact" className="block py-1">
                  Contact Us
                </a>
              </div>
            )}
          </div>


          {/* For Donors */}
          <div className="border-b border-red-500">
            <button
              onClick={() => toggleSection("donors")}
              className="flex w-full items-center justify-between py-3 text-left text-xs font-medium"
            >
              For Donors

             <img className={`w-4 h-4 transition-transform duration-300 ${
                  openSection === "quick" ? "rotate-180" : ""
                }`} src={asserts.Down_arrow} alt="Down_arrow icon" />
            </button>

            {openSection === "donors" && (
              <div className="pb-3 text-xs text-red-100">
                <a href="/donorreg" className="block py-1">
                  Become a Donor
                </a>
                <a href="#" className="block py-1">
                  Donor Dashboard
                </a>
                <a href="/search" className="block py-1">
                  Blood Requests
                </a>
                <a href="#" className="block py-1">
                  FAQs
                </a>
              </div>
            )}
          </div>


          {/* Newsletter */}
          <div className="border-b border-red-500">
            <button
              onClick={() => toggleSection("newsletter")}
              className="flex w-full items-center justify-between py-3 text-left text-xs font-medium"
            >
              Newsletter

             <img className={`w-4 h-4 transition-transform duration-300 ${
                  openSection === "quick" ? "rotate-180" : ""
                }`} src={asserts.Down_arrow} alt="Down_arrow icon" />
            </button>

            {openSection === "newsletter" && (
              <div className="pb-4">
                <p className="mb-3 text-xs text-red-100">
                  Subscribe to get updates and important information.
                </p>

                <div className="flex overflow-hidden rounded bg-white">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-xs text-gray-700 outline-none"
                  />

                  <button className="px-3 text-red-700 bg-red-600">
                    <img src={asserts.send} alt="send icon" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>


        {/* ================= DESKTOP FOOTER ================= */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-10">

          {/* Brand */}
          <div>
            <img className="w-36 h-26" src={asserts.WhiteandBluelogo} alt="white and blue logo" />
            <p className="mt-4 text-sm text-red-100">
              Together we can make a difference.
            </p>

            <div className="mt-5 flex gap-4">
            <img className="w-10 h-10" src={asserts.Facebook} alt="facebook" />
            <img className="w-10 h-10" src={asserts.insta} alt="insta" />
            <img className="w-10 h-10" src={asserts.linkedin} alt="linkdin" />
         
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>

            <div className="space-y-3 text-sm text-red-100">
              <a href="/" className="block">Home</a>
              <a href="/search" className="block">Search Donors</a>
              <a href="/about" className="block">About Us</a>
              <a href="/contact" className="block">Contact Us</a>
            </div>
          </div>


          {/* For Donors */}
          <div>
            <h3 className="mb-4 font-semibold">For Donors</h3>

            <div className="space-y-3 text-sm text-red-100">
              <a href="/donorreg" className="block">Become a Donor</a>
              <a href="#" className="block">Donor Dashboard</a>
              <a href="search" className="block">Blood Requests</a>
              <a href="#" className="block">FAQs</a>
            </div>
          </div>


          {/* Newsletter */}
          <div>
            <h3 className="mb-4 font-semibold">Newsletter</h3>

            <p className="mb-4 text-sm text-red-100">
              Subscribe to get updates and important information.
            </p>

            <div className="flex overflow-hidden rounded bg-white">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-sm text-gray-700 outline-none"
              />

              <button className="px-4 text-red-700 bg-red-600 ">
                <img src={asserts.send} alt="send icon" />
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Copyright */}
      <div className="border-t border-red-600 bg-red-800 py-3">
        <p className="text-center text-[10px] text-red-100">
          © 2026 BloodCare. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;