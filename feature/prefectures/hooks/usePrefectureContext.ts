import { useContext } from 'react';
import { PrefectureContext } from '..';
import { PrefectureContextType } from '@/types';

const usePrefectureContext = (): PrefectureContextType => {
    const context = useContext(PrefectureContext);
    if (!context) {
        throw new Error('usePrefectureContext must be used within a PrefectureProvider');
    }
    return context;
};

export default usePrefectureContext;
