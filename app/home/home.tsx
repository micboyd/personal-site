export default function Home() {
	return (
		<div className="w-full h-screen tracking-wide flex justify-center px-[10%] md:px-[15%] lg:px-[15%]">
			<div className="w-full flex flex-col md:flex-row">
				<div className="w-full md:w-1/2 flex items-center justify-center font-normal text-6xl md:text-2xl font-black p-4">
					<div>
						<h1 className="text-6xl font-black mb-4 font-lora">Michael Boyd</h1>
						<p className="text-3xl mb-4">Software Engineer</p>
					</div>
				</div>
				<div className="w-full md:w-1/2 flex flex-col md:flex-row items-center justify-center gap-4">
					<div
						className="relative w-full md:w-1/2 h-40 md:h-1/2 bg-cover bg-center rounded-xl"
						style={{ backgroundImage: "url('https://i.imghippo.com/files/EVQe8109CS.jpg')" }}>
					</div>
					<div
						className="relative w-full md:w-1/2 h-40 md:h-1/2 bg-cover bg-center rounded-xl"
						style={{ backgroundImage: "url('https://i.imghippo.com/files/Ozra8396xxE.jpg')" }}>
					</div>
				</div>
			</div>
		</div>
	);
}

