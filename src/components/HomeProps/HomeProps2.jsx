import React from 'react';

const HomeProps2 = ({ image3, name, description3 }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center pt-5 font-[Merriweather] md:ml-[80px] lg:ml-[80px]">
      <div className="md:flex-1 lg:flex-1 flex items-center justify-center md:mt-5 lg:mt-5">
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
    </div>
  );
};

export default HomeProps2;
