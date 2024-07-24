"use client"

import { AppBar, BottomDrawer, BottomDrawerButton, Sidebar } from "@/components";
import { PopulationCategory, PopulationCategoryProvider, PopulationChart } from "@/feature/populations";
import { PrefectureProvider } from "@/feature/prefectures";
import { useBottomDrawer } from "@/hooks";

export default function Home() {
  const { isOpen, handleChange } = useBottomDrawer()

  return (
    <main className='h-screen md:h-auto bg-base-01'>
      <PopulationCategoryProvider>
        <PrefectureProvider>
          <AppBar />
          <BottomDrawerButton isOpen={isOpen} handleChange={handleChange} />
          <BottomDrawer isOpen={isOpen} handleChange={handleChange} />
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
