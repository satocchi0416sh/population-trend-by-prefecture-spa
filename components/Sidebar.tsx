import React from 'react'
import { PrefectureList } from '@/feature/prefectures'

const Sidebar = () => {
    return (
        <div className='w-1/4 min-w-[310px] border-r-2 border-gray-200 p-10 overflow-y-auto hidden md:block bg-white'>
            <h2 className='text-xl font-bold mb-10'>都道府県</h2>
            <PrefectureList />
        </div>
    )
}

export default Sidebar