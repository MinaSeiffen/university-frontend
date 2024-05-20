import React, { useState } from "react";
import CountryDropdown from "../../components/CountryDropdown/CountryDropdown";

const SignUp = () => {
    const [password, setPassword] = useState('');
    const [displayPassword, setDisplayPassword] = useState('');
  
    const handleChange = (e) => {
      const { value } = e.target;
      setPassword(value);
      setDisplayPassword('*'.repeat(value.length));
    };
    const defaultCountry = {
        value: 'eg',
        label: 'Egypt (+20)',
        phoneCode: '+20',
        flag: 'https://flagcdn.com/w20/eg.png'
      };
    
      const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  return (
    <>
      <div className="lg:w-full lg:h-[1466px] bg-[#C8E1FC] flex flex-col lg:gap-[24px]">
        <div className="lg:w-[370px] lg:h-[192px] lg:mt-[100px] lg:mx-auto ">
          <img
            src="/images/signup-logo.svg"
            alt="logo"
            width={370}
            height={192}
          />
        </div>
        <div className="bg-[#FFFFFF] lg:w-[996px] lg:h-[1050px] lg:mx-auto border border-[#240F6E] rounded-[10px] lg:p-[72px] ">
          <form className="flex flex-col lg:gap-[24px]">
            <div className="flex lg:flex-row lg:gap-[24px] ">
              <label className="lg:w-[414px] lg:h-[110px] flex lg:flex-col lg:gap-[24px] ">
                <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[150px] inline">
                  First Name
                  <span className="text-[#D60000] font-merriweather font-normal text-[24px] leading-[30.17px] ">
                    *
                  </span>
                </p>
                <input
                  type="text"
                  placeholder="John"
                  className="block lg:w-[414px] lg:h-[56px] rounded-[10px] border border-[#212121] lg:p-[16px] text-[20px] font-merriweather text-[#212121] "
                />
              </label>
              <label className="lg:w-[414px] lg:h-[110px] flex lg:flex-col lg:gap-[24px] ">
                <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[150px] inline">
                  Last Name
                  <span className="text-[#D60000] font-merriweather font-normal text-[24px] leading-[30.17px] ">
                    *
                  </span>
                </p>
                <input
                  type="text"
                  placeholder="Doe"
                  className="block lg:w-[414px] lg:h-[56px] rounded-[10px] border border-[#212121] lg:p-[16px] text-[20px] font-merriweather text-[#212121] "
                />
              </label>
            </div>
            <label className="lg:w-[852px] lg:h-[110px] flex lg:flex-col lg:gap-[24px] ">
              <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[200px] inline">
                E-mail address
                <span className="text-[#D60000] font-merriweather font-normal text-[24px] leading-[30.17px] ">
                  *
                </span>
              </p>
              <input
                type="email"
                placeholder="ex@example.com"
                className="block lg:w-[852px] lg:h-[56px] rounded-[10px] border border-[#212121] lg:p-[16px] leading-[25.14px] text-[20px] font-merriweather font-normal text-[#212121] "
              />
            </label>
            <div className="flex absolute items-center lg:w-[122px] lg:h-[56px] justify-center">
                <div className="mt-[588px] ml-[1338px]">
                  <CountryDropdown
                    selectedCountry={selectedCountry}
                    setSelectedCountry={setSelectedCountry}
                  />
                </div>
              </div>
            <label className="lg:w-[852px] lg:h-[110px] flex lg:flex-col lg:gap-[24px] ">
              <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[200px] inline">
                Phone Number
                <span className="text-[#D60000] font-merriweather font-normal text-[24px] leading-[30.17px] ">
                  *
                </span>
              </p>
              <input
                type="text"
                placeholder="01xxxxxxxxx"
                className="block lg:w-[852px] lg:h-[56px] rounded-[10px] border border-[#212121] lg:p-[16px] leading-[25.14px] text-[20px] font-merriweather font-normal text-[#212121] "
              />
            </label>
            <label className="lg:w-[852px] lg:h-[284px] flex lg:flex-col lg:gap-[24px] ">
              <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[200px] inline">
                Password
                <span className="text-[#D60000] font-merriweather font-normal text-[24px] leading-[30.17px] ">
                  *
                </span>
              </p>
              <input
                type="text"
                value={displayPassword}
                onChange={handleChange}
                className="block lg:w-[852px] lg:h-[56px] rounded-[10px] border border-[#212121] lg:p-[16px] leading-[25.14px] text-[20px] font-merriweather font-normal text-[#212121] "
              />
              <div className="lg:w-[366px] lg:h-[150px] ">
                <p className="font-merriweather font-light text-[20px] leading-[25.14px] text-[#138701] ">
                {`10-32 characters`} 
                <br />
                {`At least one upper case`} 
                <br />
                {`At least one lower case`} 
                <br />
               {` At least one number`} 
               <br />
               {`At least one special character`} 
               <br />
               {`No space characters`}
                </p>
              </div>
            </label>
            <label className="lg:w-[852px] lg:h-[110px] flex lg:flex-col lg:gap-[24px] ">
              <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[200px] inline">
                Birth Date
                <span className="text-[#D60000] font-merriweather font-normal text-[24px] leading-[30.17px] ">
                  *
                </span>
              </p>
              <input
                type="text"
                placeholder="mm/dd/yyyy"
                className="block lg:w-[852px] lg:h-[56px] rounded-[10px] border border-[#212121] lg:p-[16px] leading-[25.14px] text-[20px] font-merriweather font-normal text-[#212121] "
              />
            </label>
            <button type="submit" className="lg:w-[184px] lg:h-[54px] mx-auto rounded-[10px] lg:py-[12px] lg:px-[6px] bg-[#240F6E] lg:mt-[8px] ">
                <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#FFFFFF] w-[176px] -mr-[15px] ">Create account</p>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
