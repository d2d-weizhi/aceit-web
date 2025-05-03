"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function SideDrawer() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div>
			{/* Hamburger Button */}
      <button
	      type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-[64px] h-[64px] items-center justify-center bg-transparent p-2"
      >
	      <Menu strokeWidth={1.5} width="48px" height="48px" />
      </button>

			{/* Side Drawer Content (similar to the previous example) */}
      <div
        className={`fixed top-0 left-0 h-screen w-72 bg-gray-800 shadow-lg transform transition-transform ease-in-out duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`} 
      >
	      <button
		      type="button"
		      onClick={() => setIsOpen(!isOpen)}
		      className="w-[64px] h-[64px] items-center justify-center bg-transparent p-2 m-4"
	      >
		      <X strokeWidth={1.5} color={"white"} width="48px" height="48px" />
	      </button>
				{/* Our navigation links here. */}
				<nav className="mt-16 w-full"> {/* Add margin-top */}
					<ul>
						<li className="px-6 py-3 text-white text-xl hover:bg-gray-700">
							<Link href="/">Dashboard</Link>
						</li>
						<li className="px-6 py-3 text-white text-xl hover:bg-gray-700">
							<Link href="/assignments">Assignments</Link>
						</li>
						<li className="px-6 py-3 text-white text-xl hover:bg-gray-700">
							<Link href="/tasks">Tasks</Link>
						</li>
					</ul>
				</nav>

      </div>
		</div>
	);
}