import axios from "axios";

// Create an Axios instance
const Axios = axios.create({
  baseURL: "http://localhost:5050", // Replace with your API base URL
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
Axios.interceptors.request.use(
  (config) => {
    // Add Authorization token to headers
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Add a response interceptor
Axios.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response;
  },
  (error) => {
    // Handle response errors
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
      console.error("Unauthorized! Redirecting to login...");
      window.location.href = "/login"; // Adjust the route as needed
    }
    return Promise.reject(error);
  }
);

export default Axios;
