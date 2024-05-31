import React from 'react'

const ContactCard = ({title , phoneNum}) => {
  return (<>
    <div className='lg:w-[511px] lg:h-[227px] rounded-[10px] p-[44px] flex lg:flex-col lg:gap-[44px] bg-[#C8E1FC] '>
        <p className='lg:w-[331px] lg:h-[30px] font-merriweather font-normal text-[24px] leading-[30.17px] text-[#212121] '>
            {title}
        </p>
        <div className='lg:w-[423px] lg:h-[65px] flex lg:flex-row lg:gap-[40px] '>
            <div className='lg:w-[134px] lg:h-[65px] flex flex-col lg:gap-[8px] '>
            <img src="/images/whatsapp.svg" alt="whatsapp" width={32} height={32} className='mx-auto' />
            <p className='lg:w-[134px] lg:h-[25px] font-merriweather font-normal text-[20px] leading-[25.14px] text-[#212121] '>
            {phoneNum}
            </p>
            </div>
            <div className='lg:w-[249px] lg:h-[65px] flex flex-col lg:gap-[8px] '>
            <img src="/images/email.svg" alt="whatsapp" width={32} height={32} className='mx-auto' />
            <p className='lg:w-[249px] lg:h-[25px] font-merriweather font-normal text-[20px] leading-[25.14px] text-[#212121] '>
            studyabroad@gmail.com
            </p>
            </div>
        </div>
    </div>
  </>
  )
}

export default ContactCard