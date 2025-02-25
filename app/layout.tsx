import './globals.css';

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Michael Boyd - Software Engineer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
            <link rel="icon" href="/favicon.ico" sizes="any" />
			<body className={`${inter.className}`}>{children}</body>
		</html>
	);
}

