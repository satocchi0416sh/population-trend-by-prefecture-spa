import axios, { AxiosRequestConfig } from 'axios';

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

interface apiRequestConfig extends AxiosRequestConfig { }

export const apiRequest = (config: apiRequestConfig) => {
    return apiClient(config);
};
