"use client";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { usePrefectureContext } from '@/feature/prefectures';
import { ErrorMessage, LoadingSpinner, useChartWidth, useMergedPopulationData, usePopulationCategoryContext, usePopulationData } from '..';
import { Chart } from '@/public';
import Image from 'next/image';

const PopulationChart = () => {
    const { selectedPrefectures } = usePrefectureContext();
    const { selectedPopulationCategory } = usePopulationCategoryContext();
    const { populationData, error, loading } = usePopulationData(selectedPrefectures);

    const { chartContainerRef, chartWidth } = useChartWidth();
    const mergedData = useMergedPopulationData({ populationData, selectedPrefectures });

    const getColorFromName = (name: string) => {
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        let color = '#';
        for (let i = 0; i < 3; i++) {
            const value = (hash >> (i * 8)) & 0xFF;
            color += value.toString(16).padStart(2, '0');
        }
        return color.replace(/^(#)(.{2})(.{2})(.{2})$/, (_, hash, r, g, b) => {
            const adjust = (c: string) => Math.max(0, Math.min(255, parseInt(c, 16) - 50)).toString(16).padStart(2, '0');
            return `${hash}${adjust(r)}${adjust(g)}${adjust(b)}`;
        });
    };

    return (
        <div className='bg-white mt-5 p-10 rounded-lg'>
            <h2 className='text-lg font-bold mb-5' ref={chartContainerRef}>{selectedPopulationCategory}</h2>
            {loading ? (
                <LoadingSpinner />
            ) : error ? (
                <ErrorMessage error={error} />
            ) : populationData.length > 0 ? (
                <LineChart width={chartWidth} height={500} data={mergedData}>
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
                            stroke={getColorFromName(prefecture.prefName)}
                            name={`${prefecture.prefName}`}
                        />
                    ))}
                </LineChart>
            ) : (
                <div className='flex flex-col items-center justify-center h-[500px]'>
                    <p>都道府県を選択してください</p>
                    <Image src={Chart} alt='Chart' width={500} height={500} />
                </div>
            )}
        </div>
    );
};

export default PopulationChart;