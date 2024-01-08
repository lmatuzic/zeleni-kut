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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/app/[lang]/(ui)/components/shadcn/Select';
import { Textarea } from '@/app/[lang]/(ui)/components/shadcn/Textarea';
import { DatePicker } from '@/app/[lang]/(ui)/components/shared/DatePicker';
import { roomReservationFormSchema } from '@/app/[lang]/lib/zod/schemas/roomReservationFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { sendReservationEmail } from '../actions/sendEmail';

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
	};
};

export default function RoomReservationForm({ translation }: RoomReservationFormProps) {
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

	const onSubmit = (values: z.infer<typeof roomReservationFormSchema>) => {
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
											<DatePicker translation={translation} />
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

						<ReCAPTCHA
							sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
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
