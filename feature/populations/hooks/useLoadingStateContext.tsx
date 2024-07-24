import { useContext } from 'react';
import { LoadingStateContext } from '..';
import { LoadingStateContextType } from '@/types';

const useLoadingStateContext = (): LoadingStateContextType => {
    const context = useContext(LoadingStateContext);
    if (!context) {
        throw new Error('usePopulationCategoryContext must be used within a PopulationCategoryProvider');
    }
    return context;
};

export default useLoadingStateContext;
