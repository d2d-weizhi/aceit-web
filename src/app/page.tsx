"use client";

import { useState } from "react";
import Image from "next/image";
import { BellPlus, Bell, Check } from "lucide-react";
import SideDrawer from "@/shared/components/sidedrawer";
import { AceItTabBar } from "@/shared/components/aceit-tabbar";

import { ExpansionPanel, ExpansionPanelContent, ExpansionPanelActionEvent } from '@progress/kendo-react-layout';
import { Reveal } from '@progress/kendo-react-animation';

import {
  Gantt,
  GanttWeekView,
  GanttMonthView,
  GanttTaskModelFields,
  GanttDependencyModelFields
} from '@progress/kendo-react-gantt';

import { ListView, ListViewItemProps, ListViewItemWrapper } from '@progress/kendo-react-listview';

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

import { assignmentsData, ganttTasksDependencies, ganttTasksData, homeTasksData, homeRemindersData, pmProfileData } from '@/shared/data/sample-aceit-data';
import CircularProgressBar from "@/shared/components/circular-progress-bar";

const ganttStyle = {
  height: 500,
  width: '100%'
};

const taskModelFields: GanttTaskModelFields = {
  id: 'id',
  start: 'start',
  end: 'end',
  title: 'title',
  percentComplete: 'percentComplete',
  isRollup: 'isRollup',
  isExpanded: 'isExpanded',
  isInEdit: 'isInEdit',
  children: 'subtasks'
};
const dependencyModelFields: GanttDependencyModelFields = {
  id: 'id',
  fromId: 'fromId',
  toId: 'toId',
  type: 'type'
};
const columns = [
  {
      field: taskModelFields.title,
      title: 'Title',
      width: 200,
      expandable: true
  },
  {
    field: taskModelFields.start,
    title: 'Start',
    width: 90,
    format: '{0:dd/MM}'
  },
  {
    field: taskModelFields.end,
    title: 'End',
    width: 90,
    format: '{0:dd/MM}'
  }
];

export default function Dashboard() {
  const [activeAssignmentPanel, setActiveAssignmentPanel] = useState<string>("asn16253");
  const [activeTab, setActiveTab] = useState<string>("Home");

  const [taskData] = useState(ganttTasksData);
  const [dependencyData] = useState(ganttTasksDependencies);

  const [isShowRightPanel, setIsShowRightPanel] = useState(false);
  const refreshChart = false;

  const homeTaskItemRender = (props: ListViewItemProps) => {
    const item = props.dataItem;

    // Format the date as "dd MMM"
    const formattedDueDate = new Date(item.duedate).toLocaleDateString('en-US', {
      day: '2-digit', 
      month: 'short' 
    });

    return (
      <ListViewItemWrapper className="h-[80px]" style={{ borderBottom: '1px solid lightgrey' }}>
        <div className="flex flex-row h-full p-[5px] w-[100%]">
          <div className="flex-1 flex-col h-full">
            <div className={`flex-1 flex-row items-center justify-start text-2xl ${item.dueSoon && "font-bold"}`}>
              {item.title} | {formattedDueDate}
            </div>
            <div className="flex items-center justify-start text-sm font-semibold"><em>{item.assignment}</em></div>
          </div>
          <div className="flex flex-col, h-full items-center justify-center w-[84px]">
            <div className="flex flex-col w-1/2 h-full items-center justify-center mr-1 text-lg">
              {item.percentCompleted * 100}%
            </div>
            <div className="flex flex-col w-1/2 aspect-square">
              <CircularProgressBar value={parseFloat(item.percentCompleted)} />
            </div>
          </div>
        </div>
      </ListViewItemWrapper>
    );
  };

  const homeReminderRender = (props: ListViewItemProps) => {
    const item = props.dataItem;

    const formattedAlarmDate = new Date(item.alarmDate).toLocaleString("en-SG", {
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: item.timeZone
    });

    return (
      <ListViewItemWrapper className="p-[5px] h-[60px]" style={{ borderBottom: '1px solid lightgrey' }}>
        <div className="flex flex-row w-full h-full">
          <div className="flex w-[85%] justify-start items-center px-4 text-lg h-full">
            <button 
              type="button" 
              className={`mr-4 w-8 aspect-square p-1 items-center justify-center rounded-sm border-1 ${item.isDone ? "bg-green-700 border-green-500" : " border-gray-300" }`}>
              {item.isDone && <Check color="white" width={20} height={20} />}
            </button>
            {item.isDone ? (
              <span className="line-through text-gray-400">
                {item.title}
              </span>
              ) : (
                <span>{item.title}</span>
              )}
              &nbsp;
          </div>
          <div className="flex w-[15%] items-center justify-start px-4 text-lg h-full">
            {item.hasAlarm && <span><em>{formattedAlarmDate}</em></span>}&nbsp;{item.hasAlarm && <Bell width={16} height={16} />}
          </div>
        </div>
      </ListViewItemWrapper>
    );
  };

  function chartDrillDown() {
    setIsShowRightPanel(!isShowRightPanel);
  }

  // @typescript-eslint/no-explicit-any
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
                <div className="items-center justify-center w-full h-full p-8">
                  <div className="flex justify-start items-center w-full section-header-wrapper">
                    <h2 className="section-header">On-going Assignments:</h2>
                  </div>

                  {/* On-going Assignments Section starts here. */}

                  {assignmentsData.map((assignment) => (
                    <ExpansionPanel
                      title={assignment.title}
                      subtitle={`Deadline: ${assignment.duedate}`}
                      expanded={activeAssignmentPanel === assignment.id}
                      tabIndex={0}
                      key={assignment.id}
                      onAction={(event: ExpansionPanelActionEvent) => {
                        setActiveAssignmentPanel(event.expanded ? '' : assignment.id)
                      }}
                    >
                      <Reveal>
                        {activeAssignmentPanel === assignment.id && (
                          <ExpansionPanelContent>
                            <Gantt
                              style={ganttStyle}
                              taskData={taskData}
                              taskModelFields={taskModelFields}
                              dependencyData={dependencyData}
                              rowHeight={40}
                              dependencyModelFields={dependencyModelFields}
                              columns={columns}
                              defaultView="week"
                            >
                              <GanttWeekView />
                              <GanttMonthView />
                            </Gantt>
                          </ExpansionPanelContent>
                        )}
                      </Reveal>
                    </ExpansionPanel>
                  ))}

                  {/* On-going Assignments Section ends here. */}

                  <div className="h-8 w-full" />

                  <div className="flex justify-start items-center w-full section-header-wrapper">
                    <h2 className="section-header">Current/Upcoming Tasks:</h2>
                  </div>

                  {/* Current/Upcoming Tasks Section starts here. */}
                  <ListView data={homeTasksData} item={homeTaskItemRender} style={{ width: '100%', height: 400 }} />
                  {/* Current/Upcoming Tasks Section ends here. */}

                  <div className="h-8 w-full" />

                  <div className="flex items-center w-full section-header-wrapper">
                    <div className="flex-1 flex-col justify-start items-center">
                      <h2 className="section-header">
                        Current/Upcoming Reminders:
                      </h2>
                    </div>
                    <div className="flex justify-center items-center w-5 p-1 aspect-square">
                      {/* Add button within a separate element */}
                      <button type="button" className="h-4 w-4 cursor-pointer"> 
                        <BellPlus className="h-4 w-4" /> 
                      </button>
                    </div>
                  </div>

                  {/* Current/Upcoming Reminders Section starts here. */}
                  <ListView data={homeRemindersData} item={homeReminderRender} style={{ width: '100%', height: 200 }} />
                  {/* Current/Upcoming Reminders Section ends here. */}

                </div>
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
                          data={pmProfileData}
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
