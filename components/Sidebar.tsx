import React from 'react'
import { PrefectureList } from '@/feature/prefectures'

const Sidebar = () => {
    return (
        <div className='w-1/4 min-w-[330px] border-r-2 border-gray-200 hidden md:block bg-white'>
            <div className='h-[calc(100vh-70px)] p-10 overflow-y-scroll '>
                <h2 className='text-xl font-bold mb-10'>都道府県</h2>
                <PrefectureList />
            </div>
        </div>
    )
}

export default Sidebar