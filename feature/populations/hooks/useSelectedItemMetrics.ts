"use client";

import { useEffect, useState } from "react";

const useSelectedItemMetrics = (selectedItem: HTMLDivElement | null) => {
    const [metrics, setMetrics] = useState({ width: 0, left: 0 });

    useEffect(() => {
        if (selectedItem) {
            setMetrics({
                width: selectedItem.offsetWidth,
                left: selectedItem.offsetLeft
            });
        }
    }, [selectedItem]);

    return metrics;
};

export default useSelectedItemMetrics;