import './globals.css';

import { DM_Sans } from 'next/font/google';
import Home from './home/home';
import type { Metadata } from 'next';

const dmSans = DM_Sans({
	variable: '--font-dm-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Michael Boyd - Software Engineer',
};

export default function RootLayout() {
	return (
		<html lang="en">
			<body className={`${dmSans.variable} antialiased`}>
				<Home></Home>
			</body>
		</html>
	);
}
