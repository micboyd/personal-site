// lib/hero.service.ts
export type HeroData = {
	title: string;
	description: string;
	heroImage: {
		url: string;
	};
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:1337/api';

// Put your Strapi Read-Only API Token in .env.local
// STRAPI_API_TOKEN=xxxx
const API_TOKEN =
	'4be041cdc2554fae64fe89339d67894c3f99d32277c962ff2a97308e1b00d11ebf1fed821c30ab7d6c4d0de78beaa1e5157dbee2c0db89615996e2bfce6584e9aefaca22df8cab9a01be68b4a748362943d17f8619ab2ee1bb2dcc588339c23a64acc03c541dc82b0ec99fa73d6842c8fc559a4f4cd19be8afd0482bad0d8416';

export async function getHero(): Promise<HeroData> {
	const res = await fetch(`${API_BASE}/hero?populate=heroimage`, {
		cache: 'no-store',
		headers: {
			Authorization: `Bearer ${API_TOKEN}`,
		},
	});

	if (!res.ok) {
		throw new Error(`Failed to load hero (${res.status})`);
	}

	const json = await res.json();

	const { title, description, heroImage } = json.data.attributes;

	return {
		title,
		description,
		heroImage: {
			url: heroImage.url,
		},
	};
}

