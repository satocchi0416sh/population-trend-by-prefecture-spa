import React from 'react';
import { SyncLoader } from 'react-spinners';

const LoadingSpinner = () => (
    <div className='flex justify-center items-center h-[500px]'>
        <SyncLoader color="#36d7b7" />
    </div>
);

export default LoadingSpinner;
