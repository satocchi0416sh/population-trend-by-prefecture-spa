'use client'

import React, { useEffect, useState } from 'react'
import usePrefectures from '../hooks/usePrefectures'
import { Prefecture } from '@/types';

const PrefectureList: React.FC = () => {
    const { prefectures, error, loading } = usePrefectures();

    useEffect(() => {
        console.log(prefectures);
    }, [prefectures]);


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <ul>
                {prefectures.map((prefecture: Prefecture) => (
                    <li key={prefecture.prefCode}>
                        <label>
                            <input type="checkbox" />
                            {prefecture.prefName}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PrefectureList