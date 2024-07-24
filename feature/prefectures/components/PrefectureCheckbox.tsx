import { useLoadingStateContext } from '@/feature/populations';
import { Prefecture } from '@/types';
import React from 'react'

interface PrefectureCheckboxProps {
    prefecture: Prefecture;
    selectedPrefectures: Prefecture[];
    togglePrefecture: (prefCode: Prefecture) => void;
}

const PrefectureCheckbox: React.FC<PrefectureCheckboxProps> = ({ prefecture, selectedPrefectures, togglePrefecture }) => {

    const checked = selectedPrefectures.includes(prefecture);
    const onChange = () => togglePrefecture(prefecture);
    const { isLoading } = useLoadingStateContext();


    return (
        <li
            className={`border-2 rounded-md py-1 px-6 transition-all cursor-pointer
            ${checked ? 'border-accent-01 bg-accent-01 bg-opacity-5 text-accent-01 hover:bg-opacity-10' : 'border-main-02 text-main-02 hover:bg-gray-100 hover:text-gray-500'}`}
            onClick={onChange}
        >
            <label className="flex items-center gap-2 cursor-pointer">
                {prefecture.prefName}
                <input
                    className='hidden'
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    disabled={isLoading}
                />
            </label>
        </li>
    )
}

export default PrefectureCheckbox
