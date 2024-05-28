import React, { useEffect, useState } from "react";
import CountryDropdown from "../../components/CountryDropdown/CountryDropdown";
import AppHistoryCard from "../../components/AppHistoryCard/AppHistoryCard";
import useLogout from "../../Hooks/useLogout";
import Spinner from "../../components/Spinner/Spinner";
import useUpdateProfile from "../../Hooks/useUpdateProfile";
import useGetApplications from "../../Hooks/useGetApplications";

const Profile = ({ authUser }) => {
  const { logout } = useLogout();
  const { applications, getApplications } = useGetApplications();
  const {updateProfile} = useUpdateProfile()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    currentPassword: "",
    newPassword: "",
    birthDate: "",
  });

  const [isApp, setIsApp] = useState(false);
  const [isEdit, setIsEdit] = useState(true);
  const defaultCountry = {
    value: "eg",
    phoneCode: "+20",
    flag: "https://flagcdn.com/w20/eg.png",
  };

  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);

  const handleClickEdit = (e) => {
    e.preventDefault();
    setIsApp(false);
    setIsEdit(true);
  };

  const handleClickApp = (e) => {
    e.preventDefault();
    setIsApp(true);
    setIsEdit(false);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const updatedPhoneNumber = `${selectedCountry.phoneCode}${formData.phoneNumber}`;
    const updatedFormData = { ...formData, phoneNumber: updatedPhoneNumber };
     updateProfile(updatedFormData); 
}


  useEffect(() => {
    const gettingApps = async () => {
      await getApplications();
    };
    gettingApps();
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (authUser) {
      const phoneNumber = authUser?.phoneNumber.toString();
      const formattedPhoneNumber = phoneNumber ? phoneNumber.substring(3) : "";
      setFormData({
        firstName: authUser.firstName,
        lastName: authUser.lastName,
        phoneNumber: formattedPhoneNumber,
        birthDate: authUser.birthDate,
        email: authUser.email,
        newPassword: "",
        currentPassword: "",
      });
    }
  }, [authUser]);

  if (!authUser) {
    return <Spinner />;
  }

  return (
    <>
      <div className="lg:w-[312px] lg:h-[312px] lg:mt-[168px] lg:ml-[120px] ">
        <img
          src="/images/profile-icon.svg"
          alt="profile"
          width={312}
          height={312}
        />
      </div>
      <div
        className={`lg:w-[1200px] lg:h-fit flex ${
          isEdit ? "lg:flex-row lg:gap-[35px]" : "lg:flex-col lg:gap-[56px]"
        }  mt-[30px]  mx-auto `}
      >
        <div className="lg:w-[313px] lg:h-[314px] flex flex-col gap-[72px] ">
          <p className="w-full h-[30px] font-merriweather font-normal text-[24px] text-center text-[#212121] leading-[30.17px] ">
            {authUser.firstName} {authUser.lastName}
          </p>
          <div className="w-full h-[212px] flex flex-col gap-[32px] ">
            <button
              onClick={(e) => handleClickEdit(e)}
              className={`w-[full] lg:h-[54px] py-[12px] px-[46px] ${
                isEdit ? "bg-[#240F6E]" : "bg-[#E7E7E7]"
              }  `}
            >
              <p
                className={`lg:w-[134px] lg:h-[30px] font-merriweather font-normal text-[24px] leading-[30.17px] ${
                  isEdit ? "text-[#FFFFFF]" : "text-[#646464]"
                }  mx-auto `}
              >
                Edit Profile
              </p>
            </button>
            <button
              onClick={(e) => handleClickApp(e)}
              className={`w-full lg:h-[54px] py-[12px] px-[46px] ${
                isApp ? "bg-[#240F6E]" : "bg-[#E7E7E7]"
              } `}
            >
              <p
                className={`lg:w-[232px] lg:h-[30px] font-merriweather font-normal text-[24px] leading-[30.17px] ${
                  isApp ? "text-[#FFFFFF]" : "text-[#646464]"
                }  mx-auto `}
              >
                Application History
              </p>
            </button>
            <button
              className="w-[142px] lg:h-[40px] flex flex-row gap-[12px] "
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
            >
              <img
                src="/images/logout-icon.svg"
                alt="logout"
                width={40}
                height={40}
              />
              <p className="lg:w-[142px] lg:h-[30px] font-merriweather font-normal text-[24px] leading-[30.17px] text-[#212121] my-auto ">
                Logout
              </p>
            </button>
          </div>
        </div>
        {isEdit && (
          <div className="w-[852px] flex flex-col ">
            <form className="flex flex-col mb-[147px] lg:gap-[24px]" onSubmit={(e)=>handleSubmit(e)}>
              <div className="flex lg:flex-row lg:gap-[24px]">
                <label className="lg:w-[414px] lg:h-[110px] flex lg:flex-col lg:gap-[24px]">
                  <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[150px] inline">
                    First Name
                  </p>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="block lg:w-[414px] lg:h-[56px] rounded-[10px] border border-[#212121] lg:p-[16px] text-[20px] font-merriweather text-[#212121]"
                  />
                </label>
                <label className="lg:w-[414px] lg:h-[110px] flex lg:flex-col lg:gap-[24px]">
                  <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[150px] inline">
                    Last Name
                  </p>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="block lg:w-[414px] lg:h-[56px] rounded-[10px] border border-[#212121] lg:p-[16px] text-[20px] font-merriweather text-[#212121]"
                  />
                </label>
              </div>
              <label className="lg:w-[852px] lg:h-[110px] flex lg:flex-col lg:gap-[24px]">
                <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[200px] inline">
                  E-mail address
                </p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block lg:w-[852px] lg:h-[56px] rounded-[10px] border border-[#212121] lg:p-[16px] leading-[25.14px] text-[20px] font-merriweather font-normal text-[#212121]"
                />
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
                </p>
                <input
                  type="number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="block lg:w-[852px] lg:h-[56px] rounded-[10px] border border-[#212121] lg:p-[16px] leading-[25.14px] text-[20px] font-merriweather font-normal text-[#212121]"
                />
              </label>
              <label className="lg:w-[852px] lg:h-[110px] flex lg:flex-col lg:gap-[20px] z-0">
                <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[290px] inline">
                  Current Password
                </p>
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleInputChange}
                  className="block lg:w-[852px] lg:h-[56px] rounded-[10px] border border-[#212121] lg:p-[16px] leading-[25.14px] text-[30px] font-merriweather font-normal z-0 text-[#212121]"
                />
              </label>
              <label className="lg:w-[852px] lg:h-[110px] flex lg:flex-col lg:gap-[20px] z-0">
                <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[200px] inline">
                  New Password
                </p>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  className="block lg:w-[852px] lg:h-[56px] rounded-[10px] border border-[#212121] lg:p-[16px] leading-[25.14px] text-[30px] font-merriweather font-normal z-0 text-[#212121]"
                />
              </label>
              <label className="lg:w-[852px] lg:h-[110px] flex lg:flex-col lg:gap-[24px]">
                <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[200px] inline">
                  Birth Date
                </p>
                <input
                  type="text"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  className="block lg:w-[852px] lg:h-[56px] rounded-[10px] border border-[#212121] lg:p-[16px] leading-[25.14px] text-[20px] font-merriweather font-normal text-[#212121]"
                />
              </label>
              <button
                type="submit"
                className="lg:w-[184px] lg:h-[54px] mx-auto rounded-[10px] lg:py-[12px] lg:px-[6px] bg-[#240F6E] lg:mt-[8px]"
              >
                <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#FFFFFF] w-[176px] -mr-[15px]">
                  Save Changes
                </p>
              </button>
            </form>
          </div>
        )}
        {isApp && (
          <div className="flex flex-col gap-[40px] ">
            {applications &&
              applications.length > 0 &&
              applications.map((app) => (
                <AppHistoryCard key={app._id} app={app} />
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
