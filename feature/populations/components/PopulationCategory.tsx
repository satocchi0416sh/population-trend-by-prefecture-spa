"use client";
import React from 'react'
import { usePopulationCategory } from '..';

const PopulationCategory = () => {

    const { populationCategories, selectedPopulationCategory, setSelectedPopulationCategory } = usePopulationCategory();

    return (
        <div>
            <select value={selectedPopulationCategory} onChange={(e) => setSelectedPopulationCategory(e.target.value)}>
                {populationCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
        </div>
    )
}

export default PopulationCategory