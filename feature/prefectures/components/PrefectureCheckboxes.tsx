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
            {selectedPrefectures.length > 0 && (
                <>
                    <h3 className='text-lg font-bold mb-5'>選択中</h3>
                    <ul className='flex flex-wrap gap-2 mb-10'>
                        {selectedPrefectures.map((prefecture: Prefecture) => (
                            <PrefectureCheckbox
                                key={prefecture.prefCode}
                                prefecture={prefecture}
                                selectedPrefectures={selectedPrefectures}
                                togglePrefecture={togglePrefecture}
                            />
                        ))}
                    </ul>
                </>
            )}
            <h3 className='text-lg font-bold mb-5'>都道府県一覧</h3>
            <ul className='flex flex-wrap gap-2'>

                {prefectures.map((prefecture: Prefecture) => (
                    <PrefectureCheckbox
                        key={prefecture.prefCode}
                        prefecture={prefecture}
                        selectedPrefectures={selectedPrefectures}
                        togglePrefecture={togglePrefecture}
                    />
                ))}
            </ul>
        </div>
    )
}

export default PrefectureList