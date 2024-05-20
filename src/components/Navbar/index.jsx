import React from "react";

export default function Navbar() {
  return (
    <>
      <nav class="bg-white/0 h-[103.55px]  absolute w-full z-20 top-0 start-0 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="src/assets/Logo.png"
              class="h-[103.55px] w-[200px]"
              alt="Flowbite Logo"
            />
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              class="text-white bg-[#240F6E] font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Sign Up
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#240F6E]focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-[#240F6E]rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white/0 ">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-white bg-[#240F6E]  rounded md:bg-transparent md:text-[#240F6E] md:p-0 md:dark:text-[#240F6E]"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-white rounded hover:bg-[#240F6E]md:hover:bg-transparent md:hover:text-[#240F6E] md:p-0 md:dark:hover:text-[#240F6E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Universities
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-white rounded hover:bg-[#240F6E]md:hover:bg-transparent md:hover:text-[#240F6E] md:p-0 md:dark:hover:text-[#240F6E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  How to Apply
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-white rounded hover:bg-[#240F6E]md:hover:bg-transparent md:hover:text-[#240F6E] md:p-0 md:dark:hover:text-[#240F6E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
