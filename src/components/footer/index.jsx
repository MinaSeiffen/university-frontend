// import React from "react";
import { FaSquareFacebook, FaSquareWhatsapp, FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#240F6E] text-[#FFFFFF] font-[Inter] mt-20">
      <div className="mx-auto w-full max-w-screen-xl py-8 pt-20 pe-5">
        <div className="flex justify-between">
          <div className="mb-6 md:mb-0 w-90">
            <img src="src/assets/Frame 1.svg" className="h-[120px] me-3 -mt-[40px]" alt="FlowBite Logo" />

            <p className="text-[16px] mt-10 mb-5">We help students find the right university in Russia.</p>
            <div className="flex text-[20px]">
              <a href="########" aria-label="Facebook" className='md:ml-[120px] mr-[10px]'>
                < FaSquareFacebook />
              </a>
              <a href="########" aria-label="Facebook" className='mr-[10px]'>
                < FaSquareWhatsapp />
              </a>
              <a href="########" aria-label="Facebook" className='mr-[10px]'>
                < FaSquareInstagram />
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-[20px] font-semibold dark:text-white">Company</h2>
            <ul className="dark:text-gray-400 font-medium">
              <li className="mb-4">
                <p className="text-[16px]">About STUDY ABROAD</p>
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
                <p className="text-[16px]">Find a course</p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-[20px] font-semibold dark:text-white">Legal</h2>
            <ul className="dark:text-gray-400 font-medium">
              <li className="mb-4">
                <p className="text-[16px]">Privacy Statement</p>
              </li>
              <li>
                <p className="text-[16px]">Terms & Conditions</p>
              </li>
              <li>
                <p className="text-[16px] mt-4">Disclaimer</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex mt-20'>

          <img className="ml-60 -mt-[24px]" src="src/assets/bicycle (1) 1.svg" alt="la_university" />

          <img className="ml-[650px]" src="src/assets/la_university.svg" alt="la_university" />

          <img className="ml-[50px]" src="src/assets/icon-park-outline_tree-two.svg " alt="la_university" />

        </div>
        <hr className="-ml-[80px] -mt-[12px] w-[1440px]" />
      </div>
    </footer>
  );
};

export default Footer;

