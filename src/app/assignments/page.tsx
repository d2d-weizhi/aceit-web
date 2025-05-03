"use client";

import { useState } from "react";
import SideDrawer from "@/shared/components/sidedrawer";

export default function Assignments() {
	const [isShowRightPanel, setIsShowRightPanel] = useState(false);
		
			return (
				<div className="flex flex-row bg-gray-300 w-screen justify-center items-center">
					<div 
						className="flex-col bg-white p-4 h-screen overflow-y-auto w-[50%] transition-all duration-250 ease-out"
						style={{
							transform: isShowRightPanel ? 'translateX(0)' : 'translateX(50%)',
							transitionDelay: isShowRightPanel ? '0ms' : '250ms' // Delay for hiding
						}}
					> 
						{/* Side Drawer inside the left panel */}
						<SideDrawer /> 
		
						<button type="button" onClick={() => setIsShowRightPanel(!isShowRightPanel)}>
							Show Right Panel
						</button>
						
					</div>
					<div 
						className="flex-col bg-white p-4 relative h-screen overflow-y-auto w-[50%] opacity-0 transition-all duration-250 ease-out"
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