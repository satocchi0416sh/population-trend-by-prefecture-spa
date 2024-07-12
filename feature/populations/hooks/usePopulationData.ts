import { useState } from "react";

const usePopulationData = () => {
    const [populationData, setPopulationData] = useState<PopulationData[]>([]);
};

export default usePopulationData;