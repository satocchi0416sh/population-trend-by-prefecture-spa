import React from 'react'

interface PopulationTabItemProps {
    category: string;
    onChange: (category: string) => void;
    selectedPopulationCategory: string;
}

const PopulationTabItem: React.FC<PopulationTabItemProps> = ({ category, onChange, selectedPopulationCategory }) => {

    const selected = category === selectedPopulationCategory;

    return (
        <div className='flex items-center justify-between px-6 lg:px-8 pt-8 pb-3 bg-white text-center group hover:bg-gray-100 transition-all cursor-pointer'
            onClick={() => onChange(category)}>
            <p className={`lg:min-w-24 text-sm font-bold border-b-4 pb-5 ${selected ? 'border-accent-01 text-main-02' : 'border-transparent group-hover:border-gray-300'} transition-all`}>{category}</p>
        </div>
    )
}

export default PopulationTabItem