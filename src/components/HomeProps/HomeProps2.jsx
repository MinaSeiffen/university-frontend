import React from 'react';

const HomeProps2 = ({ image3, name, description3 }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center py-5 font-[Merriweather] max-w-2xl mx-auto">
      <img
        className="w-16 h-16 rounded-full shadow-lg mr-4 sm:mr-0"
        src={image3}
        alt="Studying in Russia"
      />
      <div className="text-xl sm:ml-auto">
        <p className="font-bold">{description3}</p>
        <p className="text-gray-500">- {name}</p>
      </div>
    </div>
  );
};

export default HomeProps2;
