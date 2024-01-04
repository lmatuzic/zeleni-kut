'use client';

import { Button } from '@/app/[lang]/(ui)/components/shadcn/Button';
import { Card, CardContent } from '@/app/[lang]/(ui)/components/shadcn/Card';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/app/[lang]/(ui)/components/shadcn/Form';
import { Input } from '@/app/[lang]/(ui)/components/shadcn/Input';
import { Textarea } from '@/app/[lang]/(ui)/components/shadcn/Textarea';
import { DatePicker } from '@/app/[lang]/(ui)/components/shared/DatePicker';
import { tableReservationFormSchema } from '@/app/[lang]/lib/zod/schemas/tableReservationFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { sendReservationEmail } from '../actions/sendEmail';

type TableReservationFormProps = {
	translation: {
		firstName: string;
		lastName: string;
		email: string;
		phone: string;
		numberOfPeople: string;
		date: string;
		message: string;
		pickDate: string;
	};
};

export default function TableReservationForm({ translation }: TableReservationFormProps) {
	const form = useForm<z.infer<typeof tableReservationFormSchema>>({
		resolver: zodResolver(tableReservationFormSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			numberOfPeople: 1,
			phone: '',
			reservationDate: new Date(),
			message: '',
		},
	});

	const onSubmit = (values: z.infer<typeof tableReservationFormSchema>) => {
		sendReservationEmail();
		console.log(values);
	};

	return (
		<Card className='w-full col-span-1'>
			<CardContent className='mt-4'>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
						<FormField
							control={form.control}
							name='firstName'
							render={({ field }) => (
								<FormItem>
									<FormLabel>{translation.firstName}</FormLabel>
									<FormControl>
										<Input type='text' placeholder={translation.firstName} {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='lastName'
							render={({ field }) => (
								<FormItem>
									<FormLabel>{translation.lastName}</FormLabel>
									<FormControl>
										<Input type='text' placeholder={translation.lastName} {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel>{translation.email}</FormLabel>
									<FormControl>
										<Input placeholder={translation.email} {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='phone'
							render={({ field }) => (
								<FormItem>
									<FormLabel>{translation.phone}</FormLabel>
									<FormControl>
										<Input type='tel' placeholder={translation.phone} {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='numberOfPeople'
							render={({ field }) => (
								<FormItem>
									<FormLabel>{translation.numberOfPeople}</FormLabel>
									<FormControl>
										<Input min={1} placeholder={translation.numberOfPeople} {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='reservationDate'
							render={({ field }) => (
								<FormItem>
									<FormLabel>{translation.date}</FormLabel>
									<FormControl>
										<div className='w-full'>
											<DatePicker translation={translation} />
										</div>
									</FormControl>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='message'
							render={({ field }) => (
								<FormItem>
									<FormLabel>{translation.message}</FormLabel>
									<FormControl>
										<Textarea rows={7} />
									</FormControl>
								</FormItem>
							)}
						/>

						<Button type='submit' className='text-white'>
							Rezerviraj
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
