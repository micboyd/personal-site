import Experience from '@/app/home/tabs/experience';
import Profile from '@/app/home/tabs/profile';
import { useState } from 'react';

const Tabs = () => {
	const tabs = [
		{ title: 'Profile', content: <Profile></Profile> }
	];

	const [activeTab, setActiveTab] = useState(tabs[0].title);

	return (
		<div className="w-full flex justify-center font-san font-normal antialiased">
			<div className="w-full">
				<div className="flex space-x-2 pb-2 mb-6">
					{tabs.map(tab => (
                        <span className='pr-4' key={tab.title}>
                            <button
                                onClick={() => setActiveTab(tab.title)}
                                className={` pb-1 border-b-2 transition-all duration-300 ${activeTab === tab.title ? 'border-purple-500' : 'border-transparent'}`}>
                                {tab.title}
                            </button>
                        </span>
					))}
				</div>

				<div className="">
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
