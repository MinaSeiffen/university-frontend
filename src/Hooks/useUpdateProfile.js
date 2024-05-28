import toast from "react-hot-toast";

const useUpdateProfile = () => {
  const updateProfile = async (formData) => {
    try {
      const response = await fetch(
        "https://university-backend-qw4f.onrender.com/api/user/update-profile",
        {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const resData = await response.json();

      if (!response.ok) {
        return toast.error(resData.error);
      }


      toast.success(resData.message);
      window.location.reload();
    } catch (error) {
      throw new Error(error);
    }
  };

  return { updateProfile };
};

export default useUpdateProfile;
