"use client"
import { LoadingStateContextType } from '@/types'
import React, { createContext, useState } from 'react'

export const LoadingStateContext = createContext<LoadingStateContextType>({
    isLoading: false,
    setIsLoading: () => { }
})

export const LoadingStateProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)


    return (
        <LoadingStateContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoadingStateContext.Provider>
    )
}

export default LoadingStateContext