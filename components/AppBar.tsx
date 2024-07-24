import React from 'react';

const AppBar = () => {
    return (
        <div>
            <div className="px-10 py-5 border-b-2 border-gray-200 hidden md:block bg-white">
                <h1 className="font-bold text-xl">CensusFlow</h1>
            </div>
            <div className="px-10 py-5 flex justify-center items-center bg-base-01 md:hidden">
                <h1 className="font-bold text-xl">CensusFlow</h1>
            </div>
        </div>
    );
}

export default AppBar;
