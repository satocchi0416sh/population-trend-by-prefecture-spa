import { renderHook } from '@testing-library/react';
import usePopulationData from '../usePopulationData';
import { useFetchPopulationData, usePopulationCategoryContext } from '../..';
import { Prefecture, PopulationYearData, PopulationCategoryContextType, ErrorResponse } from '../../../../types';
import { AxiosError } from 'axios';

jest.mock('../..');
const mockedUseFetchPopulationData = useFetchPopulationData as jest.MockedFunction<typeof useFetchPopulationData>;
const mockedUsePopulationCategoryContext = usePopulationCategoryContext as jest.MockedFunction<typeof usePopulationCategoryContext>;

describe('usePopulationDataフック', () => {
    const mockPrefectures: Prefecture[] = [
        { prefCode: 1, prefName: '北海道' },
        { prefCode: 2, prefName: '青森県' }
    ];

    const mockPopulationData = {
        1: {
            boundaryYear: 2020,
            data: [
                {
                    label: '総人口',
                    data: [
                        { year: 2000, value: 1000000 },
                        { year: 2005, value: 1050000 }
                    ]
                }
            ]
        },
        2: {
            boundaryYear: 2020,
            data: [
                {
                    label: '総人口',
                    data: [
                        { year: 2000, value: 500000 },
                        { year: 2005, value: 510000 }
                    ]
                }
            ]
        }
    };

    beforeEach(() => {
        jest.clearAllMocks();
        mockedUseFetchPopulationData.mockReturnValue({
            populationData: mockPopulationData,
            error: null,
            loading: false,
            requestPopulationData: jest.fn()
        });
        mockedUsePopulationCategoryContext.mockReturnValue({
            selectedPopulationCategory: '総人口',
            populationCategories: ['総人口', '年少人口', '生産年齢人口', '老年人口'],
            setSelectedPopulationCategory: jest.fn()
        } as PopulationCategoryContextType);
    });

    test('データが正しく取得される場合', () => {
        const { result } = renderHook(() => usePopulationData(mockPrefectures));

        expect(result.current.populationData).toEqual([
            [
                { year: 2000, value: 1000000 },
                { year: 2005, value: 1050000 }
            ],
            [
                { year: 2000, value: 500000 },
                { year: 2005, value: 510000 }
            ]
        ]);
        expect(result.current.error).toBeNull();
        expect(result.current.loading).toBe(false);
    });

    test('エラーが発生する場合', () => {
        const mockError = new AxiosError<ErrorResponse>('APIエラー');
        mockedUseFetchPopulationData.mockReturnValue({
            populationData: {},
            error: mockError,
            loading: false,
            requestPopulationData: jest.fn()
        });

        const { result } = renderHook(() => usePopulationData(mockPrefectures));

        expect(result.current.populationData).toEqual([]);
        expect(result.current.error).toEqual(mockError);
        expect(result.current.loading).toBe(false);
    });

    test('データ取得中はローディングステートがtrueになる', () => {
        mockedUseFetchPopulationData.mockReturnValue({
            populationData: {},
            error: null,
            loading: true,
            requestPopulationData: jest.fn()
        });

        const { result } = renderHook(() => usePopulationData(mockPrefectures));

        expect(result.current.populationData).toEqual([]);
        expect(result.current.error).toBeNull();
        expect(result.current.loading).toBe(true);
    });

    test('requestPopulationData関数が正しく呼び出される', () => {
        const requestPopulationDataMock = jest.fn();
        mockedUseFetchPopulationData.mockReturnValue({
            populationData: {},
            error: null,
            loading: false,
            requestPopulationData: requestPopulationDataMock
        });

        renderHook(() => usePopulationData(mockPrefectures));

        expect(requestPopulationDataMock).toHaveBeenCalledWith(mockPrefectures);
    });

    test('選択された人口カテゴリに応じたデータが正しく返される', () => {
        mockedUsePopulationCategoryContext.mockReturnValue({
            selectedPopulationCategory: '別のカテゴリ',
            populationCategories: ['総人口', '年少人口', '生産年齢人口', '老年人口'],
            setSelectedPopulationCategory: jest.fn()
        } as PopulationCategoryContextType);

        const { result } = renderHook(() => usePopulationData(mockPrefectures));

        expect(result.current.populationData).toEqual([]);
        expect(result.current.error).toBeNull();
        expect(result.current.loading).toBe(false);
    });
});
