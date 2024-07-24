"use client";

import { useState } from "react";
import { PopulationTabItem, SelectedItemIndicator, usePopulationCategory } from "..";

const PopulationCategory: React.FC = () => {
    const { populationCategories, selectedPopulationCategory, setSelectedPopulationCategory } = usePopulationCategory();
    const [selectedItem, setSelectedItem] = useState<HTMLDivElement | null>(null);

    const handleChange = (category: string) => {
        setSelectedPopulationCategory(category);
    };

    return (
        <div className='relative bg-[#EBF0F3] md:bg-white rounded-full md:rounded-lg overflow-hidden'>
            <SelectedItemIndicator selectedItem={selectedItem} />
            <div className='relative flex w-full justify-between md:justify-start z-10'>
                {populationCategories.map((category) => (
                    <PopulationTabItem
                        key={category}
                        category={category}
                        onChange={() => handleChange(category)}
                        selectedPopulationCategory={selectedPopulationCategory}
                        setSelectedItem={setSelectedItem}
                    />
                ))}
            </div>
        </div>
    );
};

export default PopulationCategory;