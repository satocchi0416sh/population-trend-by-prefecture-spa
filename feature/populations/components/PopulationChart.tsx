"use client";
import React from 'react';
import { usePrefectureContext } from '@/feature/prefectures';
import usePopulationData from '../hooks/usePopulationData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const PopulationChart = () => {
    const { selectedPrefectures } = usePrefectureContext();
    const { populationData, error, loading } = usePopulationData(selectedPrefectures);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading population data.</p>;

    const mergedData: { year: number;[key: string]: number }[] = [];
    populationData.forEach((data, index) => {
        data.forEach((yearData) => {
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

    return (
        <div>
            <h2>Population Chart</h2>
            {populationData.length > 0 ? (
                <LineChart width={500} height={300} data={mergedData}>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    {selectedPrefectures.map((prefecture) => (
                        <Line
                            key={prefecture.prefCode}
                            type="monotone"
                            dataKey={`prefecture_${prefecture.prefCode}`}
                            stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
                            name={`Prefecture ${prefecture.prefName}`}
                        />
                    ))}
                </LineChart>
            ) : (
                <p>No prefectures selected</p>
            )}
        </div>
    );
};

export default PopulationChart;