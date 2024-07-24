"use client";
import { useEffect } from "react";
import { PopulationYearData, Prefecture } from "@/types";
import { usePopulationCategoryContext, useFetchPopulationData } from "..";

const usePopulationData = (prefectures: Prefecture[]) => {
    const { populationData, error, loading, requestPopulationData } = useFetchPopulationData();
    const { selectedPopulationCategory } = usePopulationCategoryContext();

    useEffect(() => {
        requestPopulationData(prefectures);
    }, [prefectures, requestPopulationData]);

    const selectedPopulationData = prefectures.map(prefecture => {
        const result = populationData[prefecture.prefCode];
        if (!result) {
            return null;
        }
        const totalPopulationData = result.data.find(item => item.label === selectedPopulationCategory);
        if (!totalPopulationData) {
            return null;
        }
        return totalPopulationData.data;
    }).filter(Boolean) as PopulationYearData[][];

    return { populationData: selectedPopulationData, error, loading };
};

export default usePopulationData;