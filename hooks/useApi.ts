import { useState, useCallback } from 'react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { apiRequest } from '@/utils/apiClient';

interface UseApiReturnType {
    data: any;
    error: AxiosError<ErrorResponse> | null;
    loading: boolean;
    refetch: (endpoint: string, options?: AxiosRequestConfig, withCredentials?: boolean) => Promise<void>;
}

interface ErrorResponse {
    message: string;
    statusCode: number;
    error?: string;
    errors?: string[];
}

const useApi = (): UseApiReturnType => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<AxiosError<ErrorResponse> | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const refetch = useCallback(async (endpoint: string, options: AxiosRequestConfig = {}) => {
        setLoading(true);
        try {
            const response = await apiRequest({
                url: endpoint,
                ...options
            });
            setData(response.data);
            setError(null);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err);
            } else {
                setError(null);
            }
        } finally {
            setLoading(false);
        }
    }, []);

    return { data, error, loading, refetch };
};

export default useApi;
