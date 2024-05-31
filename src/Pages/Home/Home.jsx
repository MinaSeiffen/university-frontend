import React from "react";

import localImage1 from '/images/Russia.svg'
import localImage2 from '/images/Programs.svg'
import localImage3 from '/images/RichCultural.svg'
import localImage4 from '/images/Learn.svg'
import localImage5 from '/images/man.png'
import localImage6 from '/images/woman.png'
import HomeProps from "../../components/HomeProps/HomeProps";
import HomeProps2 from "../../components/HomeProps/HomeProps2";
import { Link } from "react-router-dom";

export default function Home() {

  const home = [
    {
      image: localImage1,
      titel: '1-Prestigious Universities',
      description: "Russia boasts several prestigious universities that enjoy international recognition and offer high- quality education along with excellent research opportunities. Here are some of the prestigious  universities in Russia: Russia is home to some of the oldest and most prestigious universities in the world, such as Moscow State University and Saint Petersburg State University.",
      image2: localImage2,
      titel2: '2-Diverse Study Programs',
      description2: "Russia offers an extensive array of study programs that cater to a wide range of academic interests and professional aspirations. With over 700 universities across the country, students can find programs in virtually every field of study. Whether you're interested in engineering, medicine, computer science, humanities, or the arts, Russian universities provide high-quality education and cutting-edge research opportunities.",
    },
    {
      image: localImage3,
      titel: '3-Rich Cultural Experience',
      description: "Living and studying in Russia provides students with a unique opportunity to explore a rich and diverse culture and to learn about a long historical heritage.Russia is a country rich in culture, history, and tradition, offering visitors a truly immersive experience. From the grandeur of its historic landmarks to the vibrant arts scene, there's something for everyone to explore and enjoy.",
      image2: localImage4,
      titel2: '4-Learn the Russian Language',
      description2: "Studying in Russia provides students with a unique opportunity to immerse themselves in the Russian language, which is one of the most important languages in the world. Whether attending lectures, interacting with locals, or exploring the vibrant culture, students have countless opportunities to practice and improve their Russian language skills. Also it’s , one of the world's most important languages.",
    },
  ]

  const home2 = [
    {
      image3: localImage5,
      name: 'Ahmed, Engineering Student',
      description3: "My study experience in Russia was unforgettable. I learned a lot, not only in my academic field but also about Russian culture and daily life here.",
    },
    {
      image3: localImage6,
      name: 'Layla, Medical Student',
      description3: "Studying in Russia gave me the opportunity to develop my academic and personal skills. The professors are very supportive and the curricula are excellent.",
    }
  ]


  return (
    <>
      <div className="relative bg-cover bg-black h-screen">  {/* Set full screen height */}
        <img
          className="absolute opacity-65 w-full h-full object-cover" 
          src="/images/home.png"
          alt="Studying in Russia"
        />
        <div className="absolute top-1/2 left-1/4 w-[44%] transform -translate-x-1/2 -translate-y-1/2"> {/* Center content vertically and horizontally */}
          <div className="font-[Merriweather] text-white justify-space-between text-start">
            <p className="text-6xl sm:text-4xl lg:text-5xl w-full mb-10 leading-tight">
              Discover your perfect
              route to studying at a
              top university abroad.
            </p>
            <button className="text-white text-xl px-8 py-2 bg-[#240F6E] rounded-lg hover:bg-blue-900">
              <Link to="/universities">All Universities</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="font-[Merriweather] lg:mt-[100px] xl:ml-[7.8%] 2xl:ml-[18.5%]">  {/* Add padding for content */}
        <h2 className="text-[#240F6E] text-[32px] leading-[40.22px] w-[806px] h-[40px] font-merriweather ">  {/* Adjust spacing for different screen sizes */}
          Study in Russia: A Premier Educational Destination
        </h2>
        <div className="mt-[32px] w-[1200px] h-[248px] flex flex-col gap-[16px] ">
          <h3 className="text-[32px] leading-[40.22px] text-[#212121] font-merriweather font-normal ">
            Discover Educational Opportunities in Russia
          </h3>
          <p className="text-[24px] leading-[48px] font-normal font-merriweather w-full h-[192px] ">
            Russia is one of the most attractive study destinations for
            international students, thanks to its <br /> world-ranked
            universities and diverse academic programs. Russian universities
            offer high-quality <br />
            education in various disciplines, making them an excellent choice
            for students seeking globally
            <br /> recognized degrees.
          </p>
        </div>
      </div>

      <div className="py-[8px] mt-[56px] w-[482px] h-[56px] xl:ml-[7.8%] 2xl:ml-[18.5%] "> {/* Add padding for content */}
        <h2 className="text-[#240F6E] text-[32px]">
          Benefits of Studying in Russia:
        </h2>
      </div>

      {home.map((home, index) => (
        <HomeProps
          key={index}
          image={home.image}
          titel={home.titel}
          description={home.description}
          image2={home.image2}
          titel2={home.titel2}
          description2={home.description2}
        />
      ))}

      <h2 className="w-[467px] h-[40px] font-merriweather font-normal text-[32px] leading-[40.22px] text-[#240F6E] xl:ml-[7.8%] 2xl:ml-[18.5%] -mt-[30px]">  {/* Adjust spacing for different screen sizes */}
        Some Student Success Stories
      </h2>

      {home2.map((home2, index) => (
        <HomeProps2
          key={index}
          image3={home2.image3}
          name={home2.name}
          description3={home2.description3}
        />
      ))}
    </>
  );
}
