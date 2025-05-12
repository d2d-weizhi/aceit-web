"use client";

import { useState } from "react";
import Image from "next/image";
import { BellPlus, Bell, Check, X } from "lucide-react";
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
  ChartCategoryAxis,
  ChartCategoryAxisTitle,
  ChartCategoryAxisItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartSeriesLabelsFrom,
  ChartSeriesLabelsTo
} from '@progress/kendo-react-charts';

import { 
  assignmentsData, 
  ganttTasksDependencies, 
  ganttTasksData, 
  homeTasksData, 
  homeRemindersData, 
  pmProfileData,
  avgGradeHistoData,
  gradeCategoriesData,
  assignmentHistoryData,
  submissionRatingData,
  submissionHistoryData,
  overallAppraisalRating,
  sem1Appraisal,
  semesters,
  sem2Appraisal,
  sem3Appraisal,
  sem1PMProfile,
  sem2PMProfile,
  sem3PMProfile,
  sem1Feedbacks,
  sem2Feedbacks,
  sem3Feedbacks
} from '@/shared/data/sample-aceit-data';

import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { DropDownList, DropDownListChangeEvent } from "@progress/kendo-react-dropdowns";

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

interface SemAppraisalInterface {
  name: string;
  min: number;
  max: number;
}

interface SemPMProfileInterface {
  name: string;
  min: number;
  max: number;
}

interface SemFeedbackInterface {
  id: number,
  feedbackContent: string,
  module: string,
  category: string,
  lecturer: string,
  dateGiven: string,
}

export default function Dashboard() {
  const [activeAssignmentPanel, setActiveAssignmentPanel] = useState<string>("asn16253");
  const [activeTab, setActiveTab] = useState<string>("Home");

  const [taskData] = useState(ganttTasksData);
  const [dependencyData] = useState(ganttTasksDependencies);

  const [isShowRightPanel, setIsShowRightPanel] = useState(false);
  const [isShowGradesSummary, setIsShowGradesSummary] = useState(false);
  const [isShowSubmissionSummary, setIsShowSubmissionSummary] = useState(false);
  const [isShowAppraisalSummary, setIsShowAppraisalSummary] = useState(false);
  const [isShowPMProfileSummary, setIsShowPMProfileSummary] = useState(false);
  const [selectedSem, setSelectedSem] = useState({
    value: { text: "Semester 1", id: 1 }
  });
  const [currSemAppraisal, setCurrSemAppraisal] = useState<SemAppraisalInterface[]>(sem1Appraisal);
  const [currSemPMProfile, setCurrSemPMProfile] = useState<SemPMProfileInterface[]>(sem1PMProfile);
  const [currSemFeedback, setCurrSemFeedback] = useState<SemFeedbackInterface[]>(sem1Feedbacks);
  const refreshAppraisal = true;
  const refreshPMProfile = true;

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const refreshAppraisalChart = (chartOptions: any, themeOptions: any, chartInstance: any) => {
    if (refreshAppraisal) {
      chartInstance.setOptions(chartOptions, themeOptions);
    }
  }

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const refreshPMProfileChart = (chartOptions: any, themeOptions: any, chartInstance: any) => {
    if (refreshPMProfile) {
      chartInstance.setOptions(chartOptions, themeOptions);
    }
  }

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

  /**
   * @todo I need to add in the inner layout for each feedback list item. 
   */
  const feedbackRender = (props: ListViewItemProps) => {
    const item = props.dataItem;

    return (
      <ListViewItemWrapper className="p-[5px] h-max" style={{ borderBottom: '1px solid lightgrey' }}>
        <div className="flex flex-row w-full h-full">
          <div className="flex w-16 items-start justify-center p-2">
            <Image src={item.profilePic} alt={item.lecturer} width={48} height={48} className="rounded-full" />
          </div>
          <div className="flex-1 items-start justify-center">
            <div className="flex flex-row w-full h-max">
              <strong>{item.lecturer} | {item.module} | {item.category}</strong>
            </div>
            <div className="flex flex-row w-full h-max">
              {item.feedbackContent}
            </div>
            <div className="flex flex-row justify-end w-full h-max text-gray-500">
              {item.dateGiven}
            </div>
          </div>
        </div>
      </ListViewItemWrapper>
    );
  }

  function chartDrillDown() {
    setIsShowRightPanel(!isShowRightPanel);
    setIsShowPMProfileSummary(!isShowPMProfileSummary);
  }

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const handleChartRefresh = (chartOptions: any, themeOptions: any, chartInstance: any) => {
    if (refreshChart) {
        chartInstance.setOptions(chartOptions, themeOptions);
    }
  };

  return (
    <div className="flex flex-row bg-gray-300 w-screen justify-center items-center">
      {/* Left Panel starts here. */}
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
                      onClick={() => {
                        setIsShowRightPanel(!isShowRightPanel);
                        setIsShowGradesSummary(!isShowGradesSummary);
                      }}
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
                      onClick={() => {
                        setIsShowRightPanel(!isShowRightPanel);
                        setIsShowSubmissionSummary(!isShowSubmissionSummary);
                      }}  
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
                      onClick={() => {
                        setIsShowRightPanel(!isShowRightPanel);
                        setIsShowAppraisalSummary(!isShowAppraisalSummary);
                      }}
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
      {/* Left Panel ends here. */}

      {/* Right Panel starts here. */}
      <div 
				className="flex-col bg-white p-4 relative h-screen overflow-y-auto w-[50%] opacity-0 z-1 transition-all duration-250 ease-out"
				style={{
					transitionDelay: isShowRightPanel ? '250ms' : '0ms', // Delay for showing
					opacity: isShowRightPanel ? 1 : 0
				}}
			>
        <div className="flex flex-row items-end justify-end p-2 h-max">
          <button 
            type="button" 
            onClick={() => {
              setIsShowRightPanel(false);
              setIsShowGradesSummary(false);
              setIsShowSubmissionSummary(false);
              setIsShowAppraisalSummary(false);
              setIsShowPMProfileSummary(false);
              setSelectedSem({
                value: { text: "Semester 1", id: 1 }
              });
              setCurrSemPMProfile(sem1PMProfile);
              setCurrSemAppraisal(sem1Appraisal);
              setCurrSemFeedback(sem1Feedbacks);
            }}
          >
            <X width={48} height={48} />
          </button>
        </div>

        <div className="flex flex-row-1 justify-center items-start w-full">
          {isShowGradesSummary &&
            <div className="flex flex-col w-full justify-center items-center p-[5%]">
              <Chart style={{width: "90%", height: 500}}>
                <ChartTitle text="Average Grades" />
                <ChartCategoryAxis>
                  <ChartCategoryAxisItem categories={gradeCategoriesData}>
                    <ChartCategoryAxisTitle text="Grades" />
                  </ChartCategoryAxisItem>
                </ChartCategoryAxis>
                <ChartSeries>
                  <ChartSeriesItem type="column" gap={.25} data={avgGradeHistoData} color={"#3f51b5"} />
                </ChartSeries>
              </Chart>

              <div className="h-8 w-full" />
              
              <div className="flex justify-start items-center w-full section-header-wrapper">
                <h2 className="section-header">Your Assignment History:</h2>
              </div>

              <Grid
                style={{ height: "500px", width: "100%" }}
                data={assignmentHistoryData}
                dataItemKey="id"
                sortable={true}
                filterable={true}
                pageable={true}
                editable={{ enabled: false, mode: undefined }}
                pageSize={10}
              >
                <Column field="id" title="ID" editable={false} filterable={false} width="90px" />
                <Column field="assignment" title="Assignment" />
                <Column field="module" title="Module" width="190px" />
                <Column field="dateCompleted" title="Completed On" width="150px" />
                <Column field="finalGrade" title="Grade" width="120px" />
              </Grid>

            </div>
          }

          {isShowSubmissionSummary &&
            <div className="flex flex-col w-full justify-center items-center p-[5%]">
              <Chart style={{width: 500, height: 500}}>
                <ChartTitle text="Submission Rating" />
                <ChartSeries>
                  <ChartSeriesItem type="donut" data={submissionRatingData} categoryField="kind"
                  field="percent">
                    <ChartSeriesLabels color="#fff" background="none" content={(e) => e.category} />
                  </ChartSeriesItem>
                </ChartSeries>
                <ChartLegend visible={false} />
              </Chart>

              <div className="h-8 w-full" />
              
              <div className="flex justify-start items-center w-full section-header-wrapper">
                <h2 className="section-header">Your Assignment History:</h2>
              </div>

              <Grid
                style={{ height: "500px", width: "100%" }}
                data={submissionHistoryData}
                dataItemKey="id"
                sortable={true}
                filterable={true}
                pageable={true}
                editable={{ enabled: false, mode: undefined }}
                pageSize={10}
              >
                <Column field="id" title="ID" editable={false} filterable={false} width="90px" />
                <Column field="assignment" title="Assignment" />
                <Column field="module" title="Module" width="190px" />
                <Column field="submission" title="Submission" width="180px" />
                <Column field="finalGrade" title="Grade" width="120px" />
              </Grid>

            </div>
          }

          {isShowAppraisalSummary &&
            <div className="flex flex-col w-full justify-center items-center p-[5%]">
              <Chart 
                renderAs={"canvas"}
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
                    color={"#e51a5f"}
                    data={overallAppraisalRating}
                    field="score"
                    categoryField="name"
                    name="Skill Score"
                  />
                </ChartSeries>
                <ChartValueAxis>
                  <ChartValueAxisItem labels={{ format: '0' }} max={10} min={0} />
                </ChartValueAxis>
                <ChartTitle position={"bottom"} text="Overall Peer Appraisal Rating" />
                <ChartLegend visible={false} />
              </Chart>

              <div className="h-8 w-full" />
              
              <div className="flex justify-start items-center w-full section-header-wrapper">
                <h2 className="section-header">Your Appraisal Summary (by Semester):</h2>
              </div>

              <div className="flex justify-end items-center w-full">
                <DropDownList 
                  id="semesters" 
                  data={semesters} 
                  textField="text" 
                  dataItemKey="id"
                  value={selectedSem.value}
                  onChange={
                    (event: DropDownListChangeEvent) => {
                      setSelectedSem({value: event.target.value});
                      if (parseInt(event.target.value.id) == 1){
                        setCurrSemAppraisal(sem1Appraisal);
                        setCurrSemFeedback(sem1Feedbacks);
                      } else if (parseInt(event.target.value.id) == 2) {
                        setCurrSemAppraisal(sem2Appraisal);
                        setCurrSemFeedback(sem2Feedbacks);
                      } else if (parseInt(event.target.value.id) == 3) {
                        setCurrSemAppraisal(sem3Appraisal);
                        setCurrSemFeedback(sem2Feedbacks);
                      }
                    }
                  }
                  style={{ width: 300 }}
                />
              </div>

              <Chart style={{
                  width: "900px",
                  minWidth: "700px",
                  height: "500px",
                  minHeight: "400px",
                  fontSize: "1.2rem"
                }}
                onRefresh={refreshAppraisalChart}  
              >
                <ChartTitle text="Appraisal Rating (by Category)" position="bottom" />
                <ChartSeries>
                  <ChartSeriesItem 
                    type="rangeColumn" 
                    data={currSemAppraisal} 
                    fromField="min"
                    toField="max"
                    categoryField="name"
                  >
                    <ChartSeriesLabels>
                      <ChartSeriesLabelsFrom content={(e) => `${e.value.from}`} />
                      <ChartSeriesLabelsTo content={(e) => `${e.value.to}`} />
                    </ChartSeriesLabels>
                  </ChartSeriesItem>
                </ChartSeries>
                <ChartCategoryAxis>
                  <ChartCategoryAxisItem labels={{ rotation: "auto" }} />
                </ChartCategoryAxis>
              </Chart>

            </div>
          }

          {isShowPMProfileSummary && 
            <div className="flex flex-col w-full justify-center items-center p-[5%]">
              <div className="flex justify-start items-center w-full section-header-wrapper">
                <h2 className="section-header">Your Project Management Profile (by Semester):</h2>
              </div>

              <div className="flex justify-end items-center w-full">
                <DropDownList 
                  id="semesters" 
                  data={semesters} 
                  textField="text" 
                  dataItemKey="id"
                  value={selectedSem.value}
                  onChange={
                    (event: DropDownListChangeEvent) => {
                      setSelectedSem({value: event.target.value});
                      if (parseInt(event.target.value.id) == 1) {
                        setCurrSemPMProfile(sem1PMProfile);
                        setCurrSemFeedback(sem1Feedbacks);
                      } else if (parseInt(event.target.value.id) == 2) {
                        setCurrSemPMProfile(sem2PMProfile);
                        setCurrSemFeedback(sem2Feedbacks);
                      } else if (parseInt(event.target.value.id) == 3) {
                        setCurrSemPMProfile(sem3PMProfile);
                        setCurrSemFeedback(sem3Feedbacks);
                      }
                    }
                  }
                  style={{ width: 300 }}
                />
              </div>

              <Chart style={{
                  width: "900px",
                  minWidth: "700px",
                  height: "500px",
                  minHeight: "400px",
                  fontSize: "1.2rem"
                }}
                onRefresh={refreshPMProfileChart}  
              >
                <ChartTitle text="PM Profile Summary (by Category)" position="bottom" />
                <ChartSeries>
                  <ChartSeriesItem 
                    type="rangeColumn" 
                    data={currSemPMProfile} 
                    minSize={1}
                    maxSize={10}
                    fromField="min"
                    toField="max"
                    categoryField="name"
                  >
                    <ChartSeriesLabels>
                      <ChartSeriesLabelsFrom content={(e) => `${e.value.from}`} />
                      <ChartSeriesLabelsTo content={(e) => `${e.value.to}`} />
                    </ChartSeriesLabels>
                  </ChartSeriesItem>
                </ChartSeries>
                <ChartCategoryAxis>
                  <ChartCategoryAxisItem labels={{ rotation: "auto" }} />
                </ChartCategoryAxis>
              </Chart>

              <div className="h-8 w-full" />
              
              <div className="flex justify-start items-center w-full section-header-wrapper">
                <h2 className="section-header">Your Top Feedbacks (by Semester):</h2>
              </div>

              {/* Current Semester Feedbacks Section starts here. */}
                <ListView data={currSemFeedback} item={feedbackRender} style={{ width: '100%' }} />
              {/* Current Semester Feedbacks Section ends here. */}
            </div>
          }
        </div>
			</div>
      {/* Right Panel ends here. */}
    </div>
  );
}
