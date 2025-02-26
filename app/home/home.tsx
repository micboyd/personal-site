'use client';

import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

import BackgroundPanel from '../components/backgroundPanel/background-panel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
	const skills = ['JavaScript', 'React', 'Angular', 'CSS', 'Git', 'Node', 'MongoDB', 'SQL', 'Rest API', 'GraphQL'];

	return (
		<div className="w-full h-screen flex flex-col md:flex-row justify-center font-san font-normal antialiased px-[10%] md:px-[15%] lg:px-[15%]">
			<div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center md:text-left font-black p-4">
				<div>
					<h1 className="text-4xl font-extrabold mb-4 font-lora antialiased">Michael Boyd</h1>
					<p className="text-2xl font-medium mb-4">Software Engineer</p>
					<p className="text-sm font-light w-full md:w-[50%] mb-4">
						Hello, I'm Michael, a Software Engineer located in Edinburgh, Scotland. My expertise lies in
						harnessing advanced technologies, with a strong emphasis on Front-End Engineering.
					</p>
					<p className="text-sm font-light w-full md:w-[50%] mb-4">
						Beyond my professional life, I'm passionate about landscape & wildlife Photography.
					</p>
					<div className="w-full md:w-[50%] mb-4 text-sm">
						<div className="flex flex-wrap gap-2 justify-center md:justify-start">
							{skills.map(skill => (
								<span key={skill} className="text-white font-light bg-cyan-700 px-3 py-1 rounded-full">
									{skill}
								</span>
							))}
						</div>
					</div>
					<p className="flex text-3xl justify-center md:justify-start items-center gap-2">
						<a aria-label="email me" href="mailto:michael_boyd@live.co.uk">
							<FontAwesomeIcon icon={faEnvelope} />
						</a>
						<a aria-label="LinkedIn" target="_blank" href="https://linkedin.com/in/micboyd">
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
						<a aria-label="GitHub" target="_blank" href="https://github.com/micboyd">
							<FontAwesomeIcon icon={faSquareGithub} />
						</a>
					</p>
				</div>
			</div>
			<div className="w-full md:w-1/2 flex flex-col md:flex-row items-center justify-center gap-4 flex-grow">
				<BackgroundPanel backgroundUrl="https://i.imghippo.com/files/EVQe8109CS.jpg" />
				<BackgroundPanel backgroundUrl="https://i.imghippo.com/files/Ozra8396xxE.jpg" />
			</div>
		</div>
	);
}
