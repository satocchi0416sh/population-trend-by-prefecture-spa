"use client"
import Image from 'next/image'
import React from 'react'
import { PrefectureList } from '@/feature/prefectures'
import { ChevronLeft } from '@/public'

interface BottomDrawerProps {
    isOpen: boolean
    handleChange: () => void
}

const BottomDrawer: React.FC<BottomDrawerProps> = ({ isOpen, handleChange }) => {

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed top-0 h-full w-full bg-black transition-opacity duration-300 z-20 ${isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
                onClick={handleChange}
            ></div>

            {/* Drawer */}
            <div
                className={`fixed bottom-0 left-0 right-0 bg-white transition-transform duration-300 z-30 rounded-t-3xl ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
            >
                <div className='w-20 border-b-4 border-main-02 mx-auto mt-5' onClick={handleChange}></div>
                <div className='relative py-5'>
                    <button onClick={handleChange} className='absolute left-4'>
                        <Image src={ChevronLeft} alt='chevron-left' width={10} height={10} />
                    </button>
                    <h2 className='text-xl font-bold text-center'>都道府県</h2>
                </div>
                <div className="h-[50vh] px-4 py-10 overflow-y-scroll">
                    <PrefectureList />
                </div>
            </div>
        </>
    )
}

export default BottomDrawer
