'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
	{ label: 'Profile', href: '/' },
	{ label: 'Projects', href: '/projects' },
];

export default function TabNav() {
	const pathname = usePathname();

	return (
		<nav className="flex justify-center px-6 pt-8 pb-0 bg-zinc-50">
			<div className="flex gap-1 bg-zinc-100 rounded-full p-1">
				{tabs.map(({ label, href }) => {
					const isActive = pathname === href;
					return (
						<Link
							key={href}
							href={href}
							className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-150 ${
								isActive
									? 'bg-white text-zinc-900 shadow-sm'
									: 'text-zinc-500 hover:text-zinc-700'
							}`}>
							{label}
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
