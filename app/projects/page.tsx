type Project = {
	name: string;
	description: string;
	tech: string[];
	status: 'Live' | 'In Progress' | 'Archived';
	url?: string;
};

const projects: Project[] = [
	{
		name: 'Munro Locator',
		description: `Despite the name — a legacy from its original incarnation — this app has been fully rebuilt as a general-purpose mountain tracker and trip planner, supporting any mountain classification worldwide (Munros, Corbetts, Wainwrights, and beyond). Users can browse a searchable mountain library with category and height filtering, plan future hikes with dates, log completed summits with photos and ratings, and organise outings into trip plans. The dashboard surfaces personal stats (total meters climbed, completion history, average ratings) and a recent activity feed. Planning tools include a Naismith route-time calculator, a Mapbox-powered drive-time estimator, an elevation profile viewer, and live weather forecasts via Open-Meteo. An interactive Leaflet map lets users visualise and filter mountains spatially. Goal tracking rounds out a full end-to-end experience from discovery to summit.`,
		tech: [
			'Angular',
			'TypeScript',
			'Tailwind CSS',
			'Node.js',
			'Express',
			'MongoDB',
			'Leaflet',
			'Mapbox',
			'Open-Meteo',
			'JWT',
			'Heroku',
			'Netlify',
		],
		status: 'Live',
		url: 'https://www.munrolocator.com',
	},
	{
		name: 'Personal Site',
		description:
			'This site — a clean portfolio and profile built with Next.js, Tailwind CSS, and TypeScript. Designed to be fast, readable, and easy to maintain.',
		tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
		status: 'Live',
		url: '/',
	},
	{
		name: 'CMS Platform (Forrit)',
		description:
			'Rebuilt a content management system from the ground up across multiple versions. Introduced a core page management engine capable of handling large datasets and multi-locale content authoring.',
		tech: ['Angular', 'TypeScript', 'Azure', 'SQL', 'Docker'],
		status: 'Live',
		url: 'https://www.forrit.com',
	},
	{
		name: 'Tesco Bank Website',
		description:
			'Led a full rebuild of the Tesco Bank public-facing website, spanning front end, back end, and CMS integration. Delivered significant performance and UX improvements.',
		tech: ['TypeScript', 'SCSS', '.NET MVC', 'JQuery', 'C#', 'Azure', 'SQL'],
		status: 'Live',
		url: 'https://www.tescobank.com',
	},
	{
		name: 'NHS ECT Tracking Platform',
		description:
			'Built a secure internal platform for tracking ECT patients across NHS clinics in Scotland, including scheduling, reporting, and clinical workflow tooling.',
		tech: ['.NET MVC', 'C#', 'SQL'],
		status: 'Archived',
	},
];

const statusStyles: Record<Project['status'], string> = {
	Live: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
	'In Progress': 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
	Archived: 'bg-zinc-800 text-zinc-500 border border-zinc-700',
};

const Tag = ({ children }: { children: React.ReactNode }) => (
	<span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[12px] font-medium bg-white/5 text-zinc-300 border border-white/10">
		{children}
	</span>
);

export default function ProjectsPage() {
	return (
		<div className="min-h-screen bg-zinc-950">
			{/* Header */}
			<section className="relative overflow-hidden bg-zinc-950 border-b border-white/5">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(139,92,246,0.08),transparent)]" />
				<div className="relative mx-auto max-w-6xl px-6 py-14 md:py-20">
					<h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.05]">
						Projects
					</h1>
					<p className="mt-3 text-zinc-400 text-[15px] max-w-xl leading-relaxed">
						A selection of things I&apos;ve built — personal projects and highlights from my professional
						work.
					</p>
				</div>
			</section>

			{/* Cards */}
			<section className="mx-auto max-w-6xl px-6 py-14">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{projects.map((project) => (
						<div
							key={project.name}
							className="group rounded-2xl bg-zinc-900 border border-white/[0.08] p-6 flex flex-col gap-4 hover:border-violet-500/25 hover:shadow-xl hover:shadow-violet-950/30 transition-all duration-300">
							<div className="flex items-start justify-between gap-3">
								<h2 className="font-semibold text-zinc-100 text-[17px] leading-snug group-hover:text-white transition-colors">
									{project.name}
								</h2>
								<span
									className={`shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full ${statusStyles[project.status]}`}>
									{project.status}
								</span>
							</div>

							<p className="text-zinc-500 text-[14px] leading-relaxed">{project.description}</p>

							<div className="flex flex-wrap gap-1.5 mt-auto pt-1">
								{project.tech.map((t) => (
									<Tag key={t}>{t}</Tag>
								))}
							</div>

							{project.url && (
								<a
									href={project.url}
									target="_blank"
									rel="noreferrer"
									className="text-[13px] font-medium text-violet-400 hover:text-violet-300 transition-colors inline-flex items-center gap-1">
									Visit project →
								</a>
							)}
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
