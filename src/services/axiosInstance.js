import axios from "axios";

if (import.meta.env.DEV) {
  console.log("Hello From DEV Mode");
} else {
  console.log("Hello From PRO Mode");
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000,
  headers: { "X-Custom-Header": "Hamada" },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    console.log("🚀 ~ config:", config);
    // Example: Get token from localStorage or your auth state
    const token = localStorage.getItem("authToken") || "HamadaToken";
    console.log("🚀 ~ token:", token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    console.log("🚀 ~ response:", response);
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
