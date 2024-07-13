import { Prefecture } from '@/types';
import React from 'react'

interface PrefectureCheckboxProps {
    prefecture: Prefecture;
    selectedPrefectures: Prefecture[];
    togglePrefecture: (prefCode: Prefecture) => void;
}

const PrefectureCheckbox: React.FC<PrefectureCheckboxProps> = ({ prefecture, selectedPrefectures, togglePrefecture }) => {
    return (
        <li className="w-1/3">
            <label className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={selectedPrefectures.includes(prefecture)}
                    onChange={() => togglePrefecture(prefecture)}
                />
                {prefecture.prefName}
            </label>
        </li>
    )
}

export default PrefectureCheckbox