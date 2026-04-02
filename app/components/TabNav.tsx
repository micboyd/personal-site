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
		<nav className="sticky top-0 z-50 flex justify-center px-6 py-4 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
			<div className="flex gap-1 p-1 rounded-full bg-white/5 border border-white/10">
				{tabs.map(({ label, href }) => {
					const isActive =
						href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');
					return (
						<Link
							key={href}
							href={href}
							className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
								isActive
									? 'bg-white text-zinc-900 shadow-sm'
									: 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5'
							}`}>
							{label}
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
