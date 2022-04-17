import axios from "axios";
// import router from "@/router";

const requestAxios = axios.create({
  // baseURL: 'https://192.168.191.74:44329'
  // baseURL: 'https://alashpro.kz:10100/swagger/index.html'
  // baseURL: 'https://alashpro.kz:10100'
});

// ----------------------------------------

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default requestAxios;
