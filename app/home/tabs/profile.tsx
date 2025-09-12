'use client';

import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Profile() {
	const skills = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Angular', 'CSS (SCSS)', 'Git', 'Node', 'MongoDB', 'SQL', 'Rest API', 'GraphQL', 'Tailwind'];

	return (
        <div className='profile'>
            <h1 className="text-4xl font-extrabold mb-4">Michael Boyd</h1>
            <p className="text-2xl font-medium mb-4">Software Engineer</p>
            <p className="text-sm font-light w-full mb-4">
                Hello, I&apos;m Michael, a Software Engineer located in Edinburgh, Scotland.
            </p>
            <p className="text-sm font-light w-full mb-4">
                Beyond my professional life, I&apos;m passionate about landscape & wildlife photography.
            </p>
            <div className="w-full mb-4 text-sm">
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
	);
}