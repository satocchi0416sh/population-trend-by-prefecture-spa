"use client";
import { useEffect, useState } from "react";
import { PopulationData } from "@/types";
import useApi from "@/hooks/useApi";

const usePopulationData = (prefCode: number) => {
    const { data, error, loading, refetch } = useApi();
    const [populationData, setPopulationData] = useState<PopulationData[]>([]);

    useEffect(() => {
        fetchPopulationData();
    }, [prefCode]);

    useEffect(() => {
        if (data) {
            setPopulationData(data);
        }
    }, [data]);

    const fetchPopulationData = () => {
        refetch('/population/composition/perYear', {
            headers: {
                'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY
            },
            data: {
                prefCode: prefCode,
                cityCode: -1
            }
        });
    };

    return { populationData, error, loading };
};

export default usePopulationData;