import {toast} from "react-hot-toast"

const usePostApplication = () => {
  const postApplication = async (data) => {
    try {
      const response = await fetch(
        "https://university-backend.vercel.app/api/application/post-app",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error);
      }
      toast.success(resData.message);
    } catch (error) {
      throw new Error(error);
    }
  };
  return { postApplication };
};

export default usePostApplication;
