import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const Api = axios.create({
  baseURL: 'http://localhost:3333',
  headers,
});

Api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    if (config.headers) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});



export default Api;
