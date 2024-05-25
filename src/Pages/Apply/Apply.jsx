import React, { useEffect, useState } from "react";
import CountryDropdown from "../../components/CountryDropdown/CountryDropdown";
import { budgetRanges, countries, periodOfTime } from "../../Constants";
import NextBackBtns from "../../components/NextBackBtns/NextBackBtns";
import axiosInstance from "../../Axios/axiosConfig";
import usePostApplication from "../../Hooks/usePostApplication";

const Apply = () => {
  const {postApplication} = usePostApplication()
  const defaultCountry = {
    value: "eg",
    phoneCode: "+20",
    flag: "https://flagcdn.com/w20/eg.png",
  };

  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [step, setStep] = useState(1);
  const [passportFile, setPassportFile] = useState(null);
  const [educationFile, setEducationFile] = useState(null);
  const [passportUrl, setPassportUrl] = useState("");
  const [educationUrl, setEducationUrl] = useState("");
  const [passportFileType, setPassportFileType] = useState("");
  const [educationFileType, setEducationFileType] = useState("");

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    nationality: '',
    residence: '',
    planStart: '',
    rangeOfBudget: '',
    passport: '',
    education: '',
  });

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePassportChange = (e) => {
    const file = e.target.files[0];
    setPassportFile(file);
    uploadFile(file, "passport");
    setPassportFileType(file.type);
  };

  const handleEducationChange = (e) => {
    const file = e.target.files[0];
    setEducationFile(file);
    uploadFile(file, "education");
    setEducationFileType(file.type)
  };

  const uploadFile = async (file, type) => {
    const uploadFormData = new FormData();
    uploadFormData.append("file", file);

    try {
      const response = await axiosInstance.post(`/upload/${type}`, uploadFormData);
      if (type === "passport") {
        setPassportUrl(response.data.url);
        setFormData({...formData ,passport: response.data.url })
      } else if (type === "education") {
        setEducationUrl(response.data.url);
        setFormData({...formData ,education: response.data.url })
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const [isStepValid1 , setIsStepValid1] = useState(false);
  const [isStepValid2 , setIsStepValid2] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
  
    if ((step === 1 && isStepValid1) || (step === 2 && isStepValid2)) {
      if (step < 2) {
        setStep(step + 1);
      } else {
        handleSubmit();
        setStep(step + 1);
      }
    }
  };

  useEffect(() => {
    if (formData.name && formData.phone && formData.nationality && formData.residence) {
      setIsStepValid1(true);
    } else {
      setIsStepValid1(false);
    }
  }, [formData.name, formData.phone, formData.nationality, formData.residence]);

  useEffect(() => {
    if (formData.planStart && formData.rangeOfBudget && passportUrl && educationUrl) {
      setIsStepValid2(true);
    } else {
      setIsStepValid2(false);
    }
  }, [formData.planStart, formData.rangeOfBudget, passportUrl, educationUrl]);

  const handleBack = (e) => {
    e.preventDefault();
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    const updatedFormData = { ...formData, phone: `${selectedCountry.phoneCode}${formData.phone}` };
    setFormData(updatedFormData);
    await postApplication(updatedFormData);
};

  
  return (
    <>
      <div className="w-fit lg:h-[521px] lg:mt-[104px]">
        <img
          src="/images/uni-1.svg"
          alt="university"
          className="2xl:w-[1920px] 2xl:h-fit "
          width={1920}
        />
      </div>
      <div className="lg:w-[883px] lg:h-[100px] lg:mt-[44px] lg:mx-auto text-center ">
        <h1 className="w-fit mx-auto font-merriweather font-bold text-[40px] leading-[50.28px] text-center text-[#212121] ">
          Apply for a
        </h1>
        <span className="font-merriweather font-bold text-[40px] leading-[50.28px] text-end text-[#240F6E] lg:ml-[10px]">
          Kabardino balkaria state medical university
        </span>
      </div>
      <div className="lg:mt-[32px] lg:w-[882px] lg:h-[65px] lg:mx-auto lg:mb-[38px] ">
        <img src={step === 1 ? '/images/default.svg' : step===2 ? "/images/step2.svg" : '/images/step3.svg'} alt="bar" />
      </div>
      <div
        className={`lg:w-[996px] lg:p-[72px] bg-[#C8E1FC] rounded-[10px] mx-auto lg:mb-[100px] ${
          step === 1 ? "lg:h-[774px]" : ""
        } ${step === 2 ? "lg:h-[1223px]" : ""} ${
          step === 3 ? "lg:h-[326px]" : ""
        } `}
      >
        <form className="lg:w-[852px] lg:h-[536px] flex flex-col lg:gap-[32px] ">
          {step === 1 && (
            <>
              <label className="lg:w-[852px] lg:h-[110px] flex lg:flex-col lg:gap-[24px]">
                <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[249px] inline">
                  What is your name?*
                </p>
                <input
                  type="text"
                  name="name"
                  placeholder="Ahmed Mohamed"
                  value={formData.name}
                onChange={handleChange}
                  className="block lg:w-[852px] lg:h-[56px] rounded-[10px] border border-[#646464] bg-transparent lg:p-[16px] leading-[25.14px] text-[20px] font-merriweather font-normal text-[#212121]"
                />
              </label>
              <div className="flex absolute items-center lg:w-[122px] lg:h-[56px] justify-center bg-transparent">
                <div className="mt-[335px] ml-[1338px]">
                  <CountryDropdown
                    selectedCountry={selectedCountry}
                    setSelectedCountry={setSelectedCountry}
                  />
                </div>
              </div>
              <label className="lg:w-[852px] lg:h-[110px] flex lg:flex-col lg:gap-[24px]">
                <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[257px] inline">
                  What is your phone?*
                </p>
                <input
                  type="number"
                  name="phone"
                maxLength={12}
                placeholder="1xxxxxxxxx"
                value={formData.phone}
                onChange={handleChange}
                  className="block lg:w-[852px] lg:h-[56px] rounded-[10px] border border-[#212121] lg:p-[16px] leading-[25.14px] text-[20px] bg-transparent font-merriweather font-normal text-[#212121]"
                />
              </label>
              <label className="lg:w-[852px] lg:h-[110px] flex lg:flex-col lg:gap-[24px]">
                <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[313px] inline">
                  What is your nationality?*
                </p>
                <select
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                  className="block lg:w-[852px] lg:h-[59px] rounded-[10px] border border-[#212121] lg:p-[16px] leading-[25.14px] text-[20px] bg-[#C8E1FC] font-merriweather font-normal text-[#212121] items-center justify-center"
                >
                  <option value="" disabled>
                    Select a Nationality
                  </option>
                  {countries.map((country) => (
                    <option
                      key={country.value}
                      value={country.value}
                      className="font-merriweather font-normal text-[20px] leading-[25.14px] "
                    >
                      {country.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="lg:w-[852px] lg:h-[110px] flex lg:flex-col lg:gap-[24px]">
                <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[424px] inline">
                  What is your country of residence?*
                </p>
                <select
                  name="residence"
                  value={formData.residence}
                  onChange={handleChange}
                  className="block lg:w-[852px] lg:h-[59px] rounded-[10px] border border-[#212121] lg:p-[16px] leading-[25.14px] text-[20px] bg-[#C8E1FC] font-merriweather font-normal text-[#212121] items-center justify-center"
                >
                  <option value="" disabled>
                    Select a country
                  </option>
                  {countries.map((country) => (
                    <option
                      key={country.value}
                      value={country.value}
                      className="font-merriweather font-normal text-[20px] leading-[25.14px] "
                    >
                      {country.label}
                    </option>
                  ))}
                </select>
              </label>
            </>
          )}
          {step === 2 && (
            <>
              <label className="lg:w-[852px] lg:h-[110px] flex lg:flex-col lg:gap-[24px]">
                <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[331px] inline">
                  When do you plan to start?*
                </p>
                <select
                  name="planStart"
                  value={formData.planStart}
                  onChange={handleChange}
                  className="block lg:w-[852px] lg:h-[59px] rounded-[10px] border border-[#212121] lg:p-[16px] leading-[25.14px] text-[20px] font-merriweather font-normal text-[#212121] bg-[#C8E1FC] items-center justify-center"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {periodOfTime.map((time) => (
                    <option
                      key={time.value}
                      value={time.value}
                      className="font-merriweather font-normal text-[20px] leading-[25.14px] "
                    >
                      {time.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="lg:w-[852px] lg:h-[110px] flex lg:flex-col lg:gap-[24px]">
                <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[589px] inline">
                What is your maximum budget for tuition fees?*
                </p>
                <select
                  name="rangeOfBudget"
                  value={formData.rangeOfBudget}
                  onChange={handleChange}
                  className="block lg:w-[852px] lg:h-[59px] rounded-[10px] border border-[#212121] lg:p-[16px] leading-[25.14px] text-[20px] bg-[#C8E1FC] font-merriweather font-normal text-[#212121] items-center justify-center"
                >
                  <option value="" disabled>
                    Select a budget range
                  </option>
                  {budgetRanges.map((budget) => (
                    <option
                      key={budget.value}
                      value={budget.value}
                      className="font-merriweather font-normal text-[20px] leading-[25.14px] "
                    >
                      {budget.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="lg:w-[852px] lg:h-[302px] flex lg:flex-col lg:gap-[24px] cursor-pointer">
                <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[424px] inline">
                  Passport*
                </p>
                <div className="lg:w-[852px] lg:h-[248px] rounded-[10px] border border-dotted border-[#646464] flex items-center justify-center">
                  {passportUrl && passportFileType === "application/pdf" && (
                    <div className="flex flex-col items-center justify-center">
                      <img
                        src="/images/pdf-icon.jpg"
                        alt="PDF icon"
                        width={50}
                        height={50}
                      />
                      <p className="text-[#646464]">PDF Uploaded Successfully</p>
                    </div>
                  )}
                  {passportUrl && passportFileType !== "application/pdf" && (
                    <img
                      src={passportUrl}
                      alt="passport"
                      className="mx-auto h-[248px] w-[852px] rounded-[10px]"
                    />
                  )}
                  {!passportUrl && (
                    <img
                      src="/images/+.svg"
                      alt="plus"
                      width={27}
                      height={50}
                      className="mx-auto"
                    />
                  )}
                </div>
                <input
                  type="file"
                  accept=".pdf,.jpg,.png"
                  className="hidden"
                  onChange={handlePassportChange}
                />
              </label>

              <label className="lg:w-[852px] lg:h-[302px] flex lg:flex-col lg:gap-[24px] cursor-pointer">
                <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[424px] inline">
                  Education Certificate*
                </p>
                <div className="lg:w-[852px] lg:h-[248px] rounded-[10px] border border-dotted border-[#646464] flex items-center justify-center">
                {educationUrl && educationFileType === "application/pdf" && (
                    <div className="flex flex-col items-center justify-center">
                      <img
                        src="/images/pdf-icon.jpg"
                        alt="PDF icon"
                        width={50}
                        height={50}
                      />
                      <p className="text-[#646464]">PDF Uploaded Successfully</p>
                    </div>
                  )}
                  {educationUrl && educationFileType !== "application/pdf" && (
                    <img
                      src={educationUrl}
                      alt="passport"
                      className="mx-auto h-[248px] w-[852px] rounded-[10px]"
                    />
                  )}
                  {!educationUrl && (
                    <img
                      src="/images/+.svg"
                      alt="plus"
                      width={27}
                      height={50}
                      className="mx-auto"
                    />
                  )}
                </div>
                <input
                  type="file"
                  accept=".pdf,.jpg,.png"
                  className="hidden"
                  onChange={handleEducationChange}
                />
              </label>
              <div className="lg:w-[603px] lg:h-[57px] bg-[#E7E7E7] lg:p-[16px] rounded-[5px] mb-[8px] flex lg:flex-row lg:gap-[16px] ">
                <img
                  src="/images/error.svg"
                  alt="error"
                  width={24}
                  height={24}
                />
                <p className="lg:w-[531px] lg:h-[25px] font-merriweather font-light text-[20px] leading-[25.14px] text-[#240F6E] ">
                  Files should be in PDF, PNG or JPG formats up to 10MB
                </p>
              </div>
            </>
          )}
          {step === 3 && (
            <div className="lg:w-[612px] lg:h-[80px] flex lg:flex-col lg:gap-[24px] mx-auto ">
              <p className="font-merriweather font-normal text-[32px] leading-[40.22px] text-[#212121] lg:w-[612px] lg:h-[80px] inline text-center">
                {`Thank you for your submission`}
                <br />
                {`We will contact you as soon as possible`}
              </p>
            </div>
          )}
          <div
            className={`${step === 2 ? "lg:-mt-[8px]" : "lg:mt-[40px]"} ${
              step === 3 ? "lg:mt-[16px]" : ""
            }  lg:mx-auto `}
          >
            <NextBackBtns
              step={step}
              handleNext={(e) => handleNext(e)}
              handleBack={(e) => handleBack(e)}
              isStepValid1={isStepValid1}
              isStepValid2={isStepValid2}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Apply;
