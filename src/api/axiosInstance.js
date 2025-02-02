import axios from "axios";
// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:5050/api/v1",
  withCredentials: true, // কুকি পাঠানোর জন্য
});

// Add Authorization header for all requests
// axiosInstance.js
axiosInstance.interceptors.request.use((config) => {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("accessToken="))
    ?.split("=")[1];
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
