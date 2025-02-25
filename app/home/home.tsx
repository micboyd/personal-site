import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

import BackgroundPanel from '../components/backgroundPanel/background-panel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
	return (
		<div className="w-full h-screen flex justify-center font-sans antialiased px-[10%] md:px-[15%] lg:px-[15%]">
			<div className="w-full flex flex-col md:flex-row">
				<div className="w-full md:w-1/2 flex items-center justify-center font-normal text-6xl text-center md:text-left md:text-2xl font-black p-4">
					<div>
						<h1 className="text-6xl font-black mb-4 font-lora antialiased">Michael Boyd</h1>
						<p className="text-3xl mb-4">Software Engineer</p>
                        <p className="mb-4 flex items-center gap-2 group">
                            <a aria-label='email me' href="mailto:michael_boyd@live.co.uk">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                            <a aria-label='LinkedIn' target='_blank' href="https://linkedin.com/in/micboyd">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a aria-label='GitHub' target='_blank' href="https://github.com/micboyd">
                                <FontAwesomeIcon icon={faSquareGithub} />
                            </a>
                        </p>
					</div>
				</div>
				<div className="w-full md:w-1/2 flex flex-col md:flex-row items-center justify-center gap-4">
					<BackgroundPanel backgroundUrl="https://i.imghippo.com/files/EVQe8109CS.jpg"></BackgroundPanel>
					<BackgroundPanel backgroundUrl="https://i.imghippo.com/files/Ozra8396xxE.jpg"></BackgroundPanel>
				</div>
			</div>
		</div>
	);
}
