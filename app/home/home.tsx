export default function Home() {
	const pills = ['TypeScript', 'Angular', 'React', 'Next', 'Tailwind', 'CSS', 'Node.js', 'MongoDB'];

	return (
		<div className="w-full h-screen bg-stone-950 text-white flex justify-center px-[10%] md:px-[15%] lg:px-[15%]">
			<div className="w-full flex flex-col md:flex-row">
				<div className="w-full md:w-1/2 flex items-center justify-center font-normal text-6xl md:text-2xl font-black p-4">
					<div>
						<h1 className="text-5xl font-black  mb-4">Michael Boyd</h1>
						<p className="text-3xl mb-4">Software Engineer, Edinburgh</p>
						<ul className="flex flex-wrap gap-2 mb-4">
							{pills.map((pill, index) => (
								<li
									key={index}
									className="px-3 py-1 bg-white text-black text-sm font-medium rounded-full">
									{pill}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="w-full md:w-1/2 flex flex-col md:flex-row items-center justify-center gap-4">
					<div
						className="relative w-full md:w-1/2 h-40 md:h-1/2 bg-cover bg-center rounded-xl"
						style={{ backgroundImage: "url('https://i.imghippo.com/files/EVQe8109CS.jpg')" }}>
						<p className="absolute bottom-2 left-2 text-lg uppercase font-black px-2 py-1 rounded">
							Glencoe
						</p>
					</div>
					<div
						className="relative w-full md:w-1/2 h-40 md:h-1/2 bg-cover bg-center rounded-xl"
						style={{ backgroundImage: "url('https://i.imghippo.com/files/Ozra8396xxE.jpg')" }}>
						<p className="absolute bottom-2 left-2 text-lg uppercase font-black px-2 py-1 rounded">
							Staffa
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

