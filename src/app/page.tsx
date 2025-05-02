"use client";

import SideDrawer from "@/components/sidedrawer";

export default function Dashboard() {
  return (
    <div className="grid grid-rows-4 h-screen w-screen">
      <div className="flex justify-end items-center p-4">
        {/* Put our student profile picture here. */}
      </div>

      <div class="flex justify-center items-center gap-4 p-4">
        <div class="flex flex-col items-center justify-center w-1/3 aspect-square rounded-lg bg-gray-100 p-4">
          <span class="text-xs font-medium text-gray-600">Avg. Grade</span>
          <span class="text-2xl font-bold">B+</span>
        </div>
        <div class="flex flex-col items-center justify-center w-1/3 aspect-square rounded-lg bg-gray-100 p-4">
          <span class="text-xs font-medium text-gray-600">Submission Rating</span>
          <span class="text-2xl font-bold">78.8%</span>
        </div>
        <div class="flex flex-col items-center justify-center w-1/3 aspect-square rounded-lg bg-gray-100 p-4">
          <span class="text-xs font-medium text-gray-600">Appraisal Rating</span>
          <span class="text-2xl font-bold">4.1</span>
        </div>
      </div>
    </div>
  );
}
