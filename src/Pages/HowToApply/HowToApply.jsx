import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const HowToApply = () => {
  return (
    <>
      <section className='flex font-[Merriweather] mt-[192px] mx-auto justify-center'>
        <div className='w-[1020px] h-[304px] bg-[#C8E1FC] ml-[120px] pt-[40px] pl-[50px] rounded-lg'>
          <h3 className='text-[32px] mb-5'>How to apply?</h3>
          <p className='text-[24px] w-[646px] h-[120px] text-[#212121]'>Applying to study abroad is very exciting, but it can
            be a bit intimidating too. That’s why we’ll support you
            at every step of the way, and make the application
            process as simple as possible.
          </p>
        </div>
        <div className='-ml-[205px] -mt-[70px]'>
          <img
            className="w-[356px] -h-[376px] absolute"
            src="/images/Group 3.svg"
            alt="Group 3"
          />
        </div>
      </section>

      {/* section 2 */}

      <section className='w-full h-[839px] bg-[#C8E1FC] mt-[100px] font-[Merriweather] mx-auto justify-center items-center'>
        <div className='pl-[120px] pt-[65px] mx-auto justify-center'>
          <h3 className='text-[40px]'>Our simple application process </h3>
        </div>

        <div className='flex mt-[100px] mx-auto justify-center'>
          <div className='w-[66px] h-[374px] pl-[120px] mt-[35px] mr-[106px]'>
            <div className='w-[66px] h-[66px] rounded-full bg-[#240F6E] text-[40px] text-[#FFFFFF] text-center mb-[80px]'>1</div>
            <div className='w-[66px] h-[66px] rounded-full bg-[#240F6E] text-[40px] text-[#FFFFFF] text-center mb-[80px]'>2</div>
            <div className='w-[66px] h-[66px] rounded-full bg-[#240F6E] text-[40px] text-[#FFFFFF] text-center'>3</div>
          </div>

          <div>
            <div className='w-[300px] h-[128px] mb-10 '>
              <h4 className='text-[24px]'>Choose your university</h4>
              <p className='text-[20px] text-[#000000]'>Our friendly advisors can <br /> help you explore your options.</p>
              <Link to='/search' className='flex text-[#240F6E] text-[20px]' > Find a university < FaGreaterThan className='ml-4 mt-[5px]' /></Link>
            </div>

            <div className='w-[317px] h-[88px] mb-12'>
              <h4 className='text-[24px]'>Submit an application</h4>
              <p className='text-[20px] text-[#000000]'>You’ll need to include any relevant supporting documents.</p>
            </div>

            <div className='w-[447px] h-[88px]'>
              <h4 className='text-[24px]'>Receive an offer letter or decision</h4>
              <p className='text-[20px] text-[#000000]'>1. This may be a conditional or unconditional 2. offer or an admission decision.</p>
            </div>
          </div>

          <div className='w-[486px] h-[629px] bg-[#FFFFFF] ml-[70px] -mt-20 text-center rounded-lg'>
            <h4 className='text-[24px] mt-[70px]'>Start your application today</h4>
            <img
              className='w-[413px] h-[275px] mt-[60px] m-auto'
              src='/images/image 2.svg'
              alt='image 2'
            />
            <button className="w-[221px] h-[56px] rounded-lg px-[46px] py-[12px] text-white bg-[#240F6E] text-[20px] hover:bg-blue-900 mt-[60px] ">
              <Link to="/universities">Apply Now</Link>

            </button>
          </div>
        </div>
      </section>

    </>
  )
}

export default HowToApply
