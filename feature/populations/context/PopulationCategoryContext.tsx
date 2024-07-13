"use client";
import { PopulationCategoryContextType } from '@/types';
import React, { createContext, useState, ReactNode } from 'react';


export const PopulationCategoryContext = createContext<PopulationCategoryContextType | undefined>(undefined);

export const PopulationCategoryProvider = ({ children }: { children: ReactNode }) => {
    const populationCategories = ["総人口", "年少人口", "生産年齢人口", "老年人口"];
    const [selectedPopulationCategory, setSelectedPopulationCategory] = useState<string>("総人口");

    return (
        <PopulationCategoryContext.Provider value={{ populationCategories, selectedPopulationCategory, setSelectedPopulationCategory }}>
            {children}
        </PopulationCategoryContext.Provider>
    );
};

export default PopulationCategoryContext;