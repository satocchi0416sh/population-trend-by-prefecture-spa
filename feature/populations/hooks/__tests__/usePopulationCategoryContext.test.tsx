import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { ReactNode } from 'react';
import { PopulationCategoryProvider, usePopulationCategoryContext } from '../..';

const Wrapper = ({ children }: { children: ReactNode }) => {
    return <PopulationCategoryProvider>{children}</PopulationCategoryProvider>;
};

describe('usePopulationCategoryContextフック', () => {
    test('PopulationCategoryProvider内で正しくコンテキストを取得する', () => {
        const { result } = renderHook(() => usePopulationCategoryContext(), { wrapper: Wrapper });

        expect(result.current.populationCategories).toEqual(["総人口", "年少人口", "生産年齢人口", "老年人口"]);
        expect(typeof result.current.setSelectedPopulationCategory).toBe('function');
    });

    test('PopulationCategoryProviderの外で使用するとエラーがスローされる', () => {
        try {
            renderHook(() => usePopulationCategoryContext());
        } catch (error) {
            expect((error as Error).message).toBe('usePopulationCategoryContext must be used within a PopulationCategoryProvider');
        }
    });

    test('setSelectedPopulationCategory関数が正しく動作する', () => {
        const { result } = renderHook(() => usePopulationCategoryContext(), { wrapper: Wrapper });

        const testCategory = '総人口';

        act(() => {
            result.current.setSelectedPopulationCategory(testCategory);
        });

        expect(result.current.selectedPopulationCategory).toEqual(testCategory);
    });
});
