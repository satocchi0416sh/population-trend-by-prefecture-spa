export interface Prefecture {
    prefCode: number;
    prefName: string;
}

export interface PrefectureContextType {
    selectedPrefectures: number[];
    togglePrefecture: (prefCode: number) => void;
}