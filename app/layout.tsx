import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import TabNav from './components/TabNav';

export const metadata: Metadata = {
	title: 'Michael Boyd - Software Engineer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</head>
			<body>
				<Script
					src="https://kit.fontawesome.com/4972525ab9.js"
					crossOrigin="anonymous"
					strategy="beforeInteractive"
				/>
				<TabNav />
				{children}
			</body>
		</html>
	);
}
