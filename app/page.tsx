import { AppBar, Sidebar } from "@/components";
import { PopulationCategory, PopulationCategoryProvider, PopulationChart } from "@/feature/populations";
import { PrefectureList, PrefectureProvider } from "@/feature/prefectures";

export default function Home() {

  return (
    <main>
      <PopulationCategoryProvider>
        <PrefectureProvider>
          <AppBar />
          <div className="md:flex">
            <Sidebar />
            <div className="p-4 md:p-10 bg-base-01 w-full">
              <PopulationCategory />
              <PopulationChart />
            </div>
          </div>
        </PrefectureProvider>
      </PopulationCategoryProvider>
    </main>
  );
}
