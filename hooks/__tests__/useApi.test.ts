import { renderHook, waitFor } from '@testing-library/react';
import { act } from 'react';
import useApi from '../useApi';
import { apiRequest } from '../../utils/apiClient';
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

jest.mock('../../utils/apiClient');
const mockedApiRequest = apiRequest as jest.MockedFunction<typeof apiRequest>;

describe('useApiフック', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('データの取得に成功する場合', async () => {
        const mockData = { data: 'test data' };
        const mockResponse: AxiosResponse = {
            data: mockData,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {} as InternalAxiosRequestConfig,
        };

        mockedApiRequest.mockResolvedValueOnce(mockResponse);

        const { result } = renderHook(() => useApi());

        await act(async () => {
            result.current.refetch('/test-endpoint');
        });

        await waitFor(() => expect(result.current.loading).toBe(false));

        expect(result.current.data).toEqual(mockData);
        expect(result.current.error).toBeNull();
        expect(result.current.loading).toBe(false);
    });

    test('エラーを処理する場合', async () => {
        const mockError: AxiosError = {
            isAxiosError: true,
            toJSON: () => ({ message: 'test error' }),
            name: 'AxiosError',
            message: 'test error',
            config: {} as InternalAxiosRequestConfig,
            response: {
                data: {},
                status: 500,
                statusText: 'Internal Server Error',
                headers: {},
                config: {} as InternalAxiosRequestConfig,
            },
            code: '500',
        };

        mockedApiRequest.mockRejectedValueOnce(mockError);

        const { result } = renderHook(() => useApi());

        await act(async () => {
            result.current.refetch('/test-endpoint');
        });

        await waitFor(() => expect(result.current.loading).toBe(false));

        expect(result.current.data).toBeNull();
        expect(result.current.error).toEqual(mockError);
        expect(result.current.loading).toBe(false);
    });
});
