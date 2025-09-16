// components/Hero.tsx
type HeroProps = {
	title: string;
	description: string;
	heroImage: {
		url: string;
	};
};

const Hero = ({ title, description, heroImage }: HeroProps) => {
	return (
		<section className="relative">
			<div className="absolute inset-0 pointer-events-none" />
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
					<div className="lg:col-span-7">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
							{title}
						</h1>
						<p className="mt-5 text-neutral-600 text-lg max-w-2xl">{description}</p>
					</div>

					<div className="lg:col-span-5">
						<div
							className="relative aspect-square rounded-3xl overflow-hidden border border-neutral-200 bg-neutral-100"
							style={{
								backgroundImage: `url('${heroImage.url}')`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}>
							<div
								className="absolute inset-0"
								style={{
									background:
										'radial-gradient(1200px 400px at 10% 10%, rgba(0,0,0,0.06), transparent), radial-gradient(800px 300px at 90% 90%, rgba(0,0,0,0.07), transparent), linear-gradient(to bottom, rgba(0,0,0,0.08), rgba(0,0,0,0))',
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

