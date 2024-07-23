import { useMemo } from 'react';
import { Prefecture, PopulationYearData } from '@/types';

interface UseMergedPopulationDataProps {
    populationData: PopulationYearData[][];
    selectedPrefectures: Prefecture[];
}

const useMergedPopulationData = ({ populationData, selectedPrefectures }: UseMergedPopulationDataProps) => {
    return useMemo(() => {
        const mergedData: { [key: string]: number }[] = [];

        populationData.forEach((data, index) => {
            data.forEach((yearData: PopulationYearData) => {
                const existingEntry = mergedData.find(entry => entry.year === yearData.year);
                if (existingEntry) {
                    existingEntry[`prefecture_${selectedPrefectures[index].prefCode}`] = yearData.value;
                } else {
                    mergedData.push({
                        year: yearData.year,
                        [`prefecture_${selectedPrefectures[index].prefCode}`]: yearData.value
                    });
                }
            });
        });

        return mergedData;
    }, [populationData, selectedPrefectures]);
};

export default useMergedPopulationData;
