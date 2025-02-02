import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:5050/api/v1",
});

// Add Authorization header for all requests
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
