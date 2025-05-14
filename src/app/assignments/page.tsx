"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";
import SideDrawer from "@/shared/components/sidedrawer";

import {
  ListView,
  ListViewItemProps,
  ListViewItemWrapper,
} from "@progress/kendo-react-listview";
import { ProgressBar } from '@progress/kendo-react-progressbars';
import { ChipList, Chip, ChipProps } from '@progress/kendo-react-buttons';

import { assignmentsData } from "@/shared/data/assignments-page-data";

export default function Assignments() {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  // We will make sure that all the sections are "Expanded" by default.
  const [isOngoingExpanded, setIsOngoingExpanded] = useState<boolean>(true);
  const [isSubmittedExpanded, setIsSubmittedExpanded] = useState<boolean>(true);
  const [isCompletedExpanded, setIsCompletedExpanded] = useState<boolean>(true);

  const [isShowRightPanel, setIsShowRightPanel] = useState(false);

	const assignmentsRender = (props: ListViewItemProps) => {
    const item = props.dataItem;
	
		return (
      <ListViewItemWrapper
        className="p-8 h-[100px]"
        style={{ borderBottom: "1px solid lightgrey" }}
      >
        <div className="flex flex-row w-full h-[80px] mt-[10px] mb-[10px]">
          <div className="flex flex-col items-center justify-start w-[68%] h-full">
            <div className="flex-1 text-2xl font-bold w-full items-center">
              {item.assignmentTitle}
            </div>
            <div className="flex text-md font-normal w-full h-max items-center">
              Next Milestone: {item.milestone.title} ({item.milestone.date})
            </div>
          </div>
          <div className="flex flex-col w-[32%] items-center justify-end h-full">
            {item.status === "ongoing" || item.status === "submitted" ? (
              <div className="flex text-lg font-normal w-full items-center justify-end pr-4 h-1/2">
                <div className="mr-2 w-16">
                  <ProgressBar 
                    value={item.progressPercent * 100} 
                    labelVisible={false} 
                    min={0} 
                    max={100} 
                    progressStyle={{ borderRadius: "2px" }}
                    style={{
                      borderRadius: "2px"
                    }}/>
                </div>
                <div className="w-8 justify-end pr-4">
                  {Math.round(item.progressPercent * 100)}%
                </div>
              </div>
            ) : (
              <div className="flex text-xl font-semibold text-green-800 w-full items-center justify-end pr-2 h-1/2">
                COMPLETED
              </div>
            )}
            
            <div className="flex text-lg font-normal w-full items-center justify-end pr-2 h-1/2">
              <ChipList
                selection={'single'}
                defaultData={item.tags}
                chip={(props: ChipProps) => {
                  const { dataItem } = props;
                  return (
                    <Chip
                      text={dataItem.tagTitle}
                      value={dataItem.id}
                      style={{
                        backgroundColor: "#e51a5f",
                        color: "#efefef"
                      }}
                    />
                  );
                }}
              />
            </div>
          </div>
        </div>
      </ListViewItemWrapper>
    );
	};

  return (
    <div className="flex flex-row bg-gray-300 w-screen justify-center items-center">
      <div
        className="flex-col bg-white p-4 h-screen overflow-y-auto w-[50%] transition-all duration-250 ease-out"
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
                  width={64}
                  height={64}
                  strokeWidth={1.5}
                  color={"#FEFEFE"}
                  className={`menu-button ${
                    isShowMenu ? "fade-in" : "fade-out"
                  }`}
                />
              ) : (
                <Menu
                  width={64}
                  height={64}
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
        <div className="flex flex-col  items-center p-8 z-10 w-full h-full">
          {/* We will put this here to prevent a linting error on vercel. */}
          <button onClick={() => setIsShowRightPanel(!isShowRightPanel)}>
            Show Right Panel
          </button>

          <div
            className="flex items-center w-full section-header-wrapper"
            onClick={() => setIsOngoingExpanded(!isOngoingExpanded)}
          >
            <div className="flex flex-col justify-center items-center w-5 aspect-square transition-transform duration-250 ease-in-out">
              <ChevronRight
                className={`h-4 w-4 ${isOngoingExpanded && "rotate-90"}`}
              />
            </div>
            <div className="flex-1 flex-col justify-start items-center">
              <h2 className="section-header">On-going Assignments:</h2>
            </div>
          </div>

          {isOngoingExpanded && (
            <div className={`flex items-center w-full h-max mb-16`}>	
							{/* Ongoing Assignments Section starts here. */}
							<ListView data={assignmentsData.filter(a => a.status === "ongoing")} item={assignmentsRender} style={{ width: '100%', height: (assignmentsData.filter(a => a.status === "ongoing").length * 110) + 2 }} />
							{/* Ongoing Assignments Section ends here. */}
						</div>
          )}

          <div className="h-8 w-full" />

          <div
            className="flex flex-row items-center w-full section-header-wrapper"
            onClick={() => setIsSubmittedExpanded(!isSubmittedExpanded)}
          >
            <div className="flex justify-center items-center w-5 aspect-square transition-transform duration-250 ease-in-out">
              <ChevronRight
                className={`h-4 w-4 ${isSubmittedExpanded && "rotate-90"}`}
              />
            </div>
            <div className="flex-1 flex-col justify-start items-center">
              <h2 className="section-header">Upcoming Assignments:</h2>
            </div>
          </div>

          {isSubmittedExpanded && (
            <div 
              className="flex items-center w-full mb-16"
              style={{
                height: (assignmentsData.filter(a => a.status === "submitted").length * 100) + 2
              }}
            >
              {/* Submitted Assignments Section starts here. */}
							<ListView data={assignmentsData.filter(a => a.status === "submitted")} item={assignmentsRender} style={{ width: '100%', height: (assignmentsData.filter(a => a.status === "submitted").length * 100) + 2 }} />
							{/* Submitted Assignments Section ends here. */}
            </div>
          )}

          <div className="h-8 w-full" />

          <div className="flex flex-row items-center w-full section-header-wrapper">
            <div
              className="flex justify-center items-center w-5 aspect-square transition-transform duration-250 ease-in-out"
              onClick={() => setIsCompletedExpanded(!isCompletedExpanded)}
            >
              <ChevronRight
                className={`h-4 w-4 ${isCompletedExpanded && "rotate-90"}`}
              />
            </div>
            <div className="flex-1 flex-col justify-start items-center">
              <h2 className="section-header">Completed Assignments:</h2>
            </div>
          </div>

          {isCompletedExpanded && (
            <div 
              className="flex items-center w-full mb-36"
              style={{
                height: (assignmentsData.filter(a => a.status === "completed").length * 100) + 10
              }}
            >	
              {/* Completed Assignments Section starts here. */}
							<ListView data={assignmentsData.filter(a => a.status === "completed")} item={assignmentsRender} style={{ width: '100%', height: (assignmentsData.filter(a => a.status === "completed").length * 100) + 10 }} />
							{/* Completed Assignments Section ends here. */}
            </div>
          )}
        </div>
        {/* Left Panel content ends here. */}
      </div>
      <div
        className="flex-col bg-white p-4 relative h-screen overflow-y-auto w-[50%] opacity-0 transition-all duration-250 ease-out"
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
