import { renderHook, act } from '@testing-library/react';
import useSelectedPrefectures from '../useSelectedPrefectures';

describe('useSelectedPrefecturesフック', () => {
    test('初期状態でselectedPrefecturesは空の配列である', () => {
        const { result } = renderHook(() => useSelectedPrefectures());

        expect(result.current.selectedPrefectures).toEqual([]);
    });

    test('togglePrefecture関数がprefCodeを追加する', () => {
        const { result } = renderHook(() => useSelectedPrefectures());

        act(() => {
            result.current.togglePrefecture(1);
        });

        expect(result.current.selectedPrefectures).toEqual([1]);
    });

    test('togglePrefecture関数が既存のprefCodeを削除する', () => {
        const { result } = renderHook(() => useSelectedPrefectures());

        act(() => {
            result.current.togglePrefecture(1);
        });

        act(() => {
            result.current.togglePrefecture(1);
        });

        expect(result.current.selectedPrefectures).toEqual([]);
    });

    test('togglePrefecture関数が複数のprefCodeを追加および削除する', () => {
        const { result } = renderHook(() => useSelectedPrefectures());

        act(() => {
            result.current.togglePrefecture(1);
            result.current.togglePrefecture(2);
        });

        expect(result.current.selectedPrefectures).toEqual([1, 2]);

        act(() => {
            result.current.togglePrefecture(1);
        });

        expect(result.current.selectedPrefectures).toEqual([2]);

        act(() => {
            result.current.togglePrefecture(3);
        });

        expect(result.current.selectedPrefectures).toEqual([2, 3]);
    });
});
