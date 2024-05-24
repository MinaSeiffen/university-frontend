import React from "react";
import { useState } from 'react';
import { NavLink  } from 'react-router-dom'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" absolute w-full bg-border-gray-200 dark:bg-gray-900 z-10 top-0">
      <div className="max-w-screen-x1 flex flex-wrap justify-between items-center mx-auto md:max-w-6xl">

        <img src="src/assets/Logo.ico" className="h-[60px]" alt="Flowbite Logo" />

        <button
          onClick={handleToggle}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full md:flex md:items-center md:w-auto font-[merriweather] ${isMenuOpen ? '' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col text-[20px] md:flex-row md:items-center md:space-x-8 p-4 md:p-0 md:mt-0 rounded-lg dark:bg-gray-800 md:dark:bg-gray-900 ">
            <li>
              <NavLink to='/home' className="block text-white py-2 px-3 text-gray-900 rounded hover:bg-[#240F6E] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Home</NavLink>
            </li>
            <li>
              <NavLink to='/universities' className="block text-white py-2 px-3 text-gray-900 rounded hover:bg-[#240F6E] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Universities</NavLink>
            </li>
            <li>
              <NavLink to='/how_to_app' className="block text-white py-2 px-3 text-gray-900 rounded hover:bg-[#240F6E] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">How to Apply</NavLink>
            </li>
            <li>
              <NavLink to='/contact_us' className="block text-white py-2 px-3 text-gray-900 rounded hover:bg-[#240F6E] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contact Us</NavLink>
            </li>
          </ul>


        </div>
        <div className={`w-full md:flex md:items-center md:w-auto font-[merriweather] ${isMenuOpen ? '' : 'hidden'}`} id="navbar-default">
          <button className="rounded-lg px-10 py-1 text-white bg-[#240F6E] font-[merriweather] text-[20px] hover:bg-blue-900 md:ml-4 mt-2 md:mt-0">
            Sign Up
          </button>

        </div>
      </div>
    </nav>
  );
}

