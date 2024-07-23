"use client";

import { useRef, useState, useEffect } from 'react';

const useChartWidth = () => {
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

    return { chartContainerRef, chartWidth };
};

export default useChartWidth;
