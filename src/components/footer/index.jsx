// import React from "react";
import { FaSquareFacebook, FaSquareWhatsapp, FaSquareInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#240F6E] text-[#FFFFFF] font-[Inter] mt-20">
      <div className="mx-auto w-full max-w-screen-xl p-8 pt-20 pe-5">
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
                <p className="text-[16px]">Contact us</p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-[20px] font-semibold dark:text-white">Follow us</h2>
            <ul className="dark:text-gray-400 font-medium">
              <li className="mb-4">
                <p className="text-[16px]">Study in Russia</p>
              </li>
              <li className="mb-4">
                <p className="text-[16px]">Find a university</p>
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
                <p className="text-[16px]">Disclaimer</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex mt-20'>

          <img className="ml-60 -mt-[24px]" src="src/assets/bicycle (1) 1.svg" alt="la_university" />

          <img className="ml-[650px]" src="src/assets/la_university.svg" alt="la_university" />

          <img className="ml-[50px]" src="src/assets/icon-park-outline_tree-two.svg " alt="la_university" />

        </div>
        <hr className="-mt-[12px]" />
      </div>
    </footer>
  );
};

export default Footer;

// src/assets/bicycle (1) 1.svg
// src/assets/icon-park-outline_tree-two.svg
// src/assets/la_university.svg