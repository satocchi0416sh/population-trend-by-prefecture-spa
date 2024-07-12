import React from 'react'

interface PrefectureCheckboxProps {
    prefCode: number;
    prefName: string;
    selectedPrefectures: number[];
    togglePrefecture: (prefCode: number) => void;
}

const PrefectureCheckbox: React.FC<PrefectureCheckboxProps> = ({ prefCode, prefName, selectedPrefectures, togglePrefecture }) => {
    return (
        <li>
            <label>
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