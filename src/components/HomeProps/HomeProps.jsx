import React from 'react'

const HomeProps = ({ image, titel, description, image2, titel2, description2 }) => {
  return (
    <>
      {/* image 1 and text */}
      <div className="flex mt-[25px] mb-[100px] w-[1186px] h-[378.57px] flex-row gap-[27px] xl:ml-[8%] 2xl:mx-[11.3%] 3xl:mx-[15.3%] 4xl:mx-[19%] font-[Merriweather]">
        <div className="h-[336px] w-[591px] flex flex-col gap-[16px]">
          <h2 className="text-[32px] font-merriweather font-normal leading-[40.22px] text-[#212121] ">{titel}</h2>
          <p className="text-[24px] font-merriweather font-normal leading-[35px] text-[#212121] ">{description}</p>
        </div>
        <div className="relative w-[568px] h-[378.57px] sm:h-[auto] overflow-hidden rounded-lg"> {/* Set height for larger screens, adjust for your image */}
          <img
            className="absolute inset-0 w-[568px] h-[378.57px] object-cover rounded-lg"
            src={image}
            alt="Studying in Russia"
          />
        </div>
      </div>

      {/* image 2 and text */}
      <div className="flex mt-[25px] mb-[130px] w-[1186px] h-[378.57px] flex-row gap-[27px] xl:ml-[8%] 2xl:mx-[11.3%] 3xl:mx-[15.3%] 4xl:mx-[19%] font-[Merriweather]">
        <div className="relative w-[568px] h-[406px] sm:h-[auto] overflow-hidden rounded-lg"> {/* Set height for larger screens, adjust for your image */}
          <img
            className="absolute inset-0 w-[568px] h-[378.57px] object-cover rounded-lg"
            src={image2}
            alt="Studying in Russia"
          />
        </div>
        <div className="h-[336px] w-[591px] flex flex-col gap-[16px]">
          <h2 className="text-[32px] font-merriweather font-normal leading-[40.22px] text-[#212121] ">{titel2}</h2>
          <p className="text-[24px]">{description2}</p>
        </div>
      </div>
    </>
  )
}

export default HomeProps
