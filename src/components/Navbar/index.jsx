import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
export default function Navbar({authUser}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isRootPath = location.pathname === "/";
  const visibleProfile = authUser ? "visible" : "hidden";
  const visibleBtn = authUser ? "hidden " : "visible";
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute w-full bg-border-gray-200 dark:bg-[#212121] z-10 top-0">
      <div className="max-w-screen-x1 h-[104px] flex flex-wrap justify-between items-center mx-auto md:max-w-6xl">
        {isRootPath ? (
          <img src="public/images/Logo.ico" className="h-[60px]" alt="Logo.ico" />
        ) : (
          <img src="public/images/Logo.svg" className="h-[60px]" alt="Logo.svg" />
        )}

        <button
          onClick={handleToggle}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`w-full md:flex md:items-center md:w-auto font-[merriweather] ${isMenuOpen ? "" : "hidden"
            }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col text-[20px] md:flex-row md:items-center md:space-x-8 p-4 md:p-0 md:mt-0 rounded-lg dark:bg-gray-800 md:dark:bg-[#212121]">
            <li>
              <NavLink
                to="/"
                className={`block py-2 px-3 rounded hover:bg-[#240F6E] md:hover:bg-transparent md:border-0 md:hover:text-[#240F6E] md:p-0 ${isRootPath ? "text-white" : "text-[#212121]"
                  }`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/universities"
                className={`block py-2 px-3 rounded hover:bg-[#240F6E] md:hover:bg-transparent md:border-0 md:hover:text-[#240F6E] md:p-0 ${isRootPath ? "text-white" : "text-[#212121]"
                  }`}
              >
                Universities
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/howToApply"
                className={`block py-2 px-3 rounded hover:bg-[#240F6E] md:hover:bg-transparent md:border-0 md:hover:text-[#240F6E] md:p-0 ${isRootPath ? "text-white" : "text-[#212121]"
                  }`}
              >
                How to Apply
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact_us"
                className={`block py-2 px-3 rounded hover:bg-[#240F6E] md:hover:bg-transparent md:border-0 md:hover:text-[#240F6E] md:p-0 ${isRootPath ? "text-white" : "text-[#212121]"
                  }`}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div
          className={`w-full md:flex md:items-center md:w-auto font-[merriweather]  ${isMenuOpen ? "" : "hidden"
            }`}
          id="navbar-default"
        >
          <Link to="/login">
            <button className={`rounded-lg px-10 py-1 text-white ${visibleBtn}  bg-[#240F6E] font-[merriweather] text-[20px] hover:bg-blue-900 md:ml-4 mt-2 md:mt-0`}>
              Log in
            </button>
              </Link>
              <Link to='/profile'>
            <button className={`rounded-lg px-10 py-1 text-white  ${visibleProfile} `} >
              <CgProfile className={` text-[54px] ${isRootPath ? "text-white" : "text-[#212121]"
                }`} />
            </button>
                </Link>

        </div>
      </div>
      {!isRootPath && <div className="w-full h-[1px] bg-stone-200"></div>}
    </nav>
  );
}
