export interface PopulationYearData {
    year: number;
    value: number;
    rate?: number;
}

export interface PopulationCategory {
    label: string;
    data: PopulationYearData[];
}

export interface PopulationResult {
    boundaryYear: number;
    data: PopulationCategory[];
}

export interface PopulationResponse {
    message: string | null;
    result: PopulationResult;
}

export interface PopulationCategoryContextType {
    populationCategories: string[];
    selectedPopulationCategory: string;
    setSelectedPopulationCategory: (category: string) => void;
}

export interface LoadingStateContextType {
    isLoading: boolean
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}
