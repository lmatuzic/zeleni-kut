'use client';

import { TabsTrigger } from '@/app/(ui)/components/shadcn/Tabs';
import useGetMenuCategories from '../hooks/useGetMenuCategories';

export default function MenuCategories() {
	const { data } = useGetMenuCategories();

	return (
		<>
			{data?.menuCategories.map((menuCategory) => (
				<TabsTrigger value='appetizer' className='border cursor-pointer' key={menuCategory.name}>
					Predjelo
				</TabsTrigger>
			))}
		</>
	);
}
