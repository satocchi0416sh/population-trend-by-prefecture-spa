import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { ReactNode } from 'react';
import { PrefectureProvider } from '../..';
import usePrefectureContext from '../usePrefectureContext';
import { Prefecture } from '../../../../types';

const Wrapper = ({ children }: { children: ReactNode }) => {
    return <PrefectureProvider>{children}</PrefectureProvider>;
};

describe('usePrefectureContextフック', () => {
    test('PrefectureProvider内で正しくコンテキストを取得する', () => {
        const { result } = renderHook(() => usePrefectureContext(), { wrapper: Wrapper });

        expect(result.current.selectedPrefectures).toEqual([]);
        expect(typeof result.current.togglePrefecture).toBe('function');
    });

    test('PrefectureProviderの外で使用するとエラーがスローされる', () => {
        try {
            renderHook(() => usePrefectureContext());
        } catch (error) {
            expect((error as Error).message).toBe('usePrefectureContext must be used within a PrefectureProvider');
        }
    });

    test('togglePrefecture関数が正しく動作する', () => {
        const { result } = renderHook(() => usePrefectureContext(), { wrapper: Wrapper });

        const testPrefecture: Prefecture = { prefCode: 1, prefName: '北海道' };

        act(() => {
            result.current.togglePrefecture(testPrefecture);
        });

        expect(result.current.selectedPrefectures).toEqual([testPrefecture]);

        act(() => {
            result.current.togglePrefecture(testPrefecture);
        });

        expect(result.current.selectedPrefectures).toEqual([]);
    });
});
