import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const navigate = useNavigate()
  const login = async (data) => {
    try {
      const response = await fetch("https://university-backend.vercel.app/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (!response.ok) {
        return toast.error(resData.error);
      }
      toast.success(resData.message);
      navigate("/");
      window.location.reload();
    } catch (error) {
      throw new Error(error);
    }
  };
  return { login };
};

export default useLogin;
