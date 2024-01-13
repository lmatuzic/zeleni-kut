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
import { useToast } from '@/app/[lang]/hooks/useToast';
import { tableReservationFormSchema } from '@/app/[lang]/lib/zod/schemas/tableReservationFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { sendReservationEmail } from '../actions/sendEmail';

type FormKey = 'reservationDate';

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
		reservationSent: string;
		reservationFailed: string;
		reservationTitle: string;
	};
};

export default function TableReservationForm({ translation }: TableReservationFormProps) {
	const { toast } = useToast();

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

	const handleSelectChange = (key: FormKey, option: any) => {
		form.setValue(key, option);
		form.clearErrors(key);
	};

	const onSubmit = async (values: z.infer<typeof tableReservationFormSchema>) => {
		const { firstName, lastName, email, numberOfPeople, reservationDate, phone, message } = values;

		try {
			await sendReservationEmail({
				emailSubject: translation.reservationTitle,
				formValues: tableReservationFormSchema.parse({
					firstName,
					lastName,
					email,
					numberOfPeople,
					phone,
					reservationDate,
					message,
				}),
			});

			toast({
				title: translation.reservationSent,
			});
		} catch {
			toast({
				title: translation.reservationFailed,
			});
		} finally {
			form.reset();
		}
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
											<DatePicker
												date={field.value}
												handleSetDate={(e) => handleSelectChange('reservationDate', e)}
												translation={translation}
											/>
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
