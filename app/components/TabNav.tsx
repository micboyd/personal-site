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
		<nav className="sticky top-0 z-50 bg-white border-b border-zinc-200">
			<div className="mx-auto max-w-6xl px-6">
				<div className="flex gap-8">
					{tabs.map(({ label, href }) => {
						const isActive =
							href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');
						return (
							<Link
								key={href}
								href={href}
								className={`py-4 text-sm font-semibold border-b-2 transition-colors duration-150 ${
									isActive
										? 'border-[#FF385C] text-zinc-900'
										: 'border-transparent text-zinc-500 hover:text-zinc-900 hover:border-zinc-300'
								}`}>
								{label}
							</Link>
						);
					})}
				</div>
			</div>
		</nav>
	);
}
