import React, { JSX } from 'react';

export type ExperienceItem = {
	title: string;
	company: string;
	location: string;
	start: string;
	end: string;
	bullets?: string[];
	tech?: string[];
};

export type EducationItem = {
	degree: string;
	school: string;
	year?: string;
};

export type Skills = {
	professional?: string[];
	technical?: string[];
};

export type Contact = {
	phone?: string;
	email?: string;
	website?: string;
};

export type Profile = {
	imageUrl?: string;
	alt?: string;
};

export interface ResumeData {
	name: string;
	role?: string;
	summary?: string;
	contact?: Contact;
	experience?: ExperienceItem[];
	education?: EducationItem[];
	skills?: Skills;
	profile?: Profile;
}

const sampleData: ResumeData = {
	name: 'Michael Boyd',
	role: 'Full-Stack Software Engineer',
	summary:
		'Full-stack Software Engineer based in Edinburgh with 8+ years of experience building and scaling production web applications. Proficient in TypeScript, JavaScript, Node.js, and MongoDB, with deep experience across React, Angular, and Next.js. Focused on delivering well-architected, high-quality software — from API design and system architecture through to deployment and long-term maintainability.',
	contact: {
		email: 'michael_boyd@live.co.uk',
	},
	profile: {
		imageUrl: 'https://res.cloudinary.com/dlg9y5dfv/image/upload/v1757864629/IMG_5117_omcdmx.jpg',
		alt: 'Michael Boyd profile photo',
	},
	experience: [
		{
			title: 'Software Engineer',
			company: 'Forrit',
			location: 'Edinburgh',
			start: 'Oct 2021',
			end: 'Present',
			bullets: [
				'Rebuilt the CMS platform across multiple major versions, improving UX, performance, and overall product quality.',
				'Designed and implemented a new page management engine capable of handling large datasets at scale.',
				'Introduced multi-locale content authoring to support efficient page creation across languages and regions.',
				'Improved engineering team workflows through better tooling, standards, and development practices.',
				'Worked closely with product and design on feature planning, architecture decisions, and delivery estimation.',
				'Mentored junior developers through code reviews and regular feedback, raising overall code quality across the team.',
			],
			tech: ['TypeScript', 'Angular', 'Figma', 'Docker', 'SQL', 'Azure', 'Unit Testing'],
		},
		{
			title: 'Software Engineer',
			company: 'Pass The Keys',
			location: 'Remote',
			start: 'Nov 2020',
			end: 'Oct 2021',
			bullets: [
				"Built a 'rate card' feature enabling Airbnb hosts to configure and manage service pricing within the central admin system.",
				'Delivered multiple product features in the React-based customer portal, improving usability and functionality.',
				'Migrated key admin interfaces from Django templates to Angular, backed by a Django REST Framework API.',
				'Led the redesign and full rebuild of the company marketing website, improving performance and visual quality.',
				'Rebuilt the automated customer onboarding journey, reducing friction and improving the end-to-end signup experience.',
				'Provided mentorship and technical guidance to junior developers across the team.',
			],
			tech: ['TypeScript', 'React', 'Angular', 'SCSS', 'AWS', 'Figma', 'Python', 'PostgreSQL'],
		},
		{
			title: 'Web Developer',
			company: 'Forrit',
			location: 'Edinburgh',
			start: 'Oct 2018',
			end: 'Nov 2020',
			bullets: [
				'Delivered a clinical tracking platform for NHS Scotland in .NET MVC, supporting ECT patient management across multiple clinics.',
				'Led the full rebuild of the Tesco Bank public website, owning the front end, back end, and CMS integration.',
				'Delivered client websites and internal tooling in Angular across several concurrent projects.',
				'Identified and implemented process improvements that improved delivery efficiency across multiple teams.',
			],
			tech: ['TypeScript', 'Angular', 'SCSS', '.NET MVC', 'C#'],
		},
		{
			title: 'Web Developer',
			company: 'Kin & Karta',
			location: 'Edinburgh',
			start: 'Jun 2016',
			end: 'Oct 2018',
			bullets: [
				'Delivered and maintained sites for high-profile clients including Expedia, Lloyds Bank, Bank of Scotland, Greyhound Buses, and Tottenham Hotspur.',
				"Worked across a broad range of stacks — React, Angular, Vue.js, and jQuery — adapting quickly to each project's requirements.",
				'Supported production systems under time pressure, resolving outages and critical bugs to maintain uptime and stability.',
			],
			tech: ['JavaScript', 'JQuery', 'SCSS', 'HTML', '.NET MVC', 'C#'],
		},
	],
	education: [{ degree: 'Higher National Diploma, Computing', school: 'Edinburgh College', year: '2013' }],
	skills: {
		technical: [
			'React',
			'TypeScript',
			'JavaScript (ES6+)',
			'Node.js',
			'Next.js',
			'Angular',
			'CSS/SCSS/Tailwind',
			'MongoDB',
			'PostgreSQL',
			'REST APIs',
			'GraphQL',
			'Cypress',
			'Unit Testing',
		],
		professional: [
			'Mentoring & Coaching',
			'Collaboration',
			'Stakeholder Management',
			'Communication',
			'Project Planning & Estimation',
			'Product Thinking',
			'Empathy',
		],
	},
};

const Tag = ({ children }: { children: React.ReactNode }) => (
	<span className="inline-flex items-center rounded-full px-3 py-1 text-[12px] font-medium bg-zinc-100 text-zinc-700">
		{children}
	</span>
);

function SectionHeading({ children }: { children: React.ReactNode }) {
	return <h3 className="text-base font-bold text-zinc-900 mb-5">{children}</h3>;
}

function ProfileAvatar({
	name,
	imageUrl,
	alt,
	className = '',
}: {
	name: string;
	imageUrl?: string;
	alt?: string;
	className?: string;
}) {
	const initials = React.useMemo(() => {
		const parts = (name || '').trim().split(/\s+/);
		const first = parts[0]?.[0] ?? '';
		const last = parts[parts.length - 1]?.[0] ?? '';
		return (first + last).toUpperCase();
	}, [name]);

	if (imageUrl) {
		return (
			// eslint-disable-next-line @next/next/no-img-element
			<img
				src={imageUrl}
				alt={alt || `${name} profile photo`}
				className={`h-28 w-28 md:h-32 md:w-32 rounded-2xl object-cover shadow-md ${className}`}
				loading="lazy"
			/>
		);
	}

	return (
		<div
			className={`h-28 w-28 md:h-32 md:w-32 rounded-2xl grid place-items-center bg-zinc-200 text-zinc-600 font-semibold text-3xl shadow-md ${className}`}
			aria-label={`${name} initials avatar`}>
			{initials}
		</div>
	);
}

export default function ResumeTemplate({ data = sampleData }: { data?: ResumeData }): JSX.Element {
	const { name, role, summary, contact, experience, education, skills, profile } = data;

	return (
		<div className="min-h-screen bg-[#F7F7F7]">
			{/* Hero */}
			<section className="bg-white border-b border-zinc-200">
				<div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
					<div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
						<div className="shrink-0">
							<ProfileAvatar name={name} imageUrl={profile?.imageUrl} alt={profile?.alt} />
						</div>

						<div className="flex-1 min-w-0">
							<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
								{name}
							</h1>

							{role && (
								<p className="mt-2 text-sm font-medium text-[#717171] uppercase tracking-[0.15em]">
									{role}
								</p>
							)}

							{summary && (
								<p className="mt-4 max-w-2xl text-[#717171] leading-relaxed text-[15px]">{summary}</p>
							)}

							<div className="mt-6 flex flex-wrap items-center gap-3">
								{contact?.email && (
									<a
										href={`mailto:${contact.email}`}
										className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF385C] text-white text-sm font-semibold hover:bg-[#D93349] transition-colors">
										Get in touch
									</a>
								)}
								{contact?.phone && (
									<span className="text-[#717171] text-sm">{contact.phone}</span>
								)}
								{contact?.website && (
									<a
										href={contact.website}
										target="_blank"
										rel="noreferrer"
										className="text-[#FF385C] text-sm font-medium hover:underline">
										{contact.website}
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Body */}
			<section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
					{/* Experience */}
					<main className="md:col-span-2 space-y-6">
						<SectionHeading>Experience</SectionHeading>

						<div className="relative">
							{/* Vertical timeline line */}
							<div className="absolute left-[7px] top-2 bottom-4 w-px bg-zinc-200" />

							<div className="space-y-8">
								{(experience ?? []).map((job, idx) => (
									<div key={idx} className="relative pl-8">
										{/* Timeline dot */}
										<div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full bg-[#FF385C]" />

										<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-3">
											<h4 className="font-semibold text-zinc-900 text-[15px]">{job.title}</h4>
											<span className="text-[11px] text-[#717171] shrink-0 tabular-nums">
												{job.start} – {job.end}
											</span>
										</div>

										<div className="text-[13px] text-[#717171] mt-0.5">
											{job.company} · {job.location}
										</div>

										{(job.bullets?.length ?? 0) > 0 && (
											<ul className="mt-3 space-y-2">
												{job.bullets!.map((b, i) => (
													<li key={i} className="text-[14px] text-[#717171] leading-relaxed flex gap-2.5">
														<span className="text-zinc-300 shrink-0 mt-[3px]">–</span>
														<span>{b}</span>
													</li>
												))}
											</ul>
										)}

										{(job.tech?.length ?? 0) > 0 && (
											<div className="mt-4 flex flex-wrap gap-1.5">
												{job.tech!.map((t, i) => (
													<Tag key={i}>{t}</Tag>
												))}
											</div>
										)}
									</div>
								))}
							</div>
						</div>
					</main>

					{/* Sidebar */}
					<aside className="md:col-span-1 space-y-8">
						{/* Skills */}
						<div>
							<SectionHeading>Skills</SectionHeading>
							<div className="space-y-5">
								{skills?.technical && (
									<div>
										<h4 className="text-[12px] font-semibold text-zinc-500 uppercase tracking-widest mb-3">
											Technical
										</h4>
										<div className="flex flex-wrap gap-1.5">
											{skills.technical.map((s, i) => (
												<Tag key={i}>{s}</Tag>
											))}
										</div>
									</div>
								)}
								{skills?.professional && (
									<div>
										<h4 className="text-[12px] font-semibold text-zinc-500 uppercase tracking-widest mb-3">
											Professional
										</h4>
										<div className="flex flex-wrap gap-1.5">
											{skills.professional.map((s, i) => (
												<Tag key={i}>{s}</Tag>
											))}
										</div>
									</div>
								)}
							</div>
						</div>

						{/* Education */}
						<div>
							<SectionHeading>Education</SectionHeading>
							<div className="space-y-4">
								{(education ?? []).map((ed, i) => (
									<div key={i}>
										<div className="font-semibold text-zinc-900 text-[15px]">{ed.degree}</div>
										<div className="text-[#717171] text-[13px] mt-0.5">{ed.school}</div>
										{ed.year && <div className="text-zinc-400 text-[12px] mt-0.5">{ed.year}</div>}
									</div>
								))}
							</div>
						</div>
					</aside>
				</div>
			</section>
		</div>
	);
}
