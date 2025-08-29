'use client';

import BackgroundPanel from '../components/backgroundPanel/background-panel';
import Tabs from '../components/tabs/tabs';

export default function Home() {
	return (
		<div className="w-full min-h-screen flex justify-center font-san font-normal antialiased px-4 md:px-[20%] pt-10 md:pt-0">
			<div className="w-full flex flex-col md:flex-row gap-4">
				<div className="w-full md:w-1/3 flex flex-col items-center md:justify-center text-center md:text-left font-black">
					<div className="w-full h-[50%] md:pr-4">
                        <Tabs />
					</div>
				</div>
				<div className="w-full md:w-1/3 flex items-center justify-center">
					<BackgroundPanel backgroundUrl="https://res.cloudinary.com/dlg9y5dfv/image/upload/v1748618916/munros/dtzz0gpoj0tnimam1p7b.jpg" />
				</div>
				<div className="w-full md:w-1/3 flex items-center justify-center">
					<BackgroundPanel backgroundUrl="https://res.cloudinary.com/dlg9y5dfv/image/upload/v1748618269/munros/wotxdqiuzcbum5q6otb2.jpg" />
				</div>
			</div>
		</div>
	);
}