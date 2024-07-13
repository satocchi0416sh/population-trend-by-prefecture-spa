import { PopulationCategory, PopulationCategoryProvider, PopulationChart } from "@/feature/populations";
import { PrefectureList, PrefectureProvider } from "@/feature/prefectures";

export default function Home() {

  return (
    <main>
      <PopulationCategoryProvider>
        <PrefectureProvider>
          <PrefectureList />
          <PopulationCategory />
          <PopulationChart />
        </PrefectureProvider>
      </PopulationCategoryProvider>
    </main>
  );
}
