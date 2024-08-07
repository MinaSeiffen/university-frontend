// import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";


import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative bg-[#240F6E] text-[#FFFFFF] font-[Inter] mt-20 h-[512px]">
      <div className="mx-auto w-full max-w-screen-xl py-8 pt-20 pe-5">
        <div className="flex justify-between">
          <div className="mb-6 md:mb-0 w-90">
            <img src="/images/Frame 1.svg" className="h-[120px] me-3 -mt-[40px]" alt="FlowBite Logo" />

            <p className="text-[16px] mt-10 mb-5">We help students find the right university in Russia.</p>
            <div className="flex text-[20px]">
              <a href="https://www.facebook.com" aria-label="Facebook" className='md:ml-[120px] mr-[24px]'>
                < FaFacebook className="w-6" />
              </a>
              <a href="https://web.whatsapp.com/" aria-label="whatsapp" className='mr-[24px]'>
                < IoLogoWhatsapp className="w-6" />
              </a>
              <a href="https://www.instagram.com/" aria-label="instagram">
                < RiInstagramFill  className="w-6" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-[20px] font-semibold dark:text-white">Company</h2>
            <ul className="dark:text-gray-400 font-medium">
              <li className="mb-4">
                <p className="text-[16px]"><Link  to="#"> About STUDY ABROAD </Link></p>
              </li>
              <li>
                <p className="text-[16px]"><Link  to="/contact_us"> Contact us </Link></p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-[20px] font-semibold dark:text-white">For students</h2>
            <ul className="dark:text-gray-400 font-medium">
              <li className="mb-4">
                <p className="text-[16px]"><Link to="/"> Study in Russia</Link></p>
              </li>
              <li className="mb-4">
                <p className="text-[16px]"><Link to="/search"> Find a university</Link></p>
              </li>
              <li>
                <p className="text-[16px]"><Link to="#"> Find a course </Link></p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-[20px] font-semibold dark:text-white">Legal</h2>
            <ul className="dark:text-gray-400 font-medium">
              <li className="mb-6">
                <p className="text-[16px]"><Link to="#"> Privacy Statement </Link></p>
              </li>
              <li className="mb-6">
                <p className="text-[16px]"><Link to="#"> Terms & Conditions </Link></p>
              </li>
              <li>
                <p className="text-[16px] mt-4"><Link to="#"> Disclaimer </Link></p>
              </li>
            </ul>
          </div>
        </div>
      </div>

          <img className="absolute bottom-9 start-[273px] " src="/images/bicycle (1) 1.svg" alt="la_university" />

          <img className="absolute bottom-6 end-[208px]  " src="/images/la_university.svg" alt="la_university" />

          <img className="absolute bottom-9 end-[112px]" src="/images/icon-park-outline_tree-two.svg " alt="la_university" />

        <hr className="absolute bottom-9  w-full max-w-screen" />
    </footer>
  );
};

export default Footer;

