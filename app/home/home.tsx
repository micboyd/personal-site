import Contact from './contact/contact';
import Header from './header/header';

export default function Home() {
	const pills = ['JavaScript', 'React', 'Tailwind', 'CSS', 'UI/UX'];

	return (
		<div className="w-full h-screen flex justify-center px-[10%] md:px-[15%] lg:px-[15%]">
			<div className="w-full flex flex-col md:flex-row">
				<div className="w-full md:w-1/2 flex items-center justify-center font-extrabold text-6xl md:text-2xl font-black p-4">
					<div>
						<h1 className="text-5xl mb-4">Michael Boyd</h1>
						<p className="font-normal mb-4">Software Engineer</p>
						<ul className="flex flex-wrap gap-2 mb-4">
							{pills.map((pill, index) => (
								<li
									key={index}
									className="px-3 py-1 bg-sky-700 text-white text-sm font-medium rounded-full">
									{pill}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="w-full md:w-1/2 flex flex-col md:flex-row items-center justify-center gap-4">
					<div
						className="w-full md:w-1/2 h-40 md:h-1/2 bg-cover bg-center rounded-xl"
						style={{ backgroundImage: "url('https://i.imghippo.com/files/EVQe8109CS.jpg')" }}></div>
					<div
						className="w-full md:w-1/2 h-40 md:h-1/2 bg-cover bg-center rounded-xl"
						style={{ backgroundImage: "url('https://i.imghippo.com/files/Ozra8396xxE.jpg')" }}></div>
				</div>
			</div>
		</div>
	);
}

