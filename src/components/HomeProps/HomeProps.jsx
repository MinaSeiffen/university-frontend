import React from 'react'

const HomeProps = ({ image, titel, description, image2, titel2, description2 }) => {
    return (
        <>
            {/* image 1   and image  */}

            <div className="flex py-5 font-[Merriweather]">
                <div className="items-start items-center text-left ml-[134px]">
                    <h2 className="text-[32px] sm:m-[auto]">
                        {titel}
                    </h2>
                    <p className="sm:m-[auto] text-[24px] md:w-[591px]">
                        {description}
                    </p>
                </div>
                <div>
                    <img
                        className="sm:w-[500px] md:w-[568px] h-[378.57px] rounded-lg ml-[27px]"
                        src={image}
                        alt="Studying in Russia"
                    />
                </div>
            </div>

            {/* image 2   and image 4 */}

            <div className="flex py-5 font-[Merriweather] ">
                <div className="ml-[134px]">
                    <img
                        className="sm:w-[500px] md:w-[568px] h-[377.88px] rounded-lg sm:m-auto "
                        src={image2}
                        alt="Studying in Russia"
                    />
                </div>
                <div className="items-start text-left ml-[27px]">
                    <h2 className="text-[32px] sm:m-auto">
                        {titel2}
                    </h2>
                    <p className="sm:m-[auto] text-[24px] md:w-[581px]">
                        {description2}
                    </p>
                </div>
            </div>
        </>
    )
}

export default HomeProps
