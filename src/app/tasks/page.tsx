"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Kanban, ListCollapse } from "lucide-react";
import SideDrawer from "@/shared/components/sidedrawer";

import { ButtonGroup, Button } from "@progress/kendo-react-buttons";

import CircularProgressBar from "@/shared/components/circular-progress-bar";

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTitle,
    ChartLegend
} from '@progress/kendo-react-charts';
import { modules, tasksDistriSeries } from "@/shared/data/tasks-page-data";

export default function Tasks() {
	const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
	const [isShowRightPanel, setIsShowRightPanel] = useState(false);
	const [activeView, setActiveView] = useState<string>("kanban");
	
	return (
    <div className="flex flex-row bg-gray-300 w-screen justify-center items-center">
      <div
        className="flex-col bg-white p-4 h-screen overflow-y-auto w-[50%] z-5 transition-all duration-250 ease-out"
        style={{
          transform: isShowRightPanel ? "translateX(0)" : "translateX(50%)",
          transitionDelay: isShowRightPanel ? "0ms" : "250ms", // Delay for hiding
        }}
      >
        {/* Top Bar starts here. */}
        <div className="flex flex-row items-center p-2 h-max z-50">
          <div className="flex-1 flex-col">
            <button
              type="button"
              onClick={() => {
                setIsShowMenu(!isShowMenu);
              }}
              className="fixed top-0 left-0 m-6 z-50"
            >
              {isShowMenu ? (
                <X
                  width={48}
                  height={48}
                  strokeWidth={1.5}
                  color={"#FEFEFE"}
                  className={`menu-button ${
                    isShowMenu ? "fade-in" : "fade-out"
                  }`}
                />
              ) : (
                <Menu
                  width={48}
                  height={48}
                  strokeWidth={1.5}
                  color={"#141414"}
                  className={`menu-button ${
                    isShowMenu ? "fade-out" : "fade-in"
                  }`}
                />
              )}
            </button>
            <SideDrawer isShow={isShowMenu} />
          </div>
          <div className="flex w-auto p-2">
            <Image
              src="/green-monster.png"
              alt={"Sample Profile Image"}
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
        </div>
        {/* Top Bar ends here. */}

        {/* Left Panel content starts here. */}
        <div className="flex flex-col items-center p-8 z-10 w-full h-full">
          <div className="flex justify-start items-center w-full section-header-wrapper">
            <h2 className="section-header">Your Tasks Stats:</h2>
          </div>

          {/* We will display 3 key stats here. */}
          <div className="flex justify-center items-center gap-8 w-full">
            <div
              className="flex flex-col items-center justify-center align-top w-1/3 stats-widget rounded-xl bg-gray-100 p-8"
              onClick={() => {
                setIsShowRightPanel(!isShowRightPanel);
              }}
            >
              <span className="text-sm font-medium text-gray-600 align-top">
                Pending Tasks
              </span>
              <div className="flex flex-row relative justify-center items-center w-full h-[90%] stats-figure">
                <CircularProgressBar statsType="pending" value={27/123} />
                <div
                  className="absolute inset-0 flex items-center justify-center text-2xl font-light text-gray-700"
                >
                  {((27/123) *  100).toFixed(1)}%
                </div>
              </div>
            </div>
            <div
              className="flex flex-col items-center justify-center align-top w-1/3 stats-widget rounded-xl bg-gray-100 p-8"
              onClick={() => {
                setIsShowRightPanel(!isShowRightPanel);
              }}
            >
              <span className="text-sm font-medium text-gray-600 align-top">
                On-going Tasks
              </span>
              <div className="flex flex-row relative justify-center items-center w-full h-[90%] stats-figure">
                <CircularProgressBar statsType="inProgress" value={23/123} />
                <div
                  className="absolute inset-0 flex items-center justify-center text-2xl font-light text-gray-700"
                >
                  {((23/123) *  100).toFixed(1)}%
                </div>
              </div>
            </div>
            <div
              className="flex flex-col items-center justify-center align-top w-1/3 stats-widget rounded-xl bg-gray-100 p-8"
              onClick={() => {
                setIsShowRightPanel(!isShowRightPanel);
              }}
            >
              <span className="text-sm font-medium text-gray-600 align-top">
                Completed Tasks
              </span>
              <div className="flex flex-row relative justify-center items-center w-full h-[90%] stats-figure">
                <CircularProgressBar statsType="completed" value={73/123} />
                <div
                  className="absolute inset-0 flex items-center justify-center text-2xl font-light text-gray-700"
                >
                  {((73/123) *  100).toFixed(1)}%
                </div>
              </div>
            </div>
          </div>

          <div className="h-8 w-full" />

          {/* We will display a Task Distribution Chart (across different assignments). */}
          <div className="flex justify-start items-center w-full section-header-wrapper">
            <h2 className="section-header">Task Distribution (by Assignments)</h2>
          </div>

          <div className="flex justify-center items-center h-max w-full">
            <Chart className="w-full h-[400px]">
              <ChartLegend position="top" orientation="horizontal" />
              <ChartCategoryAxis>
                  <ChartCategoryAxisItem categories={modules} startAngle={45} />
              </ChartCategoryAxis>
              <ChartSeries>
                  {tasksDistriSeries.map((item, idx) => (
                      <ChartSeriesItem key={idx} type="column" data={item.data} name={item.name} />
                  ))}
              </ChartSeries>
            </Chart>
          </div>

          <div className="h-8 w-full" />

          {/* We will use a ButtonGroup here for toggling between the KanBan and Listing views */}
          <div className="flex justify-start items-center w-full section-header-wrapper">
            <h2 className="section-header">Tasks (KanBan view):</h2>
          </div>

          <div className="flex items-center justify-end w-full h-max">
            <ButtonGroup className="rounded-md">
              <Button
                togglable={true}
                selected={activeView === "kanban"}
                onClick={() => setActiveView("kanban")}
                themeColor={activeView === "kanban" ? "primary" : "light"}
              >
                <Kanban size={24} />
              </Button>
              <Button
                togglable={true}
                selected={activeView === "list"}
                onClick={() => setActiveView("list")}
                themeColor={activeView === "list" ? "primary" : "light"}
              >
                <ListCollapse size={24} />
              </Button>
            </ButtonGroup>
          </div>
        </div>
        {/* Left Panel content ends here. */}
      </div>
      <div
        className="flex-col bg-white p-4 relative h-screen overflow-y-auto w-[50%] opacity-0 transition-all duration-250 ease-out z-1"
        style={{
          transitionDelay: isShowRightPanel ? "250ms" : "0ms", // Delay for showing
          opacity: isShowRightPanel ? 1 : 0,
        }}
      >
        {/* ... your other Dashboard content ... */}
        <h2>Right Panel here</h2>
      </div>
    </div>
  );
}