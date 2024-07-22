"use client";
import React, { useRef, useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { SyncLoader } from 'react-spinners';
import { usePrefectureContext } from '@/feature/prefectures';
import { usePopulationCategoryContext, usePopulationData } from '..';
import { Chart } from '@/public';
import Image from 'next/image';

const PopulationChart = () => {
    const { selectedPrefectures } = usePrefectureContext();
    const { selectedPopulationCategory } = usePopulationCategoryContext();
    const { populationData, error, loading } = usePopulationData(selectedPrefectures);

    const chartContainerRef = useRef<HTMLDivElement>(null);
    const [chartWidth, setChartWidth] = useState(0);

    useEffect(() => {
        const updateChartWidth = () => {
            if (chartContainerRef.current) {
                setChartWidth(chartContainerRef.current.clientWidth);
            }
        };

        updateChartWidth();
        window.addEventListener('resize', updateChartWidth);

        return () => {
            window.removeEventListener('resize', updateChartWidth);
        };
    }, []);

    const mergedData: { year: number;[key: string]: number }[] = [];

    populationData.forEach((data, index) => {
        data.forEach((yearData) => {
            const existingEntry = mergedData.find(entry => entry.year === yearData.year);
            if (existingEntry) {
                (existingEntry as any)[`prefecture_${selectedPrefectures[index].prefCode}`] = yearData.value;
            } else {
                mergedData.push({
                    year: yearData.year,
                    [`prefecture_${selectedPrefectures[index].prefCode}`]: yearData.value
                } as any);
            }
        });
    });

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

    const errorMessage = () => {
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    return '都道府県を選択してください';
                case 404:
                    return 'データが見つかりませんでした';
                default:
                    return 'エラーが発生しました';
            }
        }
        return 'エラーが発生しました';
    }

    return (
        <div className='bg-white mt-5 p-10 rounded-lg'>
            <h2 className='text-lg font-bold mb-5' ref={chartContainerRef}>{selectedPopulationCategory}</h2>
            {loading ? (
                <div className='flex justify-center items-center h-[500px]'>
                    <SyncLoader color="#36d7b7" />
                </div>
            ) : error ? (
                <p>{errorMessage()}</p>
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
                            name={`Prefecture ${prefecture.prefName}`}
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