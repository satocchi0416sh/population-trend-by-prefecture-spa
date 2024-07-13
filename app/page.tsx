import { PopulationChart } from "@/feature/populations";
import { PrefectureList, PrefectureProvider } from "@/feature/prefectures";

export default function Home() {

  return (
    <main>
      <PrefectureProvider>
        <PrefectureList />
        <PopulationChart />
      </PrefectureProvider>
    </main>
  );
}
