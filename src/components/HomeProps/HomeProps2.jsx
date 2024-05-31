import React from 'react';

const HomeProps2 = ({ image3, name, description3 }) => {
  return (
    <div className="flex flex-row w-[1200px] mt-[62px] font-[Merriweather] gap-[24px] h-[105px] xl:ml-[7.8%] 2xl:mx-[11.3%] 3xl:mx-[16.3%] 4xl:mx-[20.3%]">
      <img
        className="w-16 h-16 rounded-full shadow-lg mr-4 sm:mr-0"
        src={image3}
        alt="Studying in Russia"
      />
      <div className="w-[1096px] h-[105px] ">
        <p className="font-merriweather font-normal text-[24px] leading-[35px] text-[#212121] ">{description3}</p>
        <p className="font-merriweather font-normal text-[24px] leading-[35px] text-[#646464] ">- {name}</p>
      </div>
    </div>
  );
};

export default HomeProps2;
