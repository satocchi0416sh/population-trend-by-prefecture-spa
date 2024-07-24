"use client";
import { useState } from "react";

const useSelectedPrefectures = () => {
    const [selectedPrefectures, setSelectedPrefectures] = useState<number[]>([]);

    const togglePrefecture = (prefCode: number) => {
        setSelectedPrefectures(prev =>
            prev.includes(prefCode)
                ? prev.filter(code => code !== prefCode)
                : [...prev, prefCode]
        );
    };

    return { selectedPrefectures, togglePrefecture };
};

export default useSelectedPrefectures;