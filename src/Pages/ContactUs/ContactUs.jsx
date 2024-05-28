import React, { useEffect, useState } from "react";
import ContactCard from "../../components/ContactCard/ContactCard";
import { contactTitles, contactTypes } from "../../Constants";
import CountryDropdown from "../../components/CountryDropdown/CountryDropdown";
import useContactRequest from "../../Hooks/useContactRequest";

const ContactUs = () => {
  const {contactRequest} = useContactRequest()

  const defaultCountry = {
    value: "in",
    phoneCode: "+91",
    flag: "https://flagcdn.com/w20/in.png",
  };

  const [isValid, setIsValid] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    contactType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      phone: `${selectedCountry.phoneCode}${formData.phone}`,
    };
    setFormData(updatedFormData);
    await contactRequest(updatedFormData);
  };

  useEffect(() => {
    if (formData.name && formData.phone && formData.contactType) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData.name, formData.phone, formData.contactType]);

  return (
    <>
      <div className="lg:w-[456px] lg:h-[146px] lg:mt-[204px] mx-auto flex flex-col lg:gap-[16px] ">
        <h1 className="w-full h-[50px] font-merriweather font-bold text-[40px] leading-[50.28px] text-[#240F6E] ">
          Contact Study Abroad !
        </h1>
        <p className="w-[388px] h-[80px] font-merriweather font-normal text-[32px] mx-auto text-center leading-[40.22px] text-[#212121] ">
          Need help? We`re always here for you.
        </p>
      </div>
      <div className="lg:w-[1200px] lg:h-[227px] lg:mt-[56px] mx-auto flex lg:flex-row lg:gap-[178px] ">
        {contactTitles.map((contact) => (
          <ContactCard key={contact.title} title={contact.title} />
        ))}
      </div>
      <div className="lg:w-[996px] lg:h-[728px] lg:mt-[56px] mx-auto rounded-[10px] bg-[#C8E1FC] p-[72px] ">
        <h2 className="lg:w-[566px] lg:h-[40px] font-merriweather font-normal text-[32px] leading-[40.22px] text-[#000000] mx-auto ">
          Or contact us via the following form
        </h2>
        <form
          className="lg:w-[852px] lg:h-[480px] flex flex-col lg:gap-[32px] mx-auto lg:mt-[64px] "
          onSubmit={(e) => handleSubmit(e)}
        >
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
            <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[339px] inline">
              Why are you contacting us?*
            </p>
            <select
              name="contactType"
              value={formData.contactType}
              onChange={handleChange}
              className="block lg:w-[852px] lg:h-[59px] rounded-[10px] border border-[#212121] lg:p-[16px] leading-[25.14px] text-[20px] font-merriweather font-normal text-[#212121] bg-[#C8E1FC] items-center justify-center"
            >
              <option value="" disabled>
                Select Contact Type
              </option>
              {contactTypes.map((type) => (
                <option
                  key={type.value}
                  value={type.value}
                  className="font-merriweather font-normal text-[20px] leading-[25.14px] "
                >
                  {type.label}
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            className={`lg:w-[184px] mt-[3px] lg:h-[54px] rounded-[10px] py-[12px] px-[46px] mx-auto ${isValid ? 'bg-[#240F6E]' : 'bg-[#E7E7E7] cursor-not-allowed'} `}
          >
            <p className={`w-[86px] h-[30px] font-merriweather font-normal text-[24px] leading-[30.17px] ${isValid ? 'text-white' : 'text-[#BDBDBD]'} `}>
              Submit
            </p>
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
