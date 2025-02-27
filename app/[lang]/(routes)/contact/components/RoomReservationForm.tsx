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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/app/[lang]/components/shadcn/Select';
import { Textarea } from '@/app/[lang]/components/shadcn/Textarea';
import { DatePicker } from '@/app/[lang]/components/shared/DatePicker';
import { useToast } from '@/app/[lang]/hooks/useToast';
import { roomReservationFormSchema } from '@/app/lib/zod/schemas/roomReservationFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { sendReservationEmail } from '../actions/sendEmail';

type FormKey = 'checkInDate' | 'checkOutDate';

type RoomReservationFormProps = {
	translation: {
		firstName: string;
		lastName: string;
		email: string;
		typeOfRoom: string;
		phone: string;
		numberOfPeople: string;
		checkInDate: string;
		checkOutDate: string;
		message: string;
		pickDate: string;
		doubleBed: string;
		twoBeds: string;
		singleBed: string;
		reserve: string;
		reservationSent: string;
		reservationFailed: string;
		reservationTitle: string;
		recaptchaWarning: string;
	};
};

export default function RoomReservationForm({ translation }: Readonly<RoomReservationFormProps>) {
	const recaptchaRef = useRef<ReCAPTCHA | null>(null);
	const { toast } = useToast();

	const form = useForm<z.infer<typeof roomReservationFormSchema>>({
		resolver: zodResolver(roomReservationFormSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			typeOfRoom: translation.doubleBed,
			numberOfNights: 1,
			numberOfPeople: 1,
			checkInDate: new Date(),
			checkOutDate: new Date(),
			phone: '',
			message: '',
		},
	});

	const handleSelectChange = (key: FormKey, option: any) => {
		form.setValue(key, option);
		form.clearErrors(key);
	};

	const onSubmit = async (values: z.infer<typeof roomReservationFormSchema>) => {
		const {
			firstName,
			lastName,
			email,
			numberOfPeople,
			phone,
			typeOfRoom,
			numberOfNights,
			checkInDate,
			checkOutDate,
			message,
		} = values;

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
				formValues: roomReservationFormSchema.parse({
					firstName,
					lastName,
					email,
					numberOfPeople,
					phone,
					typeOfRoom,
					numberOfNights,
					checkInDate,
					checkOutDate,
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
							name='typeOfRoom'
							render={({ field }) => (
								<FormItem>
									<FormLabel>{translation.typeOfRoom}</FormLabel>

									<FormControl>
										<Select onValueChange={field.onChange} defaultValue={translation.doubleBed}>
											<SelectTrigger className='w-full'>
												<SelectValue placeholder={translation.typeOfRoom} />
											</SelectTrigger>

											<SelectContent>
												<SelectItem value={translation.doubleBed}>
													{translation.doubleBed}
												</SelectItem>
												<SelectItem value={translation.twoBeds}>{translation.twoBeds}</SelectItem>
												<SelectItem value={translation.singleBed}>
													{translation.singleBed}
												</SelectItem>
											</SelectContent>
										</Select>
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
							render={({ field }) => (
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
							)}
						/>

						<FormField
							control={form.control}
							name='checkInDate'
							render={({ field }) => (
								<FormItem>
									<FormLabel>{translation.checkInDate}</FormLabel>

									<FormControl>
										<div className='w-full'>
											<DatePicker
												date={field.value}
												handleSetDate={(e) => handleSelectChange('checkInDate', e)}
												translation={translation}
											/>
										</div>
									</FormControl>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='checkOutDate'
							render={({ field }) => (
								<FormItem>
									<FormLabel>{translation.checkOutDate}</FormLabel>

									<FormControl>
										<div className='w-full'>
											<DatePicker
												date={field.value}
												handleSetDate={(e) => handleSelectChange('checkOutDate', e)}
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

						<ReCAPTCHA
							sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
							ref={recaptchaRef}
							className='scale-77 xs:scale-100 origin-left rounded-xl'
						/>

						<Button type='submit' className='text-white'>
							{translation.reserve}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
