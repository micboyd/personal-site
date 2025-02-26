interface IBackgroundPanel {
    backgroundUrl: string
}


export default function BackgroundPanel({ backgroundUrl }: IBackgroundPanel) {
	return (
		<div
			className="relative w-full md:w-1/2 h-40 md:h-1/2 bg-cover bg-center rounded-xl"
			style={{ backgroundImage: `url('${backgroundUrl}')` }}></div>
	);
}