'use client';

import useGetMenuItems from '../hooks/useGetMenuItems';
import MenuItem from './MenuItem';

export default function MenuList() {
	const { appetizers, mainCourses } = useGetMenuItems();

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
