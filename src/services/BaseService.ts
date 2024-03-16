import axios, { AxiosResponse, AxiosError } from 'axios';

const baseURL = 'https://rimac-front-end-challenge.netlify.app/api/';

const axiosInstance = axios.create({
    baseURL,
});

const setupInterceptors = () => {

    axiosInstance.interceptors.response.use(
        (response: AxiosResponse) => {
            return response;
        },
        (error: AxiosError) => {
            return Promise.reject(error);
        }
    );
};

setupInterceptors();

export default axiosInstance;
