import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

const useSignup = () => {
  const navigate = useNavigate()
  const signUp = async (data) => {
    try {
      const response = await fetch("https://university-backend-qw4f.onrender.com/api/auth/signup", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          phoneNumber: data.phoneNumber,
          firstName: data.firstName,
          lastName: data.lastName,
          password: data.password,
          birthDate: data.birthDate,
        }),
      });
      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error);
      }
      toast.success(resData.message);
      navigate('/')
      window.location.reload()
    } catch (error) {
      throw new Error(error);
    }
  };

  return { signUp };
};

export default useSignup;
