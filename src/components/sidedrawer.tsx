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
        onClick={() => setIsOpen(!isOpen)}
      >
        { isOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} /> }
      </button>

			{/* Side Drawer Content (similar to previous example) */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 shadow-lg transform transition-transform ease-in-out duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`} 
      >

			{/* Our navigation links here. */}
			<nav className="mt-16 w-full"> {/* Add margin-top */}
				<ul>
					<li className="px-4 py-2 text-white hover:bg-gray-700"> 
						<Link href="/">Dashboard</Link>
					</li>
					<li className="px-4 py-2 text-white hover:bg-gray-700"> 
						<Link href="/assignments">Assignments</Link>
					</li>
					<li className="px-4 py-2 text-white hover:bg-gray-700"> 
						<Link href="/tasks">Tasks</Link>
					</li>
				</ul>
			</nav>

      </div>
		</div>
	);
}