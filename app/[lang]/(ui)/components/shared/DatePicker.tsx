'use client';

import { cn } from '@/app/[lang]/lib/shadcn/utils';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
// import { useState } from 'react';
import { Button } from '../shadcn/Button';
import { Calendar } from '../shadcn/Calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../shadcn/Popover';
import { PopoverClose } from '@radix-ui/react-popover';

type DatePickerProps = {
	date: Date;
	handleSetDate: (date: Date) => void;
	translation: {
		pickDate: string;
	};
};

export function DatePicker({ translation, date, handleSetDate }: DatePickerProps) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={'outline'}
					className={cn(
						'w-full justify-start text-left font-normal',
						!date && 'text-muted-foreground'
					)}
				>
					<CalendarIcon className='w-4 h-4 mr-2' />
					{date ? format(date, 'PPP') : <span>{translation.pickDate}</span>}
				</Button>
			</PopoverTrigger>

			<PopoverContent className='w-auto p-0' align='start'>
				<PopoverClose>
					<Calendar
						mode='single'
						selected={date}
						onSelect={(e) => handleSetDate(e as Date)}
						initialFocus
					/>
				</PopoverClose>
			</PopoverContent>
		</Popover>
	);
}
