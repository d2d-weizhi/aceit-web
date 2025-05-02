"use client";

import Image from "next/image";
import SideDrawer from "@/components/sidedrawer";

export default function Dashboard() {
  return (
    <div className="grid grid-rows-4 h-screen w-screen grid-flow-row">
      <div className="flex flex-row items-center p-4 h-[84px]">
        <div className="flex-1 flex-col">
          <SideDrawer />
        </div>
        <div className="flex w-auto">
          <Image src="/green-monster.png" alt={"Sample Profile Image"} width={56} height={56} className="rounded-full" />
        </div>
      </div>

      <div className="flex justify-center items-center gap-20 py-8 px-20">
        <div className="flex flex-col items-center justify-center align-top w-1/3 stats-widget rounded-xl min-w-[410px] min-h-[340px] bg-gray-100 p-8">
          <span className="text-xl font-medium text-gray-600 align-top">Avg. Grade</span>
          <div
            className="flex flex-row justify-center items-center w-full h-[90%]"
            style={{
              fontSize: "7.5rem",
              fontWeight: "300"
            }}
          >B+</div>
        </div>
        <div className="flex flex-col items-center justify-center align-top w-1/3 stats-widget rounded-xl min-w-[410px] min-h-[340px] bg-gray-100 p-8">
          <span className="text-xl font-medium text-gray-600 align-top">Submission Rating</span>
          <span
            className="flex flex-row justify-center items-center w-full h-[90%]"
            style={{
              fontSize: "7.5rem",
              fontWeight: "300"
            }}  
          >78.8%</span>
        </div>
        <div className="flex flex-col items-center justify-center align-top w-1/3 stats-widget rounded-xl min-w-[410px] min-h-[340px] bg-gray-100 p-8">
          <span className="text-xl font-medium text-gray-600 align-top">Appraisal Rating</span>
          <span
            className="flex flex-row justify-center items-center w-full h-[90%]"
            style={{
              fontSize: "7.5rem",
              fontWeight: "300"
            }}  
          >4.1</span>
        </div>
      </div>
    </div>
  );
}
