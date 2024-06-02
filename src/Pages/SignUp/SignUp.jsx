import React, { useState } from "react";
import CountryDropdown from "../../components/CountryDropdown/CountryDropdown";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useSignup from "../../Hooks/useSignup";

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {signUp} = useSignup()
  

  const defaultCountry = {
    value: "in",
    phoneCode: "+91",
    flag: "https://flagcdn.com/w20/in.png",
  };

  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);


  const onSubmit = async (data) => {
    const updatedData = { ...data, phoneNumber: `${selectedCountry.phoneCode}${data.phoneNumber}` };
    await signUp(updatedData);
  };
  
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
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:gap-[24px]">
      <div className="flex lg:flex-row lg:gap-[24px]">
        <label className="lg:w-[414px] lg:h-[110px] flex lg:flex-col lg:gap-[24px]">
          <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[150px] inline">
            First Name
            <span className="text-[#D60000] font-merriweather font-normal text-[24px] leading-[30.17px]">*</span>
          </p>
          <input
            type="text"
            placeholder="John"
            {...register('firstName', { required: 'First name is required' })}
            className="block lg:w-[414px] lg:h-[56px] rounded-[10px] border border-[#212121] lg:p-[16px] text-[20px] font-merriweather text-[#212121]"
          />
          {errors.firstName && <p className="-mt-[20px] text-[13px] text-red-500">{errors.firstName.message}</p>}
        </label>
        <label className="lg:w-[414px] lg:h-[110px] flex lg:flex-col lg:gap-[24px]">
          <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[150px] inline">
            Last Name
            <span className="text-[#D60000] font-merriweather font-normal text-[24px] leading-[30.17px]">*</span>
          </p>
          <input
            type="text"
            placeholder="Doe"
            {...register('lastName', { required: 'Last name is required' })}
            className="block lg:w-[414px] lg:h-[56px] rounded-[10px] border border-[#212121] lg:p-[16px] text-[20px] font-merriweather text-[#212121]"
          />
          {errors.lastName && <p className="-mt-[20px] text-[13px] text-red-500">{errors.lastName.message}</p>}
        </label>
      </div>
      <label className="lg:w-[852px] lg:h-[110px] flex lg:flex-col lg:gap-[24px]">
        <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[200px] inline">
          E-mail address
          <span className="text-[#D60000] font-merriweather font-normal text-[24px] leading-[30.17px]">*</span>
        </p>
        <input
          type="email"
          placeholder="ex@example.com"
          {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
          className="block lg:w-[852px] lg:h-[56px] rounded-[10px] border border-[#212121] lg:p-[16px] leading-[25.14px] text-[20px] font-merriweather font-normal text-[#212121]"
        />
        {errors.email && <p className="-mt-[20px] text-[13px] text-red-500">{errors.email.message}</p>}
      </label>
      <div className="flex absolute items-center lg:w-[122px] lg:h-[56px] justify-center">
        <div className="mt-[589px] ml-[1338px]">
          <CountryDropdown
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </div>
      </div>
      <label className="lg:w-[852px] lg:h-[110px] flex lg:flex-col lg:gap-[24px]">
        <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[200px] inline">
          Phone Number
          <span className="text-[#D60000] font-merriweather font-normal text-[24px] leading-[30.17px]">*</span>
        </p>
        <input
          type="number"
          placeholder="1xxxxxxxxx"
          {...register('phoneNumber', { 
            required: 'Phone number is required', 
            pattern: { value: /^[0-9]{10,}$/, message: 'Invalid phone number' } 
          })}
          className="block lg:w-[852px] lg:h-[56px] rounded-[10px] border border-[#212121] lg:p-[16px] leading-[25.14px] text-[20px] font-merriweather font-normal text-[#212121]"
        />
        {errors.phoneNumber && <p className="-mt-[20px] text-[13px] text-red-500">{errors.phoneNumber.message}</p>}
      </label>
      <label className="lg:w-[852px] lg:h-[284px] flex lg:flex-col lg:gap-[20px] z-0">
        <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[200px] inline">
          Password
          <span className="text-[#D60000] font-merriweather font-normal text-[24px] leading-[30.17px]">*</span>
        </p>
        <input
          type="password"
          {...register('password', { 
            required: 'Password is required', 
            minLength: { value: 10, message: 'Password must be at least 10 characters' }, 
            maxLength: { value: 32, message: 'Password cannot exceed 32 characters' }, 
            pattern: { 
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,32}$/, 
              message: 'Password must contain upper and lower case letters, a number, and a special character' 
            }
          })}
          className="block lg:w-[852px] lg:h-[56px] rounded-[10px] border border-[#212121] lg:p-[16px] leading-[25.14px] text-[30px] font-merriweather font-normal z-0 text-[#212121]"
        />

        {errors.password && <p className="-mt-[20px] text-[13px] text-red-500">{errors.password.message}</p>}
        <div className="lg:w-[366px] lg:h-[150px]">
          <p className="font-merriweather font-light text-[20px] leading-[25.14px] text-[#646464]">
            {`10-32 characters`} 
            <br />
            {`At least one upper case`} 
            <br />
            {`At least one lower case`} 
            <br />
            {`At least one number`} 
            <br />
            {`At least one special character`} 
            <br />
            {`No space characters`}
          </p>
        </div>
      </label>
      <label className="lg:w-[852px] lg:h-[110px] flex lg:flex-col lg:gap-[24px]">
        <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[200px] inline">
          Birth Date
          <span className="text-[#D60000] font-merriweather font-normal text-[24px] leading-[30.17px]">*</span>
        </p>
        <input
          type="text"
          placeholder="mm/dd/yyyy"
          {...register('birthDate', { required: 'Birth date is required', pattern: { value: /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/, message: 'Invalid birth date format' } })}
          className="block lg:w-[852px] lg:h-[56px] rounded-[10px] border border-[#212121] lg:p-[16px] leading-[25.14px] text-[20px] font-merriweather font-normal text-[#212121]"
        />
        {errors.birthDate && <p className="-mt-[20px] text-[13px] text-red-500">{errors.birthDate.message}</p>}
      </label>
      <button type="submit" className="lg:w-[184px] lg:h-[54px] mx-auto rounded-[10px] lg:py-[12px] lg:px-[6px] bg-[#240F6E] lg:mt-[8px]">
        <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#FFFFFF] w-[176px] -mr-[15px]">Create account</p>
      </button>
      <p className="w-[290px] h-[60px] font-merriweather font-normal text-[20px] text-[#240F6E] mx-auto">Have an account? <Link to='/login'><span className="font-bold text-black underline">Login here</span></Link></p>
    </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
