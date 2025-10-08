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
	imageUrl?: string; // If omitted, we'll show initials fallback
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
	profile?: Profile; // <-- NEW
}

const sampleData: ResumeData = {
	name: 'Michael Boyd',
	role: 'Full-Stack Software Engineer',
	summary:
		'Full-stack Software Engineer based in Edinburgh, with over 8 years of experience building and scaling production-level web applications. Proficient in JavaScript, TypeScript, Node.js, and MongoDB, with hands-on experience across frameworks including React, Angular, and Next.js. Adept at delivering enterprise solutions end-to-end from architecture and API design to deployment with a consistent focus on performance, maintainability, and clean, testable code.',
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
				'Rebuilt the CMS from the ground up through multiple versions, enhancing UX and overall functionality.',
				'Implemented a new core page management system to improve performance and handle large datasets.',
				'Built multi-locale content capabilities to enable efficient page creation across languages and regions.',
				'Improved team development processes to make workflows more efficient and developer-friendly.',
				'Contributed to planning, architecture, and estimation of new features in close collaboration with product and design.',
				'Conducted code reviews and mentored junior developers to uphold best practices and code quality.',
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
				'Developed a new ‘rate card’ feature so Airbnb hosts could set service rates in the central admin system.',
				'Built multiple complex features in the Customer Portal using React.',
				'Redeveloped key admin components from Django templates to Angular with Django REST Framework back end.',
				'Led redesign and rebuild of the main company website, improving look and functionality.',
				'Rebuilt the automated onboarding journey to significantly improve customer experience.',
				'Mentored junior developers and provided guidance within the team.',
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
				'Delivered an NHS platform in .NET MVC for tracking ECT patients across clinics in Scotland.',
				'Led a comprehensive rebuild of the Tesco Bank website, across front end, back end, and CMS integration.',
				'Built small websites and internal tools with Angular and related technologies.',
				'Drove process improvements to streamline workflows across multiple teams.',
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
				'Developed and maintained greenfield and high-traffic sites for clients including Expedia, Lloyds Bank, Bank of Scotland, Greyhound Buses, and Tottenham Hotspur.',
				'Worked across modern and legacy stacks including React, Angular, Vue.js, and jQuery.',
				'Acted in a reactive team to resolve outages and critical bugs, ensuring uptime and performance.',
			],
			tech: ['JavaScript', 'JQuery', 'SCSS', 'HTML', '.NET MVC', 'C#'],
		},
	],
	education: [{ degree: 'Higher National Diploma, Computer Science', school: 'Edinburgh College', year: '2013' }],
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

function SectionHeading({ children }: { children: React.ReactNode }) {
	return <h3 className="text-xs tracking-[0.18em] uppercase text-zinc-500 font-medium">{children}</h3>;
}

function ItemHeading({ title, meta }: { title: string; meta?: string }) {
	return (
		<div className="flex items-baseline justify-between gap-3">
			<h4 className="font-semibold text-zinc-900 leading-tight">{title}</h4>
			{meta ? <span className="text-[11px] text-zinc-500 shrink-0">{meta}</span> : null}
		</div>
	);
}

const Tag = ({ children }: { children: React.ReactNode }) => (
	<span className="inline-flex items-center rounded-full px-3 py-1 text-[13px] font-medium bg-blue-50 text-blue-700 border border-blue-200">
		{children}
	</span>
);

// --- NEW: Avatar with image or initials fallback ---
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
			<img
				src={imageUrl}
				alt={alt || `${name} profile photo`}
				className={`h-28 w-28 md:h-32 md:w-32 rounded-2xl object-cover ring-1 ring-zinc-200 shadow-sm ${className}`}
				loading="lazy"
			/>
		);
	}

	return (
		<div
			className={`h-28 w-28 md:h-32 md:w-32 rounded-2xl grid place-items-center ring-1 ring-zinc-200 bg-gradient-to-br from-zinc-100 to-zinc-200 text-zinc-700 font-semibold text-3xl shadow-sm ${className}`}
			aria-label={`${name} initials avatar`}>
			{initials}
		</div>
	);
}

export default function ResumeTemplate({
	data = sampleData,
	showStickyHeader = false,
}: {
	data?: ResumeData;
	showStickyHeader?: boolean;
}): JSX.Element {
	const { name, role, summary, contact, experience, education, skills, profile } = data;

	const [firstName, ...rest] = (name ?? '').split(' ');
	const lastName = rest.join(' ');

	return (
		<div className="min-h-screen bg-white">
			{showStickyHeader && (
				<div className="sticky top-0 z-50 bg-zinc-50/80 backdrop-blur-md supports-[backdrop-filter]:bg-zinc-50/60 border-b border-zinc-200">
					<div className="mx-auto max-w-6xl px-6 py-3">
						{/* Use the same 2fr/1fr grid as the body so columns line up */}
						<div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] items-center gap-10">
							{/* Col 1: name + role (with small avatar) */}
							<div className="flex items-center gap-3 min-w-0">
								<ProfileAvatar
									name={name}
									imageUrl={profile?.imageUrl}
									alt={profile?.alt}
									className="h-7 w-7 md:h-8 md:w-8 rounded-lg"
								/>
								<div className="flex items-baseline gap-3 min-w-0">
									<span className="truncate font-semibold text-zinc-900">{name}</span>
									{role && <span className="truncate text-xs text-zinc-600">{role}</span>}
								</div>
							</div>

							{/* Col 2: contact, right-aligned to match sidebar */}
							<div className="flex items-center justify-start md:justify-end gap-3 text-xs md:pl-12">
								{contact?.phone && <span className="text-zinc-700">{contact.phone}</span>}
								{(contact?.email || contact?.website) && contact?.phone && (
									<span className="text-zinc-400">·</span>
								)}
								{contact?.email && (
									<a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
										{contact.email}
									</a>
								)}
								{contact?.email && contact?.website && <span className="text-zinc-400">·</span>}
								{contact?.website && (
									<a
										href={contact.website}
										target="_blank"
										rel="noreferrer"
										className="text-blue-600 hover:underline">
										{contact.website}
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			)}

			<section className="bg-zinc-50">
				<div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
					<div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10">
						<div>
							<h1 className="text-5xl md:text-6xl font-black tracking-tight text-zinc-900 leading-[0.95]">
								{firstName}
								<br />
								{lastName}
							</h1>
							{role && <p className="mt-3 text-sm text-zinc-500 uppercase tracking-[0.18em]">{role}</p>}
							{summary && (
								<p className="mt-6 max-w-2xl text-zinc-700 leading-relaxed text-[15px]">{summary}</p>
							)}
						</div>

						<aside className="md:pl-12">
							{/* NEW: Profile picture block */}
							<div>
								<ProfileAvatar name={name} imageUrl={profile?.imageUrl} alt={profile?.alt} />
							</div>

							<div className="mt-6">
								<div className="text-xs tracking-[0.18em] uppercase text-zinc-500">Contact</div>
								<div className="mt-3 space-y-1 text-[15px]">
									{contact?.phone && <div className="text-zinc-800">{contact.phone}</div>}
									{contact?.email && (
										<a className="text-blue-600 hover:underline" href={`mailto:${contact.email}`}>
											{contact.email}
										</a>
									)}
									{contact?.website && (
										<a
											className="text-blue-600 hover:underline"
											href={contact.website}
											target="_blank"
											rel="noreferrer">
											{contact.website}
										</a>
									)}
								</div>
							</div>
						</aside>
					</div>
				</div>
			</section>

			<section className="bg-white">
				<div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
						{/* Main experience column with right border on desktop */}
						<main className="md:col-span-2 md:pr-12 md:border-r md:border-zinc-200">
							<div className="flex items-center justify-between">
								<SectionHeading>Experience</SectionHeading>
							</div>
							<div className="mt-4 space-y-8">
								{(experience ?? []).map((job, idx) => (
									<div key={idx} className="text-[15px]">
										<ItemHeading title={job.title} meta={`${job.company} | ${job.location}`} />
										<div className="text-[11px] text-zinc-500 mt-1">
											{job.start} - {job.end}
										</div>

										{(job.bullets?.length ?? 0) > 0 && (
											<ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-700">
												{job.bullets!.map((b, i) => (
													<li key={i}>{b}</li>
												))}
											</ul>
										)}

										{(job.tech?.length ?? 0) > 0 && (
											<div className="mt-4">
												<div className="text-[12px] font-medium uppercase tracking-wide text-zinc-500 mb-2">
													Technology Used
												</div>
												<div className="flex flex-wrap gap-2">
													{job.tech!.map((t, i) => (
														<Tag key={i}>{t}</Tag>
													))}
												</div>
											</div>
										)}
									</div>
								))}
							</div>
						</main>

						{/* Sidebar column */}
						<aside className="md:col-span-1 md:pl-12">
							<div>
								<div className="flex items-center justify-between">
									<SectionHeading>Education</SectionHeading>
								</div>
								<div className="mt-4 space-y-4 text-[15px]">
									{(education ?? []).map((ed, i) => (
										<div key={i}>
											<div className="font-medium text-zinc-900">{ed.degree}</div>
											<div className="text-zinc-700 text-[11px]">{ed.school}</div>
											{ed.year && <div className="text-[11px] text-zinc-500">{ed.year}</div>}
										</div>
									))}
								</div>
							</div>

							<div className="mt-10">
								<div className="flex items-center justify-between">
									<SectionHeading>Skills</SectionHeading>
								</div>
								<div className="mt-4 grid grid-cols-1 gap-6">
									{skills?.technical && (
										<div>
											<h4 className="text-[13px] font-semibold text-zinc-900">Technical</h4>
											<div className="mt-2 flex flex-wrap gap-2">
												{skills.technical.map((s, i) => (
													<Tag key={i}>{s}</Tag>
												))}
											</div>
										</div>
									)}
									{skills?.professional && (
										<div>
											<h4 className="text-[13px] font-semibold text-zinc-900">Professional</h4>
											<div className="mt-2 flex flex-wrap gap-2">
												{skills.professional.map((s, i) => (
													<Tag key={i}>{s}</Tag>
												))}
											</div>
										</div>
									)}
								</div>
							</div>
						</aside>
					</div>
				</div>
			</section>
		</div>
	);
}
