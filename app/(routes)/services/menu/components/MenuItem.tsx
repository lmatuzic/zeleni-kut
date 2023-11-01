import { Separator } from '@/app/(ui)/components/shadcn/Separator';

type MenuItemProps = {
	name: string;
	ingredients: string;
	price: number;
};

export default function MenuItem({ name, ingredients, price }: MenuItemProps) {
	return (
		<>
			<div className='flex flex-col items-end justify-between my-4 md:flex-row first:mt-0'>
				<div className='w-full md:w-auto'>
					<div className='mb-1 text-zk-green'>{name}</div>
					<div className='text-sm'>{ingredients}</div>
				</div>

				<span className='mt-2 md:mt-0'>{price} kn</span>
			</div>

			<Separator className='mt-2' />
		</>
	);
}
