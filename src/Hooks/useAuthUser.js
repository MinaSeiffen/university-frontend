import { useState } from "react";

const useAuthUser = () => {
  const [authUser, setAuthUser] = useState(null);

  const getUser = async () => {
    try {
      const response = await fetch("https://university-backend-o4hq.onrender.com/api/user/", {
        method: "GET",
        credentials: "include",
      });
      const resData = await response.json();

      if (!response.ok) {
        throw new Error('Please login first');
      }
      setAuthUser(resData.userData);

    } catch (error) {
      throw new Error(error);
    }
  };

  return { getUser, authUser };
};

export default useAuthUser;
