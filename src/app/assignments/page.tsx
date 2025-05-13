"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import SideDrawer from "@/shared/components/sidedrawer";

export default function Assignments() {
	const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
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
										<X width={64} height={64} strokeWidth={1.5} color={"#FEFEFE"}
											className={`menu-button ${ isShowMenu ? 'fade-in' : 'fade-out' }`}
										/>
									) : (
										<Menu width={64} height={64} strokeWidth={1.5} color={"#141414"}
											className={`menu-button ${ isShowMenu ? 'fade-out' : 'fade-in' }`}
										/>
									)}
								</button>
								<SideDrawer isShow={isShowMenu} />
							</div>
							<div className="flex w-auto p-2">
								<Image src="/green-monster.png" alt={"Sample Profile Image"} width={48} height={48} className="rounded-full" />
							</div>
						</div>
						{/* Top Bar ends here. */}

						{/* Left Panel content starts here. */}
						<div className="flex flex-row items-center p-2 h-max z-10">
							{/* We will put this here to prevent a linting error on vercel. */}
							<button onClick={() => setIsShowRightPanel(!isShowRightPanel)}>
								Show Right Panel
							</button>
						</div>
						{/* Left Panel content ends here. */}
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