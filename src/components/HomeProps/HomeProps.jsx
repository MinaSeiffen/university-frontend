import React from 'react'

const HomeProps = ({ image, title, description, image2, title2, description2 }) => {
  return (
    <>
      {/* image 1 and text */}
      <div className="flex py-5 2xl:mx-auto 2xl:justify-center font-[Merriweather]">
        <div className="flex-grow items-center text-left ml-16">
          <h2 className="text-3xl sm:text-center">{title}</h2>
          <p className="text-xl sm:text-center md:w-auto">{description}</p>
        </div>
        <div className="relative w-full h-[378.57px] sm:h-[auto] overflow-hidden rounded-lg"> {/* Set height for larger screens, adjust for your image */}
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            src={image}
            alt="Studying in Russia"
          />
        </div>
      </div>

      {/* image 2 and text */}
      <div className="flex py-5 font-[Merriweather] mx-auto 2xl:justify-center">
        <div className="relative w-full h-[377.88px] sm:h-[auto] overflow-hidden rounded-lg"> {/* Set height for larger screens, adjust for your image */}
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            src={image2}
            alt="Studying in Russia"
          />
        </div>
        <div className="flex-grow items-center text-left ml-16">
          <h2 className="text-3xl sm:text-center">{title2}</h2>
          <p className="text-xl sm:text-center md:w-auto">{description2}</p>
        </div>
      </div>
    </>
  )
}

export default HomeProps
