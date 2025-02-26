'use client';

import '@fortawesome/fontawesome-svg-core/styles.css';

import Home from './home/home';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

export default function Page() {
	return (
		<div>
			<Home></Home>
		</div>
	);
}
