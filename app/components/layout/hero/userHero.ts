// hooks/useHero.ts
import { useEffect, useState } from 'react';
import { getHero, HeroData } from './hero.service';

export function useHero() {
	const [data, setData] = useState<HeroData | null>(null);
	const [error, setError] = useState<Error | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let cancelled = false;
		(async () => {
			try {
				const hero = await getHero();
				if (!cancelled) setData(hero);
			} catch (e) {
				if (!cancelled) setError(e as Error);
			} finally {
				if (!cancelled) setLoading(false);
			}
		})();
		return () => {
			cancelled = true;
		};
	}, []);

	return { data, error, loading };
}

