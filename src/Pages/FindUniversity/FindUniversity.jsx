import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import FindUniversityCard from '../../components/UniversityComponent/FindUniverityCard';
import { universities } from '../../Constants/index';

export default function FindUniversity() {
  const [searchText, setSearchText] = useState('');
  const [filteredUniversities, setFilteredUniversities] = useState(universities);

  const handleSearchChange = (event) => {
    const text = event.target.value;
    setSearchText(text);

    if (text !== '') {
      const searchResults = universities.filter((university) =>
        university.titleUniv.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredUniversities(searchResults);
    } else {
      setFilteredUniversities(universities);
    }
  };

  // Sort filtered universities
  const sortedUniversities = filteredUniversities.slice().sort((a, b) => a.titleUniv.localeCompare(b.titleUniv));

  return (
    <>
      <div className="container mx-auto px-28 py-8 mb-8 mt-20">
        <div className="flex items-center mb-8">
          <label className="font-['Merriweather'] text-[32px] mr-4 w-[392px] h-[40px] leading-[40.22px]">
            Search for your Faculties
          </label>
          <div className="relative">
            <input
              className="p-[16px_24px_16px_24px] rounded-[25px] bg-[#E7E7E7] border-none w-[752px] h-[64px] focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="search"
              placeholder="e.g. Engineering"
              value={searchText}
              onChange={handleSearchChange}
            />
            {!searchText && (
              <FaSearch className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-500"/>
            )}
          </div>
        </div>
        <div className="">
          <h2 className="font-['Merriweather'] text-[40px] text-[#240F6E] mb-4 leading-[50.28px] ml-40">Or</h2>
          <p className="font-['Merriweather'] text-[32px] leading-[40.22px] mt-10">
            Browse your University options
          </p>
        </div>
        <div className='mt-4 mb-5'>
          {sortedUniversities.map((university) => (
            <FindUniversityCard key={university.id} university={university} />
          ))}
        </div>
      </div>
    </>
  );
}
