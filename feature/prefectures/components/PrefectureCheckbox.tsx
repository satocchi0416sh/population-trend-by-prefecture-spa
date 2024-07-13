import React from 'react'

interface PrefectureCheckboxProps {
    prefCode: number;
    prefName: string;
    selectedPrefectures: number[];
    togglePrefecture: (prefCode: number) => void;
}

const PrefectureCheckbox: React.FC<PrefectureCheckboxProps> = ({ prefCode, prefName, selectedPrefectures, togglePrefecture }) => {
    return (
        <li className="w-1/3">
            <label className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={selectedPrefectures.includes(prefCode)}
                    onChange={() => togglePrefecture(prefCode)}
                />
                {prefName}
            </label>
        </li>
    )
}

export default PrefectureCheckbox