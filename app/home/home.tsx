'use client';

import Hero from '../components/layout/hero/hero';
import HeroSection from '../components/layout/hero/heroSection';

export default function Home() {
	const projectImages = ['/images/project-1.jpg', '/images/project-2.jpg'];

	const work = [
		{
			company: 'Acme Corp',
			role: 'Senior Software Engineer',
			date: '2022 — Present',
			location: 'Edinburgh, UK',
			points: [
				'Led migration to Next.js & edge runtime; reduced TTFB by ~35%.',
				'Designed a platform component library with Tailwind + shadcn/ui.',
				'Partnered with product to ship features across discovery → scale.',
			],
		},
		{
			company: 'Globex',
			role: 'Frontend Engineer',
			date: '2019 — 2022',
			location: 'Remote',
			points: [
				'Built data-heavy dashboards in React/TypeScript.',
				'Introduced performance budgets and CI checks.',
				'Improved Core Web Vitals into the green for top user flows.',
			],
		},
		{
			company: 'Globex',
			role: 'Frontend Engineer',
			date: '2019 — 2022',
			location: 'Remote',
			points: [
				'Built data-heavy dashboards in React/TypeScript.',
				'Introduced performance budgets and CI checks.',
				'Improved Core Web Vitals into the green for top user flows.',
			],
		},
		{
			company: 'Globex',
			role: 'Frontend Engineer',
			date: '2019 — 2022',
			location: 'Remote',
			points: [
				'Built data-heavy dashboards in React/TypeScript.',
				'Introduced performance budgets and CI checks.',
				'Improved Core Web Vitals into the green for top user flows.',
			],
		},
	];

	return (
		<div className="min-h-screen bg-white text-neutral-900 antialiased">
			{/* Optional header (currently unused in original) */}
			{/* <Header /> */}

			{/* Hero */}
			<HeroSection></HeroSection>

			{/* About / Bio */}
			<section className="mt-14 sm:mt-16 lg:mt-20">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
						<div className="lg:col-span-5 order-last lg:order-first">
							<div
								className="aspect-square aspect-[4/4] rounded-3xl border border-neutral-200 bg-neutral-100"
								style={{
									backgroundImage:
										"url('https://res.cloudinary.com/dlg9y5dfv/image/upload/v1748618269/munros/wotxdqiuzcbum5q6otb2.jpg')",
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							/>
						</div>
						<div className="lg:col-span-7">
							<h2 className="text-2xl sm:text-3xl font-semibold">About</h2>
							<p className="mt-3 text-neutral-600 leading-relaxed max-w-2xl">
								I care about craftsmanship and momentum. From product discovery and prototyping to
								hardening for scale, I help teams ship with intention and speed. My stack is TypeScript,
								Next.js, React, Node, and Tailwind — with a healthy respect for performance budgets.
							</p>
							<div className="mt-6 flex flex-wrap gap-3">
								{['TypeScript', 'Next.js', 'React', 'Node', 'Tailwind', 'Vercel', 'Postgres'].map(
									tag => (
										<span
											key={tag}
											className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600">
											{tag}
										</span>
									),
								)}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Work Experience (new) */}
			<section className="mt-14 sm:mt-16 lg:mt-20">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex items-end justify-between">
						<h2 className="text-2xl sm:text-3xl font-semibold">Work experience</h2>
					</div>

					<div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
						{/* Timeline column */}
						<div className="lg:col-span-7">
							<ol className="relative border-s border-neutral-200 pl-6">
								{work.map((job, idx) => (
									<li key={idx} className="mb-10 ms-4">
										<div className="absolute -left-1.5 mt-1.5 size-3 rounded-full border-2 border-white bg-neutral-300" />
										<div className="rounded-2xl border border-neutral-200 bg-white p-5">
											<div className="flex flex-wrap items-center justify-between gap-2">
												<div>
													<p className="text-sm text-neutral-500">
														{job.date} • {job.location}
													</p>
													<h3 className="text-lg font-medium">
														{job.role} @ {job.company}
													</h3>
												</div>
											</div>
											<ul className="mt-3 list-disc ps-5 text-sm text-neutral-600 space-y-1">
												{job.points.map((p, i) => (
													<li key={i}>{p}</li>
												))}
											</ul>
										</div>
									</li>
								))}
							</ol>
						</div>

						{/* Visual column */}
						<div className="lg:col-span-5">
							<div
								className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-200 bg-neutral-100"
								style={{
									backgroundImage:
										"url('https://res.cloudinary.com/dlg9y5dfv/image/upload/v1757880960/munros/A55A4691_rhscwb.jpg')",
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
								<div className="absolute inset-0 p-6 flex items-end">
									<div className="rounded-2xl bg-white/70 backdrop-blur border border-black/10 px-4 py-3 text-sm text-neutral-700">
										<span className="block">Forth Rail Bridge, Edinburgh</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Featured projects */}
			<section className="mt-14 sm:mt-16 lg:mt-20">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex items-end justify-between">
						<h2 className="text-2xl sm:text-3xl font-semibold">Personal projects</h2>
					</div>

					<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
						{[1, 2].map(i => (
							<a
								key={i}
								href="#"
								className="group block rounded-3xl border border-neutral-200 bg-white overflow-hidden hover:border-neutral-300 transition">
								<div
									className="aspect-video bg-neutral-100"
									style={{
										backgroundImage: `linear-gradient(rgba(0,0,0,0.06), rgba(0,0,0,0.06))`,
										backgroundSize: 'cover',
										backgroundPosition: 'center',
									}}
								/>
								<div className="p-5">
									<div className="flex items-center gap-2 text-xs text-neutral-500">
										<span>Angular</span>
										<span>•</span>
										<span>TypeScript</span>
									</div>
									<h3 className="mt-2 text-lg font-medium group-hover:underline">
										Project Title {i}
									</h3>
									<p className="mt-1 text-sm text-neutral-500">
										Short one-liner about the problem, approach, and outcome.
									</p>
								</div>
							</a>
						))}
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="mt-16 sm:mt-20 lg:mt-28 border-t border-neutral-200">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
					<div className="flex flex-col sm:flex-row items-center justify-between gap-3">
						<p className="text-sm text-neutral-500">© {new Date().getFullYear()} Michael Boyd</p>
						<nav className="flex items-center gap-4 text-sm text-neutral-500">
							<a href="#" className="hover:text-neutral-800 transition">
								Projects
							</a>
							<a href="#" className="hover:text-neutral-800 transition">
								About
							</a>
							<a href="#" className="hover:text-neutral-800 transition">
								Contact
							</a>
						</nav>
					</div>
				</div>
			</footer>
		</div>
	);
}

