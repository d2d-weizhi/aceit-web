"use client";

// import SideDrawer from "@/components/sidedrawer";

export default function Dashboard() {
  return (
    <div className="grid grid-rows-4 h-screen w-screen">
      <div className="flex justify-end items-center p-4">
        {/* Put our student profile picture here. */}
      </div>

      <div className="flex justify-center items-center gap-8 p-8">
        <div className="flex flex-col items-center justify-center w-1/3 aspect-square rounded-lg bg-gray-100 p-8">
          <span className="text-xs font-medium text-gray-600">Avg. Grade</span>
          <span 
            styles={{
              fontSize: "2.5rem",
              fontWeight: "300"
            }}
          >B+</span>
        </div>
        <div className="flex flex-col items-center justify-center w-1/3 aspect-square rounded-lg bg-gray-100 p-8">
          <span className="text-xs font-medium text-gray-600">Submission Rating</span>
          <span
            styles={{
              fontSize: "2.5rem",
              fontWeight: "300"
            }}  
          >78.8%</span>
        </div>
        <div className="flex flex-col items-center justify-center w-1/3 aspect-square rounded-lg bg-gray-100 p-8">
          <span className="text-xs font-medium text-gray-600">Appraisal Rating</span>
          <span
            styles={{
              fontSize: "2.5rem",
              fontWeight: "300"
            }}  
          >4.1</span>
        </div>
      </div>
    </div>
  );
}
