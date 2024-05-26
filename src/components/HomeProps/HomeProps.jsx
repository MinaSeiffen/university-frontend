import React from 'react'

const HomeProps = ({ image, titel, description, image2, titel2, description2 }) => {
    return (
        <>
            {/* image 1   and image  */}

            <div className="flex flex-col md:flex-row items-center justify-center py-5 font-[Merriweather]">
                <div className="md:flex-1 flex-col items-start md:items-center md:text-left text-center ">
                    <h2 className="text-[32px]  sm:m-[auto] md:ml-[85px]">
                        {titel}
                    </h2>
                    <p className="sm:m-[auto] md:ml-[85px] text-[24px] md:w-[591px]">
                        {description}
                    </p>
                </div>
                <div>
                    <img
                        className="sm:w-[500px] md:w-[568px] h-[378.57px] rounded-lg md:mr-[90px]"
                        src={image}
                        alt="Studying in Russia"
                    />
                </div>
            </div>

            {/* image 2   and image 4 */}

            <div className="flex flex-col md:flex-row items-center justify-center py-5 font-[Merriweather] ">
                <div className=" ">
                    <img
                        className="sm:w-[500px] md:w-[568px] h-[377.88px] rounded-lg sm:m-auto md:ml-[90px]"
                        src={image2}
                        alt="Studying in Russia"
                    />
                </div>
                <div className="md:flex-1 flex-col items-start md:items-center md:text-left text-center sm:m-auto md:ml-10">
                    <h2 className="text-[32px] sm:m-auto md:mr-[85px]">
                        {titel2}
                    </h2>
                    <p className="sm:m-[auto] md:mr-[85px] text-[24px] md:w-[581px]">
                        {description2}
                    </p>
                </div>
            </div>
        </>
    )
}

const HomeProps2 = ({ image3, name, description3 }) => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center py-5 font-[Merriweather] md:ml-[150px] lg:ml-[150px]">
                <div className="md:flex-1 lg:flex-1 flex items-center justify-center md:mt-5 lg:mt-5">
                    <img
                        className="w-[80px] h-[80px] rounded-full shadow-lg"
                        src={image3}
                        alt="Studying in Russia"
                    />
                    <h2 className="text-[24px] sm:m-auto md:mr-[130px]  sm:ml-[20px] md:ml-[20px] lg:ml-[20px]">
                        {description3}
                        <p className="text-gray-500">- {name}</p>
                    </h2>
                </div>
            </div>
        </>
    )
}


export default HomeProps
