import React from "react";

const AppHistoryCard = ({ app }) => {
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };
  return (
    <div className="lg:w-[838px] lg:h-[240px] rounded-[10px] p-[16px] flex flex-row gap-[24px] bg-[#C8E1FC] ">
      <div className="w-[200px] h-[152px] my-[24px] rounded-[7px] ">
        <img
          src="/images/uni-1.svg"
          alt="uni"
          width={200}
          height={352}
          className="mx-auto my-[40px]"
        />
      </div>
      <div className="lg:w-[582px] lg:h-[208px] flex flex-col gap-[24px] ">
        <p className="w-full h-[80px] font-merriweather font-normal text-[32px] leading-[40.22px] text-[#240F6E] ">
          Astrakhan State Medical University (ASMU)
        </p>
        <p className="w-[577px] h-[40px] font-merriweather font-light text-[32px] leading-[40.22px] text-[#212121] ">
          You applied in 
        </p>
        <p className="w-[180px] h-[40px] font-merriweather font-normal text-[32px] leading-[40.22px] text-[#BDBDBD] ">
        {formatDate(app.createdAt)}
        </p>
      </div>
    </div>
  );
};

export default AppHistoryCard;
