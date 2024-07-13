export interface Prefecture {
    prefCode: number;
    prefName: string;
}

export interface PrefectureContextType {
    selectedPrefectures: Prefecture[];
    togglePrefecture: (prefCode: Prefecture) => void;
}