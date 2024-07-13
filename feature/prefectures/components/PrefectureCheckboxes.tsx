'use client'
import { Prefecture } from '@/types';
import { usePrefectures, PrefectureCheckbox, usePrefectureContext } from '..';

const PrefectureList: React.FC = () => {

    const { prefectures, error, loading } = usePrefectures();
    const { selectedPrefectures, togglePrefecture } = usePrefectureContext();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <ul className='flex flex-col gap-2'>
                {prefectures.map((prefecture: Prefecture) => (
                    <PrefectureCheckbox
                        key={prefecture.prefCode}
                        prefCode={prefecture.prefCode}
                        prefName={prefecture.prefName}
                        selectedPrefectures={selectedPrefectures}
                        togglePrefecture={togglePrefecture}
                    />
                ))}
            </ul>
        </div>
    )
}

export default PrefectureList