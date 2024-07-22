import { AppBar, Sidebar } from "@/components";
import { PopulationCategory, PopulationCategoryProvider, PopulationChart } from "@/feature/populations";
import { PrefectureList, PrefectureProvider } from "@/feature/prefectures";

export default function Home() {

  return (
    <main>
      <PopulationCategoryProvider>
        <PrefectureProvider>
          <AppBar />
          <div className="flex">
            <Sidebar />
            <div>
              <PopulationCategory />
              <PopulationChart />
            </div>
          </div>
        </PrefectureProvider>
      </PopulationCategoryProvider>
    </main>
  );
}
