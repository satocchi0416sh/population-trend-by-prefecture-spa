import { renderHook, waitFor } from '@testing-library/react';
import { act } from 'react';
import usePrefectures from '../../hooks/usePrefectures';
import useApi from '../../../../hooks/useApi';
import { Prefecture } from '../../../../types';
import { AxiosError } from 'axios';
import { ErrorResponse } from '../../../../types';

jest.mock('../../../../hooks/useApi');
const mockedUseApi = useApi as jest.MockedFunction<typeof useApi>;

describe('usePrefecturesフック', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('初回レンダリング時、都道府県データが正常に取得される', async () => {
        const mockData = { result: [{ prefCode: 1, prefName: '北海道' }] as Prefecture[] };
        mockedUseApi.mockReturnValue({
            data: mockData,
            error: null,
            loading: false,
            refetch: jest.fn()
        });

        const { result } = renderHook(() => usePrefectures());

        await waitFor(() => expect(result.current.prefectures).toEqual(mockData.result));
        expect(result.current.error).toBeNull();
        expect(result.current.loading).toBe(false);
    });

    test('データ取得時にエラーが発生する場合、エラーステートが設定される', async () => {
        const mockError = new AxiosError<ErrorResponse>('APIエラー');
        mockedUseApi.mockReturnValue({
            data: null,
            error: mockError,
            loading: false,
            refetch: jest.fn()
        });

        const { result } = renderHook(() => usePrefectures());

        await waitFor(() => expect(result.current.error).toEqual(mockError));
        expect(result.current.prefectures).toEqual([]);
        expect(result.current.loading).toBe(false);
    });

    test('データ取得中はローディングステートがtrueになる', async () => {
        mockedUseApi.mockReturnValue({
            data: null,
            error: null,
            loading: true,
            refetch: jest.fn()
        });

        const { result } = renderHook(() => usePrefectures());

        await waitFor(() => expect(result.current.loading).toBe(true));
        expect(result.current.prefectures).toEqual([]);
        expect(result.current.error).toBeNull();
    });

    test('fetchPrefectures関数が呼ばれると、refetchが呼ばれる', async () => {
        const refetchMock = jest.fn();
        mockedUseApi.mockReturnValue({
            data: null,
            error: null,
            loading: false,
            refetch: refetchMock
        });

        const { result } = renderHook(() => usePrefectures());

        act(() => {
            result.current.fetchPrefectures();
        });

        expect(refetchMock).toHaveBeenCalledWith('/prefectures', {
            headers: {
                'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY
            }
        });
    });
});
