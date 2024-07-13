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
