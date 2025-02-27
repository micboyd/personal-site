interface IBackgroundPanel {
    backgroundUrl: string
}


export default function BackgroundPanel({ backgroundUrl }: IBackgroundPanel) {
	return (
		<div
			className="relative w-full h-[50%] bg-cover bg-center rounded-xl"
			style={{ backgroundImage: `url('${backgroundUrl}')` }}></div>
	);
}