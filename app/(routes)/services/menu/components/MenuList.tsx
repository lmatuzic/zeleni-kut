'use client';

import useGetMenuItems from '../hooks/useGetMenuItems';
import MenuItem from './MenuItem';

export default function MenuList() {
	const { data } = useGetMenuItems();

	const appetizerTitle = data?.menuItems.find(
		(menuItem) => menuItem.menuCategory?.name === 'Appetizer' || 'Predjelo'
	)?.menuCategory?.name;

	return (
		<div className='p-4 mt-4 border rounded-md gap-y-8 gap-x-16'>
			<h2>{appetizerTitle ? appetizerTitle : ''}</h2>
			{data?.menuItems.map((menuItem) => (
				<MenuItem
					key={menuItem.name}
					name={menuItem.name}
					description={menuItem.description}
					price={menuItem.price}
				/>
			))}
		</div>
	);
}
