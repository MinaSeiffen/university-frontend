import React from 'react';

const NextBackBtns = ({ step, handleNext, handleBack , isStepValid1 , isStepValid2 }) => {
  return (
    <div className={`flex lg:flex-row lg:w-[392px] lg:h-[54px] lg:gap-[24px] ${step !== 2 ? 'mx-auto' : ''}`}>
      {step === 2 && (
        <button onClick={handleBack} className={`lg:w-[184px] lg:h-[54px] rounded-[10px] lg:py-[12px] lg:px-[46px] border border-[#240F6E] bg-transparent`}>
          <p className={`font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[57px] lg:h-[30px] mx-auto my-auto `}>
            Back
          </p>
        </button>
      )}
      <button onClick={handleNext} className={`${(((isStepValid1 && !isStepValid2) && step === 1) || ((isStepValid1 && isStepValid2) && step === 2) || step === 3) ? 'cursor-pointer bg-[#240F6E] text-white' : 'cursor-not-allowed bg-[#E7E7E7] text-[#BDBDBD]'} lg:w-[184px] lg:h-[54px] rounded-[10px] ${step !== 2 ? 'mx-auto' : ''} lg:py-[12px] ${step === 3 ? 'lg:px-[16.5px]' : 'lg:px-[46px]'}  ${step === 3 ? 'bg-[#240F6E]' : ''} ${step === 1 ? 'mx-auto' : ''}`}>
        <p className={`font-merriweather font-normal text-[24px] leading-[30.17px] ${step === 3 ? 'text-white' : ''} ${step === 3? 'lg:w-[151px]' : 'lg:w-[57px]'}  lg:h-[30px] mx-auto my-auto `}>
          {step === 3 ? 'Universities' : 'Next'}
        </p>
      </button>
    </div>
  );
}

export default NextBackBtns;
