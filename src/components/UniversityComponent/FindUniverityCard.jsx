import React from 'react';

const FindUniversityCard = ({university}) => {
  return (
    <section className="w-full ">
      <div className="w-[1007px] h-[184px] mx-auto bg-[#C8E1FC] rounded-[10px]  overflow-hidden md:max-w-5xl mt-8">
        <div className="md:flex">
          <div className="md:shrink-0 m-2 py-2">
            <img
              className="h-[152px] w-[200px] object-cover md:w-48.2 rounded-[7px]"
              src={university.imageUniv}
              alt={university.alt}
            />
          </div>

          <div className="py-16 px-6 justify-center ">
            <div className="tracking-wide w-[743px] h-[40px] text-[32px] text-[#240F6E] font-['Merriweather']">{university.titleUniv}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUniversityCard;
