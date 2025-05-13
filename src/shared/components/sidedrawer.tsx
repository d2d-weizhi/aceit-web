"use client";

import Link from "next/link";

export default function SideDrawer({isShow} : { isShow: boolean}) {
	return (
    <div
      className={`fixed top-0 left-0 h-screen w-72 bg-gray-800 shadow-lg transform transition-transform ease-out duration-500 z-20 ${
        isShow ? 'translate-x-0' : '-translate-x-full'
      }`}
		>
			{/* Our navigation links here. */}
			<nav className="mt-24 w-full"> {/* Add margin-top */}
				<ul>
					<li className="px-8 py-4 text-white text-xl hover:bg-gray-700">
						<Link href="/">Dashboard</Link>
					</li>
					<li className="px-8 py-4 text-white text-xl hover:bg-gray-700">
						<Link href="/assignments">Assignments</Link>
					</li>
					<li className="px-8 py-4 text-white text-xl hover:bg-gray-700">
						<Link href="/tasks">Tasks</Link>
					</li>
				</ul>
			</nav>
    </div>
	);
}