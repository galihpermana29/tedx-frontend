import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface ApiConfig extends AxiosRequestConfig {
  // Add any additional configuration properties specific to your API
}

const createAPI = (
  baseURL: string = 'https://betedx.adityaariizkyy.my.id/api/v1',
  config: ApiConfig = {}
): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL,
    ...config,
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },

    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

const api = createAPI();

export default api;
