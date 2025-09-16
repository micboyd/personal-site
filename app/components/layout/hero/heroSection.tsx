// components/HeroSection.tsx
'use client';

import Hero from './hero';
import { useHero } from './userHero';

const HeroSection = () => {
	const { data, error, loading } = useHero();

	if (loading) {
		return (
			<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12">
				<div className="h-64 animate-pulse rounded-3xl bg-neutral-100" />
			</section>
		);
	}

	console.log(error, !data);

	if (error || !data) {
		return (
			<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12">
				<p className="text-red-600">Couldn’t load hero. Please try again.</p>
			</section>
		);
	}

	return <Hero {...data} />;
};

export default HeroSection;

