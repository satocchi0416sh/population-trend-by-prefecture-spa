"use client";
import { useEffect } from "react";
import useFetchPopulationData from "./useFetchPopulationData";
import { PopulationYearData, Prefecture } from "@/types";

const usePopulationData = (prefectures: Prefecture[]) => {
    const { populationData, error, loading, requestPopulationData } = useFetchPopulationData();

    useEffect(() => {
        requestPopulationData(prefectures);
    }, [prefectures, requestPopulationData]);

    const selectedPopulationData = prefectures.map(prefecture => {
        const result = populationData[prefecture.prefCode];
        if (!result) {
            return null;
        }
        const totalPopulationData = result.data.find(item => item.label === "総人口");
        if (!totalPopulationData) {
            return null;
        }
        return totalPopulationData.data;
    }).filter(Boolean) as PopulationYearData[][];

    return { populationData: selectedPopulationData, error, loading };
};

export default usePopulationData;