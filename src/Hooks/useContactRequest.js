import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

const useContactRequest = () => {
    const navigate = useNavigate()
  const contactRequest = async (data) => {
    try {
      const response = await fetch(
        "https://university-backend-qw4f.onrender.com/api/contact/request",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

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
      throw new Error(error);
    }
  };

  return { contactRequest };
};

export default useContactRequest;
