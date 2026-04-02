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
	Live: 'bg-emerald-50 text-emerald-700',
	'In Progress': 'bg-amber-50 text-amber-700',
	Archived: 'bg-zinc-100 text-zinc-500',
};

const Tag = ({ children }: { children: React.ReactNode }) => (
	<span className="inline-flex items-center rounded-full px-3 py-1 text-[12px] font-medium bg-zinc-100 text-zinc-700">
		{children}
	</span>
);

export default function ProjectsPage() {
	return (
		<div className="min-h-screen bg-[#F7F7F7]">
			{/* Header */}
			<section className="bg-white border-b border-zinc-200">
				<div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
					<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900">Projects</h1>
					<p className="mt-3 text-[#717171] text-[15px] max-w-xl leading-relaxed">
						A selection of things I&apos;ve built — personal projects and highlights from my professional
						work.
					</p>
				</div>
			</section>

			{/* Cards */}
			<section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{projects.map((project) => (
						<div
							key={project.name}
							className="group bg-white rounded-2xl border border-zinc-200 p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-200">
							<div className="flex items-start justify-between gap-3">
								<h2 className="font-bold text-zinc-900 text-[17px] leading-snug">{project.name}</h2>
								<span
									className={`shrink-0 text-[11px] font-semibold px-2.5 py-1 rounded-full ${statusStyles[project.status]}`}>
									{project.status}
								</span>
							</div>

							<p className="text-[#717171] text-[14px] leading-relaxed">{project.description}</p>

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
									className="text-[13px] font-semibold text-[#FF385C] hover:text-[#D93349] transition-colors inline-flex items-center gap-1">
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
