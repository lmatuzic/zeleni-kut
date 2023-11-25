export type MenuItem = {
	name: string;
	description: string;
	price: number;
};

export default function MenuItem({ name, description, price }: MenuItem) {
	return (
		<div className='flex flex-col items-end justify-between pb-2 my-4 border-b border-solid md:flex-row first:mt-0'>
			<div className='w-full md:w-auto'>
				<div className='mb-1 font-bold text-zk-green'>{name}</div>
				<div className='text-sm'>{description}</div>
			</div>

			<span className='mt-2 md:mt-0 whitespace-nowrap'>{price} kn</span>
		</div>
	);
}
