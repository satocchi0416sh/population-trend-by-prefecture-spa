"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import useApi from "@/hooks/useApi";
import { PopulationResponse, PopulationResult } from "@/types";

interface CachedPopulationData {
    [prefCode: number]: PopulationResult;
}

const useFetchPopulationData = () => {
    const { data, error, loading, refetch } = useApi();
    const [populationData, setPopulationData] = useState<CachedPopulationData>({});
    const [requestedPrefCodes, setRequestedPrefCodes] = useState<Set<number>>(new Set());
    const currentPrefCode = useRef<number | null>(null);

    const fetchPopulationData = useCallback((prefCode: number) => {
        currentPrefCode.current = prefCode;
        refetch(`/population/composition/perYear?prefCode=${prefCode}&cityCode=-`, {
            headers: {
                'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY
            }
        });
    }, [refetch]);

    useEffect(() => {
        if (data) {
            const response = data as PopulationResponse;
            if (response && response.result && currentPrefCode.current !== null) {
                const prefCode = currentPrefCode.current;
                setPopulationData(prevData => ({
                    ...prevData,
                    [prefCode]: response.result
                }));
                currentPrefCode.current = null;
            }
        }
    }, [data]);

    const requestPopulationData = (prefCodes: number[]) => {
        const newPrefCodes = prefCodes.filter(prefCode => !requestedPrefCodes.has(prefCode));
        if (newPrefCodes.length > 0) {
            newPrefCodes.forEach(prefCode => {
                fetchPopulationData(prefCode);
                setRequestedPrefCodes(prev => {
                    const updatedSet = new Set(prev);
                    updatedSet.add(prefCode);
                    return updatedSet;
                });
            });
        }
    };

    return { populationData, error, loading, requestPopulationData };
};

export default useFetchPopulationData;