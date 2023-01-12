import axios, { AxiosInstance } from 'axios';

import { API_REQUEST_ERROR } from '@/common/constants/errorMessage';

import { handleResponseError } from './requestError';

axios.defaults.xsrfCookieName = 'CSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-CSRF-Token';
axios.defaults.withCredentials = true;

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
});

/* Axios の Response 時の Interceptor */
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // eslint-disable-next-line no-console
    console.log(error.response?.status);
    handleResponseError(API_REQUEST_ERROR);
  }
);

export default axios;
