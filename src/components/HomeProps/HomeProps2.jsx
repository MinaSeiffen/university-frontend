import React from 'react';

const HomeProps2 = ({ image3, name, description3 }) => {
  return (
      <div className="flex w-full md:mt-5 lg:mt-5 pt-5 font-[Merriweather] max-2xl:ml-[120px] 2xl:ml-[22%]">
        <img
          className="w-[80px] h-[80px] rounded-full shadow-lg"
          src={image3}
          alt="Studying in Russia"
        />
        <div className="text-[24px] sm:m-auto md:mr-[130px] sm:ml-[20px] md:ml-[20px] lg:ml-[20px]">
          {description3}
          <p className="text-gray-500">- {name}</p>
        </div>
      </div>
  );
};

export default HomeProps2;
