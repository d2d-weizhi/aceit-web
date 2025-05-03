"use client";

import { useState } from "react";
import Image from "next/image";
import SideDrawer from "@/shared/components/sidedrawer";
import { AceItTabBar } from "@/shared/components/aceit-tabbar";

import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartSeries,
  ChartSeriesItem,
  PlotAreaClickEvent
} from '@progress/kendo-react-charts';

import data from '@/shared/data/sample-pm-data';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<string>("Home");
  const [isShowRightPanel, setIsShowRightPanel] = useState(false);
  const refreshChart = false;

  function chartDrillDown(event: PlotAreaClickEvent) {
    setIsShowRightPanel(!isShowRightPanel);
  }

  const handleChartRefresh = (chartOptions: any, themeOptions: any, chartInstance: any) => {
    if (refreshChart) {
        chartInstance.setOptions(chartOptions, themeOptions);
    }
};

  return (
    <div className="flex flex-row bg-gray-300 w-screen justify-center items-center">
			<div 
				className=" flex flex-col bg-white p-4 h-screen overflow-y-auto w-[50%] z-10 transition-all duration-250 ease-out"
				style={{
					transform: isShowRightPanel ? 'translateX(0)' : 'translateX(50%)',
					transitionDelay: isShowRightPanel ? '0ms' : '250ms' // Delay for hiding
				}}
			> 
        <div className="flex flex-row items-center p-2 h-max">
          <div className="flex-1 flex-col">
            <SideDrawer />
          </div>
          <div className="flex w-auto p-2">
            <Image src="/green-monster.png" alt={"Sample Profile Image"} width={48} height={48} className="rounded-full" />
          </div>
        </div>

        {/* Our Outer Row Layout */}
        <div className="flex flex-row-1 justify-center items-start w-full">
          {/* Where our entire AceItTab Component begins */}
          <div className="flex flex-col w-full h-full mx-[5%]">
            {/* AceItTabStrip - Start Simple */}
            <AceItTabBar activeTab={activeTab} onChange={setActiveTab} />

            <div className="h-0.5 bg-gray-200 w-full mt-4 mb-4" />

            {/* AceItTabContent - Initial Content */}
            <div className="aceit-tab-content">
              {activeTab === "Home" ? (
                <h2>Home View Section</h2>
              ) : (
                <div className="items-center justify-center w-full h-full p-8"> {/* Main container for our Stats View */}
                  <div className="flex justify-start items-center w-full">
                    <h2 className="section-header">Your Academic Summary:</h2>
                  </div>

                  {/* Key Stats widgets start here. */}
                  <div className="flex justify-center items-center gap-8 w-full">
                    <div 
                      className="flex flex-col items-center justify-center align-top w-1/3 stats-widget rounded-xl bg-gray-100 p-8"
                      onClick={() => setIsShowRightPanel(!isShowRightPanel)}
                    >
                      <span className="text-sm font-medium text-gray-600 align-top">
                        Avg. Grade
                      </span>
                      <div className="flex flex-row justify-center items-center w-full h-[90%] stats-figure">
                        B+
                      </div>
                    </div>
                    <div 
                      className="flex flex-col items-center justify-center align-top w-1/3 stats-widget rounded-xl bg-gray-100 p-8"
                      onClick={() => setIsShowRightPanel(!isShowRightPanel)}  
                    >
                      <span className="text-sm font-medium text-gray-600 align-top">
                        Submission Rating
                      </span>
                      <div className="flex flex-row justify-center items-center w-full h-[90%] stats-figure">
                        78.8%
                      </div>
                    </div>
                    <div 
                      className="flex flex-col items-center justify-center align-top w-1/3 stats-widget rounded-xl bg-gray-100 p-8"
                      onClick={() => setIsShowRightPanel(!isShowRightPanel)}
                    >
                      <span className="text-sm font-medium text-gray-600 align-top">
                        Appraisal Rating
                      </span>
                      <div className="flex flex-row justify-center items-center w-full h-[90%] stats-figure">
                        4.1
                      </div>
                    </div>
                  </div>
                  {/* Key Stats widgets end here. */}

                  <div className="h-8 w-full" />

                  <div className="flex justify-start items-center w-full">
                    <h2 className="section-header">Your Project Management Profile:</h2>
                  </div>

                  {/* Project Management Profile starts here. */}
                  <div className="flex justify-center items-center w-full">
                    <Chart 
                      renderAs={"canvas"}
                      onPlotAreaClick={chartDrillDown}
                      onRefresh={handleChartRefresh}
                      style={{
                        width: "900px",
                        minWidth: "700px",
                        height: "800px",
                        minHeight: "600px",
                        fontSize: "1.2rem"
                      }}
                    >
                      <ChartSeries>
                        <ChartSeriesItem
                          type="radarArea"
                          style="smooth"
                          color={"#3f51b5"}
                          data={data}
                          field="score"
                          categoryField="name"
                          name="Skill Score"
                        />
                      </ChartSeries>
                      <ChartValueAxis>
                        <ChartValueAxisItem labels={{ format: '0' }} max={10} min={0} />
                      </ChartValueAxis>
                      <ChartTitle position={"bottom"} text="Project Management Skills Scores" />
                      <ChartLegend visible={false} />
                    </Chart>
                  </div>
                  {/* Project Management Profile ends here. */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div 
				className="flex-col bg-white p-4 relative h-screen overflow-y-auto w-[50%] opacity-0 z-1 transition-all duration-250 ease-out"
				style={{
					transitionDelay: isShowRightPanel ? '250ms' : '0ms', // Delay for showing
					opacity: isShowRightPanel ? 1 : 0
				}}
			>
				{/* ... your other Dashboard content ... */}
				<h2>Right Panel here</h2>
			</div>
    </div>
  );
}
