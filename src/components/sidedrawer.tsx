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
        className="w-[56px] h-[56px] items-center justify-center bg-transparent p-4"
      >
	      <Menu strokeWidth={1.5} />
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
		      className="w-[56px] h-[56px] items-center justify-center bg-transparent m-4 p-4"
	      >
		      <X strokeWidth={1.5} color={"white"} />
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