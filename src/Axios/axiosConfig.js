import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://university-backend-qw4f.onrender.com',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export default axiosInstance;
