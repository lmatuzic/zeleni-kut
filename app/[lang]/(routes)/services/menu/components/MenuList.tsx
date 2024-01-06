'use client';

import useGQLQuery from '@/app/[lang]/hooks/useGQLQuery';
import { MenuItemsDocument, MenuItemsQuery } from '@/app/lib/graphql-codegen/graphql';
import { Locale } from '@/i18.config';
import MenuItem from './MenuItem';

type MenuListProps = {
	locale: Locale;
};

export default function MenuList({ locale }: MenuListProps) {
	const { data } = useGQLQuery<MenuItemsQuery>(['menuItems', locale], MenuItemsDocument, {
		locales: [locale],
	});

	const appetizers = data?.menuItems.filter(
		(menuItem) => menuItem.menuCategory?.name === 'Appetizer' || 'Predjelo'
	);

	const mainCourses = data?.menuItems.filter(
		(menuItem) => menuItem.menuCategory?.name === 'Main courses' || 'Glavna jela'
	);

	return (
		<>
			<div className='p-4 mt-4 border rounded-md gap-y-8 gap-x-16'>
				<h2 className='text-lg font-bold'>Appetizers</h2>

				{appetizers?.map((appetizer) => (
					<MenuItem
						key={appetizer.name}
						name={appetizer.name}
						description={appetizer.description}
						price={appetizer.price}
					/>
				))}
			</div>

			<div className='p-4 mt-4 border rounded-md gap-y-8 gap-x-16'>
				<h2 className='text-lg font-bold'>Main courses</h2>

				{mainCourses?.map((mainCourse) => (
					<MenuItem
						key={mainCourse.name}
						name={mainCourse.name}
						description={mainCourse.description}
						price={mainCourse.price}
					/>
				))}
			</div>
		</>
	);
}
