import axios, { AxiosInstance } from 'axios';

import { API_REQUEST_ERROR } from '@/common/constants/errorMessage';
import { API_ENDPOINT } from '@/common/constants/path';
import { ROOT_URL } from '@/common/constants/url';

import { handleResponseError } from './requestError';

axios.defaults.xsrfCookieName = 'CSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-CSRF-Token';
axios.defaults.withCredentials = true;

/* Axios の Response 時の Interceptor */
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // eslint-disable-next-line no-console
    console.log(error.response?.status);
    handleResponseError(API_REQUEST_ERROR);
  }
);

// HACK: axiosをaxiosInstanceに変更する。
export const client: AxiosInstance = axios.create({
  baseURL: `${ROOT_URL}/${API_ENDPOINT}/`,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
});

export default axios;
