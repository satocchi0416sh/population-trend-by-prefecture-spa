import React from 'react';

const SkeletonLoader: React.FC = () => {
    return (
        <li className="border-2 rounded-md py-1 px-6 transition-all bg-gray-200 animate-pulse">
            <p>{"\u3000\u3000\u3000"}</p>
        </li>
    );
}

export default SkeletonLoader;
