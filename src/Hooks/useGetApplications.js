import { useState } from "react";

const useGetApplications = () => {
    const [applications, setApplications] = useState();
    const getApplications = async ()=>{
        try {
            const response = await fetch('http://localhost:3000/api/application/all-apps' ,{
            method: 'GET',
            credentials: 'include',
        })
        const resData = await response.json();

        if (!response.ok) {
            return toast.error(resData.error);
        }
        setApplications(resData.applications)

        } catch (error) {
            throw new Error(error);
        }
    }
  return {getApplications , applications}
}

export default useGetApplications