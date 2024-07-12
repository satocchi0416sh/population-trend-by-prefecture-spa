import useApi from "@/hooks/useApi";
import { Prefecture } from "@/types";
import { useEffect, useState, useRef } from "react";

export default function usePrefectures() {

    const isFirst = useRef(true);
    const { data, error, loading, refetch } = useApi();
    const [prefectures, setPrefectures] = useState<Prefecture[]>([]);



    useEffect(() => {
        if (isFirst.current) {
            fetchPrefectures();
            isFirst.current = false;
        }
    }, []);

    useEffect(() => {
        if (data) {
            setPrefectures(data.result);
        }
    }, [data]);

    const fetchPrefectures = () => {
        refetch('/prefectures', {
            headers: {
                'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY
            }
        });
    };

    return { prefectures, error, loading, fetchPrefectures };
};