import { useState } from 'react';

const Tabs = () => {
	const tabs = [
		{ title: 'Home', content: 'Welcome to the Home tab!' },
		{ title: 'Profile', content: 'This is the Profile section.' },
		{ title: 'Settings', content: 'hi there' },
	];

	const [activeTab, setActiveTab] = useState(tabs[0].title);

	return (
		<div className="w-full bg-black flex justify-center items-center px-[10%] md:px-[15%] lg:px-[15%]">
			<div className="w-full p-4 bg-gray-900 rounded-2xl shadow-lg">
				<div className="flex space-x-2 border-b border-gray-700 pb-2">
					{tabs.map(tab => (
						<button
							key={tab.title}
							onClick={() => setActiveTab(tab.title)}
							className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all duration-300 
          ${activeTab === tab.title ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
							{tab.title}
						</button>
					))}
				</div>

				<div className="p-4 mt-2 text-white">
					{tabs.map(tab => (
						<div
							key={tab.title}
							className={`transition-opacity duration-300 ${
								activeTab === tab.title ? 'opacity-100 block' : 'opacity-0 hidden'
							}`}>
							{tab.content}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Tabs;
