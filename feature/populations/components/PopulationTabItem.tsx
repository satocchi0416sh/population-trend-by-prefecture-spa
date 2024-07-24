'use client'

import React, { useEffect, useRef } from 'react'

interface PopulationTabItemProps {
    category: string;
    onChange: (category: string) => void;
    selectedPopulationCategory: string;
    setSelectedItem: (item: HTMLDivElement | null) => void;
}

const PopulationTabItem: React.FC<PopulationTabItemProps> = ({ category, onChange, selectedPopulationCategory, setSelectedItem }) => {

    const selected = category === selectedPopulationCategory;
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (category === "総人口") {
            setSelectedItem(ref.current);
        }
    }, []);

    return (
        <>
            <div className='hidden md:flex items-center justify-between px-6 lg:px-8 pt-8 pb-3 bg-white text-center group hover:bg-gray-100 transition-all cursor-pointer'
                onClick={() => onChange(category)}>
                <p className={`lg:min-w-24 text-sm font-bold border-b-4 pb-5 ${selected ? 'border-accent-01 text-main-02' : 'border-transparent group-hover:border-gray-300'} transition-all`}>{category}</p>
            </div>
            <div className='md:hidden py-3 px-3'
                onClick={() => {
                    onChange(category);
                    setSelectedItem(ref.current);
                }}
                ref={ref}
            >
                <p className={`text-sm font-bold transition-all ${selected ? 'text-white' : 'text-main-01'}`}>{category}</p>
            </div>
        </>
    )
}

export default PopulationTabItem