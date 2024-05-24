import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useLogin from "../../Hooks/useLogin";

const Login = () => {
    const {login} = useLogin()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    login(data);
  };
  return (
    <>
      <div className="lg:w-full lg:h-[1024px] bg-[#C8E1FC] flex flex-col lg:gap-[24px]">
        <div className="lg:w-[370px] lg:h-[192px] lg:mt-[100px] lg:mx-auto ">
          <img
            src="/images/signup-logo.svg"
            alt="logo"
            width={370}
            height={192}
          />
        </div>
        <div className="bg-[#FFFFFF] lg:w-[996px] lg:h-[507px] lg:mx-auto border border-[#240F6E] rounded-[10px] lg:p-[72px] ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col lg:gap-[24px]"
          >
            <label className="lg:w-[852px] lg:h-[110px] flex lg:flex-col lg:gap-[24px]">
              <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[200px] inline">
                E-mail address
                <span className="text-[#D60000] font-merriweather font-normal text-[24px] leading-[30.17px]">
                  *
                </span>
              </p>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="block lg:w-[852px] lg:h-[56px] rounded-[10px] border border-[#212121] lg:p-[16px] leading-[25.14px] text-[20px] font-merriweather font-normal text-[#212121]"
              />
              {errors.email && (
                <p className="-mt-[20px] text-[13px] text-red-500">
                  {errors.email.message}
                </p>
              )}
            </label>
            <label className="lg:w-[852px] lg:h-[110px] flex lg:flex-col lg:gap-[20px] z-0">
              <p className="font-merriweather font-normal text-[24px] leading-[30.17px] text-[#240F6E] lg:w-[200px] inline">
                Password
                <span className="text-[#D60000] font-merriweather font-normal text-[24px] leading-[30.17px]">
                  *
                </span>
              </p>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",})
                  }
                className="block lg:w-[852px] lg:h-[56px] rounded-[10px] border border-[#212121] lg:p-[16px] leading-[25.14px] text-[30px] font-merriweather font-normal z-0 text-[#212121]"
              />

              {errors.password && (
                <p className="-mt-[20px] text-[13px] text-red-500">
                  {errors.password.message}
                </p>
              )}
            </label>
            <button
              type="submit"
              className="lg:w-[184px] lg:h-[54px] mx-auto rounded-[10px] lg:py-[12px] lg:px-[6px] bg-[#240F6E] lg:mt-[31px]"
            >
              <p className="lg:w-[85px] lg:h-[30px] font-merriweather font-normal text-[24px] leading-[30.17px] mx-auto text-[#FFFFFF] w-[176px]">
                Log In
              </p>
            </button>
            <p className="w-[330px] h-[60px] font-merriweather font-normal text-[20px] text-[#240F6E] mx-auto">Have no account? <Link to='/sign-up'><span className="font-bold text-black underline">Create Account</span></Link></p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
