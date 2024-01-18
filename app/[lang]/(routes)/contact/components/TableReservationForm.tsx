'use client';

import { Button } from '@/app/[lang]/components/shadcn/Button';
import { Card, CardContent } from '@/app/[lang]/components/shadcn/Card';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@/app/[lang]/components/shadcn/Form';
import { Input } from '@/app/[lang]/components/shadcn/Input';
import { Textarea } from '@/app/[lang]/components/shadcn/Textarea';
import { DatePicker } from '@/app/[lang]/components/shared/DatePicker';
import { useToast } from '@/app/[lang]/hooks/useToast';
import { tableReservationFormSchema } from '@/app/lib/zod/schemas/tableReservationFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { sendReservationEmail } from '../actions/sendEmail';
import { useRef } from 'react';

type FormKey = 'reservationDate';

type TableReservationFormProps = {
	translation: {
		firstName: string;
		lastName: string;
		email: string;
		phone: string;
		numberOfPeople: string;
		date: string;
		time: string;
		message: string;
		pickDate: string;
		reserve: string;
		reservationSent: string;
		reservationFailed: string;
		reservationTitle: string;
		recaptchaWarning: string;
	};
};

export default function TableReservationForm({ translation }: TableReservationFormProps) {
	const recaptchaRef = useRef<ReCAPTCHA | null>(null);
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
			time: '',
			message: '',
		},
	});

	const handleSelectChange = (key: FormKey, option: any) => {
		form.setValue(key, option);
		form.clearErrors(key);
	};

	const onSubmit = async (values: z.infer<typeof tableReservationFormSchema>) => {
		const { firstName, lastName, email, numberOfPeople, reservationDate, time, phone, message } =
			values;

		const token = recaptchaRef.current?.getValue();

		if (!token) {
			toast({
				variant: 'destructive',
				duration: 5000,
				title: translation.recaptchaWarning,
			});

			return;
		}

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
					time,
					message,
				}),
			});

			toast({
				title: translation.reservationSent,
			});
		} catch {
			toast({
				variant: 'destructive',
				duration: 10000,
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
							name='time'
							render={({ field }) => (
								<FormItem>
									<FormLabel>{translation.time}</FormLabel>

									<FormControl>
										<Input
											type='time'
											step='00:00'
											id='24h'
											min='10:00'
											max='21:00'
											placeholder={translation.time}
											{...field}
										/>
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
								ref={recaptchaRef}
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
