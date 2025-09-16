const Navigation = () => {
	return (
		<div>
			<ul>
				<li className="w-full p-4 border-b-1 border-gray-300 cursor-pointer">
					<a className="flex justify-between items-center w-full text-lg hover:text-gray-500">
						<span>Home</span>
						<i className="fa-sharp fa-thin fa-arrow-right"></i>
					</a>
				</li>
				<li className="w-full p-4 border-b-1 border-gray-300 cursor-pointer">
					<a className="flex justify-between items-center w-full text-lg hover:text-gray-500">
						<span>Projects</span>
						<i className="fa-sharp fa-thin fa-arrow-right"></i>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;

