import { useContext } from 'react';
import { PopulationCategoryContext } from '..';
import { PopulationCategoryContextType } from '@/types';

const usePopulationCategoryContext = (): PopulationCategoryContextType => {
    const context = useContext(PopulationCategoryContext);
    if (!context) {
        throw new Error('usePopulationCategoryContext must be used within a PopulationCategoryProvider');
    }
    return context;
};

export default usePopulationCategoryContext;
