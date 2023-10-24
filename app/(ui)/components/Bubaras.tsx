interface BubarasProps {
	data: unknown;
}

export default function Bubaras({ data }: BubarasProps) {
	console.log(data);

	return (
		<div>
			<h1>Bubaras here!</h1>
		</div>
	);
}
