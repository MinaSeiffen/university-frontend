// import React from "react";

function Footer() {
  return (
    <footer className="relative bg-[#240F6E] text-white h-screen">
      <div className="container mx-auto py-6 px-4 lg:px-8 lg:py-[53px]">
        <div className="flex justify-between">
          <div className="mb-8 w-fit md:mb-0">
            <a href="#" className="flex items-center">
              <img
                src="src/assets/Frame 1.svg"
                className="h-24 w-auto"
                alt="FlowBite Logo"
              />
            </a>
            <div className="mt-6 w-[500px]">
              <p className="text-sm md:text-base">We help students find the right university in Russia.</p>
            </div>
            <div className="flex mt-6 justify-center md:justify-start">
              <a href="#" className="text-white mr-4">
                {/* <!-- Facebook Icon --> */}
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  {/* <!-- Facebook path --> */}
                </svg>
              </a>
              {/* <!-- Add other social media icons here --> */}
            </div>
          </div>
          <div>
            <h2 className="font-medium text-lg mb-6 mt-8 uppercase">Company</h2>
            <ul className="text-sm md:text-base">
              <li className="mb-4">
                <a href="#" className="text-white">About STUDY ABROAD</a>
              </li>
              <li>
                <a href="#" className="text-white">Contact us</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-medium text-lg mb-6 mt-8 uppercase">For students</h2>
            <ul className="text-sm md:text-base">
              <li className="mb-4">
                <a href="#" className="text-white">Study in Russia</a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-white">Find a university</a>
              </li>
              <li>
                <a href="#" className="text-white">Find a course</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-medium text-lg mb-6 mt-8 uppercase">Legal</h2>
            <ul className="text-sm md:text-base">
              <li className="mb-4">
                <a href="#" className="text-white">Privacy Policy</a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-white">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-white">Disclaimer</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className>

      <img src="src/assets/bicycle (1) 1.svg" alt="" className="absolute left-[17rem] bottom-9 hidden md:block" />
      <img src="src/assets/icon-park-outline_tree-two.svg" alt="" className="absolute right-28 bottom-9 hidden md:block" />
      <img src="src/assets/la_university.svg" alt="" className="absolute right-52 bottom-6 hidden lg:block" />
      <hr className="w-full absolute bottom-9 border-gray-200 dark:border-gray-700" />
      </div>
    </footer>
  );
}

export default Footer;
