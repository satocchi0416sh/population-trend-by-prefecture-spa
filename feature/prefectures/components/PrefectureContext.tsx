'use client'

import React, { createContext, useState, ReactNode } from 'react';
import { PrefectureContextType } from '@/types';

export const PrefectureContext = createContext<PrefectureContextType>({
    selectedPrefectures: [],
    togglePrefecture: () => { }
});

export const PrefectureProvider = ({ children }: { children: ReactNode }) => {
    const [selectedPrefectures, setSelectedPrefectures] = useState<number[]>([]);

    const togglePrefecture = (prefCode: number) => {
        setSelectedPrefectures((prev: number[]) =>
            prev.includes(prefCode)
                ? prev.filter(code => code !== prefCode)
                : [...prev, prefCode]
        );
    };

    return (
        <PrefectureContext.Provider value={{ selectedPrefectures, togglePrefecture }}>
            {children}
        </PrefectureContext.Provider>
    );
};

export default PrefectureContext;