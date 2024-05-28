import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const navigate = useNavigate()
  const logout = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      const resData = await response.json();

      if (!response.ok) {
        return toast.error(resData.error);
      }
      toast.success(resData.message);
      navigate("/");
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } catch (error) {
        throw new Error(error)
    }
  };
  return {logout}
};

export default useLogout;
