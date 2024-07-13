"use client"
import { usePrefectureContext } from '@/feature/prefectures';
import React from 'react'

const PopulationChart: React.FC = () => {
    const { selectedPrefectures } = usePrefectureContext();

    return (
        <div>
            {selectedPrefectures.map((prefCode) => (
                <div key={prefCode}>
                    <h1>{prefCode}</h1>
                </div>
            ))}
        </div>
    )
}

export default PopulationChart