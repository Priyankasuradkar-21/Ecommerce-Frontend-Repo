import axios from "axios";

let authToken = localStorage.getItem("authToken")
  ? JSON.parse(localStorage.getItem("authToken"))
  : sessionStorage.getItem("authToken")
  ? JSON.parse(sessionStorage.getItem("authToken"))
  : "";

console.log('###########', process.env.BACKEND_URL)
const axiosInstance = axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: {
    Authorization: authToken ? authToken : "",
  },
});

axiosInstance.interceptors.request.use(
  function (req) {
    if (!authToken)
      authToken = localStorage.getItem("authToken")
        ? JSON.parse(localStorage.getItem("authToken"))
        : sessionStorage.getItem("authToken")
        ? JSON.parse(sessionStorage.getItem("authToken"))
        : "";
    req.headers.Authorization = authToken ? authToken : "";
    return req;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosInstance;