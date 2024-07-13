"use client";
import { useEffect } from "react";
import useFetchPopulationData from "./useFetchPopulationData";
import { PopulationYearData } from "@/types";

const usePopulationData = (prefCodes: number[]) => {
    const { populationData, error, loading, requestPopulationData } = useFetchPopulationData();

    useEffect(() => {
        requestPopulationData(prefCodes);
    }, [prefCodes, requestPopulationData]);

    const selectedPopulationData = prefCodes.map(prefCode => {
        const result = populationData[prefCode];
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