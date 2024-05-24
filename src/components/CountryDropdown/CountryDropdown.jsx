import React, { useState, useEffect, useRef } from 'react';
import "./CountryDropdown.css";

const countryOptions = [
  { value: 'eg', phoneCode: '+20', flag: 'https://flagcdn.com/w20/eg.png' },
  { value: 'in', phoneCode: '+91', flag: 'https://flagcdn.com/w20/in.png' },
  { value: 'za', phoneCode: '+27', flag: 'https://flagcdn.com/w20/za.png' },
];

const CountryDropdown = ({ selectedCountry, setSelectedCountry }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute z-50 w-[122px] h-[56px] bg-transparent" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="w-[122px] h-[56px] rounded-[10px] flex items-center justify-between bg-transparent border border-[#212121] px-4 py-4 pl-[16px] shadow leading-tight"
      >
        <div className="flex items-center">
          <img src={selectedCountry.flag} alt={selectedCountry.value} className="w-[24px] h-[17.33px] mr-2"/>
          <span className='w-[38px] h-[25px] leading-[25.14px] text-[20px] font-merriweather font-light'>{selectedCountry.phoneCode}</span>
        </div>
        <img src="./images/Vector.svg" alt="vector" className='-mr-[5px]' />
      </button>
      {isOpen && (
        <ul className="absolute mt-1 w-full z-50 bg-white border border-gray-300 rounded shadow-lg">
          {countryOptions.map((country) => (
            <li
              key={country.value}
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer z-20"
              onClick={() => handleSelect(country)}
            >
              <img src={country.flag} alt={country.value} className="w-[24px] h-[17.33px] mr-2"/>
              <span> ({country.phoneCode})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryDropdown;
