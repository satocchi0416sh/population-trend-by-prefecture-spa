"use client";
import React from 'react';
import { usePrefectureContext } from '@/feature/prefectures';
import usePopulationData from '../hooks/usePopulationData';

const PopulationChart = () => {
    const { selectedPrefectures } = usePrefectureContext();
    const { populationData, error, loading } = usePopulationData(selectedPrefectures);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading population data.</p>;

    return (
        <div>
            <h2>Population Chart</h2>
            {populationData.length > 0 ? (
                populationData.map((data, index) => (
                    <div key={index}>
                        <h3>Prefecture Code: {selectedPrefectures[index]}</h3>
                        <ul>
                            {data.map((yearData) => (
                                <li key={yearData.year}>
                                    {yearData.year}: {yearData.value}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p>No prefectures selected</p>
            )}
        </div>
    );
};

export default PopulationChart;
