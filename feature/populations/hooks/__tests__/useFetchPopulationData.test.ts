import { renderHook, waitFor } from '@testing-library/react';
import { act } from 'react';
import useFetchPopulationData from '../useFetchPopulationData';
import useApi from '../../../../hooks/useApi';
import { ErrorResponse, PopulationResponse, Prefecture } from '../../../../types';
import { AxiosError, InternalAxiosRequestConfig } from 'axios';

jest.mock('../../../../hooks/useApi');
const mockedUseApi = useApi as jest.MockedFunction<typeof useApi>;

describe('useFetchPopulationDataフック', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const mockPopulationResponse: PopulationResponse = {
        message: null,
        result: {
            boundaryYear: 2020,
            data: [
                {
                    label: "総人口",
                    data: [
                        { year: 1960, value: 5000000 },
                        { year: 1970, value: 6000000 },
                        { year: 1980, value: 7000000 },
                        { year: 1990, value: 8000000 },
                        { year: 2000, value: 9000000 },
                        { year: 2010, value: 9500000 },
                        { year: 2020, value: 9800000 }
                    ]
                },
                {
                    label: "年少人口",
                    data: [
                        { year: 1960, value: 1000000 },
                        { year: 1970, value: 1200000 },
                        { year: 1980, value: 1400000 },
                        { year: 1990, value: 1600000 },
                        { year: 2000, value: 1800000 },
                        { year: 2010, value: 1900000 },
                        { year: 2020, value: 2000000 }
                    ]
                }
            ]
        }
    };

    test('データ取得に成功すると、populationDataが更新される', async () => {
        const refetchMock = jest.fn().mockImplementation(() => {
            mockedUseApi.mockReturnValueOnce({
                data: mockPopulationResponse,
                error: null,
                loading: false,
                refetch: refetchMock
            });
        });

        mockedUseApi.mockReturnValue({
            data: null,
            error: null,
            loading: false,
            refetch: refetchMock
        });

        const { result } = renderHook(() => useFetchPopulationData());

        act(() => {
            result.current.requestPopulationData([{ prefCode: 1, prefName: '北海道' }] as Prefecture[]);
        });

        await waitFor(() => expect(result.current.populationData[1]).toEqual(mockPopulationResponse.result));
        expect(result.current.error).toBeNull();
        expect(result.current.loading).toBe(false);
    });

    test('データ取得時にエラーが発生すると、エラーステートが設定される', async () => {
        const mockError = new AxiosError<ErrorResponse>('APIエラー');
        mockedUseApi.mockReturnValue({
            data: null,
            error: mockError,
            loading: false,
            refetch: jest.fn()
        });

        const { result } = renderHook(() => useFetchPopulationData());

        act(() => {
            result.current.requestPopulationData([{ prefCode: 1, prefName: '北海道' }] as Prefecture[]);
        });

        await waitFor(() => expect(result.current.error).toEqual(mockError));
        expect(result.current.populationData).toEqual({});
        expect(result.current.loading).toBe(false);
    });

    test('データ取得中はローディングステートがtrueになる', async () => {
        mockedUseApi.mockReturnValue({
            data: null,
            error: null,
            loading: true,
            refetch: jest.fn()
        });

        const { result } = renderHook(() => useFetchPopulationData());

        act(() => {
            result.current.requestPopulationData([{ prefCode: 1, prefName: '北海道' }] as Prefecture[]);
        });

        await waitFor(() => expect(result.current.loading).toBe(true));
        expect(result.current.populationData).toEqual({});
        expect(result.current.error).toBeNull();
    });

    test('fetchPopulationData関数が呼ばれると、refetchが呼ばれる', async () => {
        const refetchMock = jest.fn();
        mockedUseApi.mockReturnValue({
            data: null,
            error: null,
            loading: false,
            refetch: refetchMock
        });

        const { result } = renderHook(() => useFetchPopulationData());

        act(() => {
            result.current.requestPopulationData([{ prefCode: 1, prefName: '北海道' }] as Prefecture[]);
        });

        expect(refetchMock).toHaveBeenCalledWith('/population/composition/perYear?prefCode=1&cityCode=-', {
            headers: {
                'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY
            }
        });
    });
});
