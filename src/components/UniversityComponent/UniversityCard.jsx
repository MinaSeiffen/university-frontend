import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const UniversityCard = ({university}) => {
  return (
    <section className="w-full mt-10 ">
      <div className="w-full max-w-md mx-auto bg-[#F5F5F5] rounded-xl border border-[#240F6E] overflow-hidden md:max-w-5xl mt-8">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-[290px] object-cover md:w-48.2 rounded-[11px]"
              src={university.imageUniv}
              alt={university.alt}
            />
          </div>

          <div className="py-5 px-6">
            <div className="tracking-wide text-[24px] text-[#4B0082] font-['Merriweather']">{university.titleUniv}</div>
            <div className=" leading-tight font-['Merriweather'] text-[14px] text-[#333333] mt-4">
              < FaLocationDot className="mr-2 text-[#240F6E] inline" />
              {university.location}
            </div>
            <div className='mt-4'>
              <button className="border border-[#240F6E] rounded-[11px] px-[46px] py-[8px] text-[#240F6E] bg-white font-['Merriweather'] text-[18px] hover:bg-slate-100"><Link to={`/learnMore/${university.id}`}>Learn more</Link></button>
              <button className="border rounded-[11px] px-[46px] py-[8px] text-white bg-[#240F6E] font-['Merriweather'] text-[18px] mx-5 hover:bg-blue-900 mt-2">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityCard;
