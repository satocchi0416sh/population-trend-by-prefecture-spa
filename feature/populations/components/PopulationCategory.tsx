"use client";
import React from 'react'
import { PopulationTabItem, usePopulationCategory } from '..';

const PopulationCategory = () => {

    const { populationCategories, selectedPopulationCategory, setSelectedPopulationCategory } = usePopulationCategory();

    const handleChange = (category: string) => {
        setSelectedPopulationCategory(category);
    }

    return (
        <div className='flex w-full bg-white rounded-lg overflow-hidden'>
            {populationCategories.map((category) => (
                <PopulationTabItem key={category} category={category} onChange={() => handleChange(category)} selectedPopulationCategory={selectedPopulationCategory} />
            ))}
            {/* <select value={selectedPopulationCategory} onChange={(e) => setSelectedPopulationCategory(e.target.value)}>
                {populationCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select> */}
        </div>
    )
}

export default PopulationCategory