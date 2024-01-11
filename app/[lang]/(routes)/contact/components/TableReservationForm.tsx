'use client';

import { Button } from '@/app/[lang]/(ui)/components/shadcn/Button';
import { Card, CardContent } from '@/app/[lang]/(ui)/components/shadcn/Card';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@/app/[lang]/(ui)/components/shadcn/Form';
import { Input } from '@/app/[lang]/(ui)/components/shadcn/Input';
import { Textarea } from '@/app/[lang]/(ui)/components/shadcn/Textarea';
import { DatePicker } from '@/app/[lang]/(ui)/components/shared/DatePicker';
import { tableReservationFormSchema } from '@/app/[lang]/lib/zod/schemas/tableReservationFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { sendReservationEmail } from '../actions/sendEmail';
import { format } from 'date-fns';

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
		reserve: string;
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
			reservationDate: format(new Date(), 'dd.MM.yyy'),
			message: '',
		},
	});

	const onSubmit = (values: z.infer<typeof tableReservationFormSchema>) => {
		const { firstName, lastName, email, numberOfPeople, phone, reservationDate, message } = values;

		sendReservationEmail({
			formValues: tableReservationFormSchema.parse({
				firstName,
				lastName,
				email,
				numberOfPeople,
				phone,
				reservationDate,
				message,
			}),
			emailSubject: 'Rezervacija stola',
		});

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
										<Input type='email' placeholder={translation.email} {...field} />
									</FormControl>
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
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='numberOfPeople'
							render={({ field }) => {
								return (
									<FormItem>
										<FormLabel>{translation.numberOfPeople}</FormLabel>

										<FormControl>
											<Input
												min={1}
												type='number'
												placeholder={translation.numberOfPeople}
												{...field}
											/>
										</FormControl>
									</FormItem>
								);
							}}
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
										<Textarea rows={7} {...field} />
									</FormControl>
								</FormItem>
							)}
						/>

						<div className='overflow-hidden'>
							<ReCAPTCHA
								sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
								className='scale-77 xs:scale-100 origin-left'
							/>
						</div>

						<Button type='submit' className='text-white'>
							{translation.reserve}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
