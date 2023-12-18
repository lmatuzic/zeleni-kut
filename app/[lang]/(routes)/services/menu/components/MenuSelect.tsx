'use client';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/app/[lang]/(ui)/components/shadcn/Select';
import { TabsTrigger } from '@/app/[lang]/(ui)/components/shadcn/Tabs';

type MenuCategory = {
	name: string;
};

type MenuSelectProps = {
	menuItems: MenuCategory[];
};

export default function MenuSelect({ menuItems }: MenuSelectProps) {
	return (
		<Select>
			<SelectTrigger className='w-[180px]'>
				<SelectValue placeholder='Theme' />
			</SelectTrigger>

			<SelectContent>
				{menuItems.map((menuItem) => (
					<SelectItem value={menuItem.name} className='w-full' key={menuItem.name}>
						<TabsTrigger
							value={menuItem.name}
							className='w-full dark:data-[state=active]:text-white data-[state=active]:text-black data-[state=active]:bg-transparent data-[state=active]:shadow-none'
						>
							{menuItem.name}
						</TabsTrigger>
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
