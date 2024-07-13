'use client'

import React, { createContext, useState, ReactNode } from 'react';
import { Prefecture, PrefectureContextType } from '@/types';

export const PrefectureContext = createContext<PrefectureContextType>({
    selectedPrefectures: [],
    togglePrefecture: () => { }
});

export const PrefectureProvider = ({ children }: { children: ReactNode }) => {
    const [selectedPrefectures, setSelectedPrefectures] = useState<Prefecture[]>([]);

    const togglePrefecture = (prefCode: Prefecture) => {
        setSelectedPrefectures((prev: Prefecture[]) =>
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