"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { 
  Menu, 
  X, 
  ChevronLeft,
  ChevronRight, 
  Expand,
  ArrowLeft, 
  UserPlus, 
  UserMinus, 
  MessagesSquare, 
  MessageCircleReply, 
  Paperclip,
  SendHorizonal } from "lucide-react";
import SideDrawer from "@/shared/components/sidedrawer";

import {
  ListView,
  ListViewItemProps,
  ListViewItemWrapper,
} from "@progress/kendo-react-listview";
import { ProgressBar } from '@progress/kendo-react-progressbars';
import { ChipList, Chip, ChipProps, Button } from '@progress/kendo-react-buttons';
import { TextBox, TextBoxChangeEvent } from '@progress/kendo-react-inputs';

import DOMPurify from 'dompurify';

import { assignmentsData } from "@/shared/data/assignments-page-data";
import { assignmentDetails, assignmentFeedbacks } from "@/shared/data/assignments-page-data";

interface ITeamMember {
	id: string;
	studentName: string;
	profileImg: string;
}

interface ITag {
	id: string;
	tagTitle: string;
}

interface IAssignmentDetails {
	id: string;
	assignmentTitle: string;
	module: string;
	dueDate: string;
	description: string;
	progressPercent: number;
	isGroup: boolean;
	status: string;
	teamMembers: ITeamMember[];
	tags: ITag[];
}

export default function Assignments() {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  const [isShowDetails, setIsShowDetails] = useState<boolean>(false);

  // We will make sure that all the sections are "Expanded" by default.
  const [isOngoingExpanded, setIsOngoingExpanded] = useState<boolean>(true);
  const [isSubmittedExpanded, setIsSubmittedExpanded] = useState<boolean>(true);
  const [isCompletedExpanded, setIsCompletedExpanded] = useState<boolean>(true);

	const [details, setDetails] = useState<IAssignmentDetails>(assignmentDetails);
	const [isEditTitle, setIsEditTitle] = useState<boolean>(false);
	const titleInputRef = useRef(null);

  const [isShowRightPanel, setIsShowRightPanel] = useState(false);
  const [isShowDiscussion, setIsShowDiscussion] = useState(false);
  const [isShowImageModal, setIsShowImageModal] = useState(false);
  const [currModalImage, setCurrModalImage] = useState<string>("");
  const [isShowFeedbacks, setIsShowFeedbacks] = useState(false);

	const assignmentsRender = (props: ListViewItemProps) => {
    const item = props.dataItem;
	
		return (
      <ListViewItemWrapper
        className="p-8 h-[100px]"
        style={{ borderBottom: "1px solid lightgrey" }}
      >
        <div 
          className="flex flex-row w-full h-[80px] mt-[10px] mb-[10px]"
          onClick={() => setIsShowDetails(true)}
        >
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

  const feedbackRender = (props: ListViewItemProps) => {
    const item = props.dataItem;
  
    return (
      <ListViewItemWrapper
      className="p-[5px] h-max"
      style={{ borderBottom: "1px solid lightgrey" }}
    >
      <div className="flex flex-col w-full h-full p-4"> {/* Use flex-col, add padding */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3"> 
            <Image
              src={item.profilePic}
              alt={item.lecturer}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div> 
            <p className="font-medium">{item.lecturer}</p>
            <span className="text-xs text-gray-500">{item.dateGiven}</span> 
          </div>
        </div>
        <div className="mt-3 text-gray-800 text-lg italic"> {/* Feedback content styling */}
          {item.feedbackContent}
        </div>
        <div className="flex justify-start items-center w-max">
          <button className="bg-gray-200 rounded-md px-3 py-2 mt-3 text-sm">
            Related Task: <strong>{item.task.taskTitle}</strong>
          </button>
        </div>
      </div>
    </ListViewItemWrapper>
    );
  }

  const teamMembersRender = (props: ListViewItemProps) => {
    const item = props.dataItem;
	
		return (
      <ListViewItemWrapper
        className="p-2 h-[64px]"
        style={{ borderBottom: "1px solid lightgrey" }}
      >
        <div className="flex w-full h-full items-center">
          <div className="flex w-[64px] justify-center items-center aspect-square">
            <Image alt={item.studentName} src={item.profileImg} width={48} height={48} className="rounded-full" />
          </div>
          <div className="flex-1 items-center justify-start pl-4 text-xl">
            {item.studentName}
          </div>
          <div className="flex w-[64px] justify-center items-center aspect-square">
            <button type="button" className="flex border-1 border-gray-500 w-12 h-12 cursor-pointer items-center justify-center rounded-full">
              <UserMinus width={24} height={24} />
            </button>
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
          {!isShowDetails ? (
            <div className="flex flex-col items-center w-full h-max">
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

              {isOngoingExpanded ? (
                <div className={`flex items-center w-full h-max mb-16`}>	
                  {/* Ongoing Assignments Section starts here. */}
                  <ListView data={assignmentsData.filter(a => a.status === "ongoing")} item={assignmentsRender} style={{ width: '100%', height: (assignmentsData.filter(a => a.status === "ongoing").length * 110) + 2 }} />
                  {/* Ongoing Assignments Section ends here. */}
                </div>
              ) : (<div className="flex h-16 w-full" />)}

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

              {isSubmittedExpanded ? (
                <div 
                  className="flex items-center w-full mb-16"
                  style={{
                    height: (assignmentsData.filter(a => a.status === "submitted").length * 110) + 2
                  }}
                >
                  {/* Submitted Assignments Section starts here. */}
                  <ListView data={assignmentsData.filter(a => a.status === "submitted")} item={assignmentsRender} style={{ width: '100%', height: (assignmentsData.filter(a => a.status === "submitted").length * 110) + 2 }} />
                  {/* Submitted Assignments Section ends here. */}
                </div>
              ) : (<div className="flex h-16 w-full" />)}

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

              {isCompletedExpanded ? (
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
              ) : (<div className="flex h-16 w-full" />)}
            </div>
          ) : (
            <div className="flex flex-col items-start w-full h-max">
              <div className="flex-row w-full h-16 justify-start px-4">
                <button type="button" onClick={() => setIsShowDetails(false)} className="flex flex-row items-center justify-start gap-x-2">
                  <ArrowLeft width={24} height={24} color={"#666"} /> Back to Assignments
                </button>
              </div>
              <div className="flex-1 flex-row w-full h-max justify-start px-4">
                <div className="assignment-title-wrapper px-4 py-2">
									{isEditTitle 
										? (
											<TextBox
												ref={titleInputRef}
												fillMode={"flat"}
												style={{
													width: "100%",
													fontSize: "2.5rem",
													fontWeight: 400,
													letterSpacing: "1px",
												}}
												value={details.assignmentTitle}
												onChange={(event: TextBoxChangeEvent) => setDetails(prevDetails => ({...prevDetails, assignmentTitle: event.value as string}))}
												onBlur={() => setIsEditTitle(false)}
											/>
										) : (
											<h1 
												className="assignment-title"
												onClick={() => setIsEditTitle(true)}
											>
												{details.assignmentTitle}
											</h1>
										)
									}
                </div>
                <div className="flex w-full h-max items-center">
                  <div className="flex w-1/2 justify-start">Due Date: {details.dueDate}</div>
                  <div className="flex w-1/2 justify-end">Module: {details.module}</div>
                </div>
                <div 
                  className="assignment-desc w-full h-max items-start justify-start p-4 my-4 min-h-[200px] rounded-md bg-gray-100"
                  dangerouslySetInnerHTML={{ __html: DOMPurify().sanitize(details.description) }}
                />
                <div className="w-full items-center justify-center h-12 mt-9 rounded-md">
                  <ProgressBar 
                    min={0}
                    max={100}
                    value={Math.round(details.progressPercent * 100)}
                    labelVisible={true} 
                    labelPlacement={"end"}
                    label={props => {
                      return <div className="h-full items-center mb-2 text-[16px]">{props.value}% Completed</div>;
                    }}
                    progressStyle={{
                      borderRadius: "4px",
                      backgroundColor: "darkgreen"
                    }}
                    style={{
                      height: "80%",
                      width: "100%",
                      borderRadius: "4px"
                    }} />
                </div>

                <div className="flex flex-row items-center w-full mt-4 section-header-wrapper">
                  <div className="flex-1 flex-col justify-start items-center">
                    <h2 className="section-header">Team members:</h2>
                  </div>
                  <div
                    className="flex justify-center items-center w-5 aspect-square transition-transform duration-250 ease-in-out"
                  >
                    <UserPlus className="h-4 w-4" />
                  </div>
                </div>

                <div className="flex w-full h-max">
                  <ListView data={details.teamMembers} item={teamMembersRender} className="w-full" style={{ height: (details.teamMembers.length * 64) + 2 }} />
                </div>

                <Button
                  fillMode={"solid"}
                  themeColor={"primary"}
                  className="mt-8 items-center justify-center rounded-lg"
                  onClick={() => {
                    setIsShowRightPanel(true);
                    setIsShowDiscussion(true);
                  }}
                  style={{
                    height: "64px",
                    width: "100%"
                  }}
                >
                  <div className="flex text-2xl w-full items-center">
                    Group Discussions&nbsp;<MessagesSquare className="ml-2" width={20} height={20} color={"#efefef"} />
                  </div>
                </Button>

                <Button
                  fillMode={"solid"}
                  themeColor={"secondary"}
                  className="w-full  h-16 mt-6 items-center justify-center rounded-lg"
                  onClick={() => {
                    setIsShowRightPanel(true);
                    setIsShowFeedbacks(true);
                  }}
                >
                  <div className="flex text-2xl w-full items-center">
                    Lecturer&apos;s Feedbacks&nbsp;<MessageCircleReply className="ml-2" width={20} height={20} color={"#efefef"} />
                  </div>
                </Button>

              </div>
            </div>
          )}
        </div>
        {/* Left Panel content ends here. */}
      </div>
      <div
        className="flex-1 flex-col bg-white p-4 relative h-screen overflow-x-hidden overflow-y-hidden w-[50%] opacity-0 transition-all duration-250 ease-out"
        style={{
          transitionDelay: isShowRightPanel ? "250ms" : "0ms", // Delay for showing
          opacity: isShowRightPanel ? 1 : 0,
        }}
      >
        {/* Image Modal Overlay */}
        {isShowImageModal && (
          <div className="absolute left-0 top-0 w-full h-full z-40 items-center justify-center"
            style={{
              backgroundColor: "#000000AA"
            }}
          >
            <div className="relative">  {/* Container for image and controls */}
              <button className="absolute top-4 right-4 z-50 text-white"> 
                <X size={32} onClick={() => setIsShowImageModal(false)} /> {/* Close button */}
              </button>
            </div>

            <div className="w-[90%] h-[90%] opacity-100">
              {/* Left Chevron button */}
              {currModalImage.includes("02") && (
                <button className="absolute top-[50%] left-5 z-50 text-white"
                  onClick={() => {
                    if (currModalImage.includes("02")) {
                      setCurrModalImage("/sample-wireframes-01.jpg");
                    }
                  }}
                > 
                  <ChevronLeft 
                    size={48} 
                  /> 
                </button>
              )}

              <Image src={currModalImage} alt="attachment image" fill style={{ objectFit: "contain" }} className="aspect-auto" />
              
              {/* Right Chevron button */}
              {currModalImage.includes("01") && (
                <button 
                  className="absolute top-[50%] right-5 z-50 text-white"
                  onClick={() => {
                    if (currModalImage.includes("01")) {
                      setCurrModalImage("/sample-wireframes-02.jpg");
                    }
                  }}
                > 
                  <ChevronRight size={48} /> 
                </button>
              )}

            </div>
          </div>
        )}
        

        <div className="flex w-full items-center justify-end h-max">
          <button 
            type="button" 
            onClick={() => {
              setIsShowRightPanel(false);
              setIsShowDiscussion(false);
              setIsShowFeedbacks(false);
            }}
          >
            <X width={32} height={32} color={"#141414"} />
          </button>
        </div>

        {/* Group Discussion section starts here. */}
        {isShowDiscussion && (
          <div className="flex-1 w-full h-[80%] flex flex-col">

            <div className="flex justify-start items-center h-max w-full section-header-wrapper">
              <h2 className="section-header">Group Discussions:</h2>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-grow flex-col p-4 overflow-y-auto">

              {/* Tuesday */}
              <div className="flex mb-4">
                <div className="flex items-start mr-4"> 
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                    <Image 
                      src="/female-student-chinese.jpg" 
                      alt="Profile Picture" 
                      width={50} 
                      height={50} 
                      className="object-cover" 
                    />
                  </div>
                  <div className="bg-gray-200 rounded-lg p-3 max-w-xs">
                    <p className="text-xs font-medium text-gray-800">Agnes Yeo</p> 
                    <p className="text-sm">Hey everyone, just wanted to check in and see how the project&apos;s coming along!</p>
                    <span className="text-xs text-gray-500">Tue 10:15 am</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mb-4">
                <div className="bg-blue-500 text-white rounded-lg p-3 max-w-xs ml-4"> 
                  <p className="text-sm">Hey Agnes! I&apos;m making good progress on the research. How&apos;s the mood board coming along?</p>
                  <span className="text-xs text-gray-100">Tue 10:45 am</span> 
                </div>
              </div>

              {/* Wednesday */}
              <div className="flex mb-4">
                <div className="flex items-start mr-4"> 
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                    <Image 
                      src="/female-student-chinese.jpg" 
                      alt="Profile Picture" 
                      width={50} 
                      height={50} 
                      className="object-cover" 
                    />
                  </div>
                  <div className="bg-gray-200 rounded-lg p-3 max-w-xs">
                    <p className="text-xs font-medium text-gray-800">Agnes Yeo</p> 
                    <p className="text-sm">Hey guys, I just finished working on the 2nd moodboard. I love to get your feedbacks.</p>
                    <span className="text-xs text-gray-500">Wed 11:01 am</span>
                  </div>
                </div>
              </div>

              <div className="flex mb-4">
                <div className="flex items-start mr-4"> 
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                    <Image 
                      src="/female-student-indian.jpg" 
                      alt="Profile Picture" 
                      width={50} 
                      height={50} 
                      className="object-cover" 
                    />
                  </div>
                  <div className="bg-gray-200 rounded-lg p-3 max-w-xs">
                    <p className="text-xs font-medium text-gray-800">Avathi Kumar</p> 
                    <p className="text-sm">Hey Weizhi, how is the wireframes going? Have you finished on the web version?</p>
                    <span className="text-xs text-gray-500">Wed 6:20 pm</span>
                  </div>
                </div>
              </div>

              {/* Thursday */}
              <div className="flex justify-end mb-4">
                <div className="bg-blue-500 text-white rounded-lg p-3 max-w-xs ml-4"> 
                  <p className="text-sm">Almost finished with the wireframes! I just need to finish up the responsive layouts for mobile. Should have them done by tomorrow. 😊</p>
                  <div className="flex flex-row gap-x-2 mt-2"> {/* Container for attachment previews */}
                    <div 
                      className="w-1/2 relative"
                      onClick={() => { 
                        setIsShowImageModal(true); 
                        setCurrModalImage("/sample-wireframes-01.jpg") 
                      }}
                    > {/* Add "relative" for image overlay */}
                      <div className="relative aspect-square overflow-hidden rounded-md">
                        <Image 
                          src="/sample-wireframes-01.jpg"
                          fill={true}
                          quality={90}
                          alt="Mobile friendly wireframes" 
                          className="object-cover w-1/2 aspect-square" 
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-50 bg-gray-900 rounded-md transition duration-300">
                        <Expand className="text-white" size={32} /> {/* Expand icon */}
                      </div>
                    </div>
                    <div 
                      className="w-1/2 relative"
                      onClick={() => { 
                        setIsShowImageModal(true); 
                        setCurrModalImage("/sample-wireframes-02.jpg") 
                      }}
                    >
                      <div className="relative aspect-square overflow-hidden rounded-md"> {/* Image 2 */}
                        <Image 
                          src="/sample-wireframes-02.jpg"
                          alt="Mobile friendly wireframes"
                          quality={90}
                          fill={true}
                          className="object-cover w-1/2 aspect-square" 
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-50 bg-gray-900 rounded-md transition duration-300">
                        <Expand className="text-white" size={32} /> {/* Expand icon */}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-100">Thu 2:15 pm</span> 
                </div>
              </div>

              <div className="flex mb-4">
                <div className="flex items-start mr-4"> 
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                    <Image 
                      src="/male-student-chinese.jpg" 
                      alt="Profile Picture" 
                      width={50} 
                      height={50} 
                      className="object-cover" 
                    />
                  </div>
                  <div className="bg-gray-200 rounded-lg p-3 max-w-xs">
                    <p className="text-xs font-medium text-gray-800">Michael Chan</p> 
                    <p className="text-sm">Sounds good! Let me know if you need any help.</p>
                    <span className="text-xs text-gray-500">Thu 11:32 am</span>
                  </div>
                </div>
              </div>

              <div className="flex mb-4">
                <div className="flex items-start mr-4"> 
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                    <Image 
                      src="/male-student-chinese.jpg" 
                      alt="Profile Picture" 
                      width={50} 
                      height={50} 
                      className="object-cover" 
                    />
                  </div>
                  <div className="bg-gray-200 rounded-lg p-3 max-w-xs">
                    <p className="text-xs font-medium text-gray-800">Michael Chan</p> 
                    <p className="text-sm">Great work everyone! Let&apos;s aim to finalize everything by this weekend so we can start practicing the presentation. 👍</p>
                    <span className="text-xs text-gray-500">Thu 8:55 pm</span>
                  </div>
                </div>
              </div>

              {/* Friday */}
              <div className="flex justify-end mb-4">
                <div className="bg-blue-500 text-white rounded-lg p-3 max-w-xs ml-4"> 
                  <p className="text-sm">Will do! I&apos;m just adding the finishing touches to the mobile wireframes. 😄</p>
                  <span className="text-xs text-gray-100">Fri 10:02 am</span> 
                </div>
              </div>

              {/* ... more messages would be added here ... */}

            </div>

            {/* Message Input Area */}
            <div className="border-t border-gray-300 p-4 bg-white"> 
              <div className="flex flex-col justify-start"> {/* Use flex-col for vertical layout */}
                <div className="flex"> {/* Container for textarea and send button */}
                  <textarea 
                    className="flex-grow resize-none border border-gray-400 rounded-md p-2 mr-2 focus:outline-none focus:ring focus:ring-blue-300 bg-gray-100" 
                    placeholder="Type your message..."
                  ></textarea>
                  <button className="flex bg-blue-500 text-white px-4 py-2 rounded-md self-start items-center justify-center ml-2"> 
                    Send <SendHorizonal width={20} height={20} className="ml-1" />
                  </button>
                </div>

                <button className="bg-gray-300 rounded-md py-2 px-4 mt-2 flex items-center justify-center w-max"> {/* Attachment button below */}
                  <Paperclip width={16} height={16} className="mr-1"/> Add Attachments
                </button>
              </div>
            </div>

          </div>
        )}
        {/* Group Discussion section ends here. */}
        

        {/* Lecturer's Feedbacks section starts here. */}
        {isShowFeedbacks && (
          <div className="flex-1 w-full h-max flex flex-col">
            <div className="flex justify-start items-center w-full section-header-wrapper">
              <h2 className="section-header">Lecturer Feedbacks:</h2>
            </div>

            <div className="flex w-full h-max">
              {/* Current Semester Feedbacks Section starts here. */}
              <ListView data={assignmentFeedbacks} item={feedbackRender} style={{ width: '100%' }} />
              {/* Current Semester Feedbacks Section ends here. */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
