import React from 'react'

const AppBar = () => {
    return (
        <>
            <div className="hidden md:block">
                <div className='px-10 py-5 border-b-2 border-gray-200'>
                    <h1 className='font-bold text-xl'>CensusFlow</h1>
                </div>
            </div>
            <div className="block md:hidden">
                MobileNavigation
            </div>
        </>
    )
}

export default AppBar