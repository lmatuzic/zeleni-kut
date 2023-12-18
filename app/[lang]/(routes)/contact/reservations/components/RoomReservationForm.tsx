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
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { sendReservationEmail } from '../../actions/sendEmail';
import { roomReservationFormSchema } from '@/app/[lang]/lib/zod/schemas/roomReservationFormSchema';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/app/[lang]/(ui)/components/shadcn/Select';

export default function RoomReservationForm() {
	const form = useForm<z.infer<typeof roomReservationFormSchema>>({
		resolver: zodResolver(roomReservationFormSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			typeOfRoom: '',
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
									<FormLabel>First name</FormLabel>
									<FormControl>
										<Input type='text' placeholder='First name' {...field} />
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
									<FormLabel>Last name</FormLabel>
									<FormControl>
										<Input type='text' placeholder='Last name' {...field} />
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
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input placeholder='Email' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='typeOfRoom'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Type of room</FormLabel>
									<FormControl>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<SelectTrigger className='w-full'>
												<SelectValue placeholder='Type of room' />
											</SelectTrigger>

											<SelectContent>
												<SelectItem value='double-bed'>Double bed</SelectItem>
												<SelectItem value='two-beds'>Two beds</SelectItem>
												<SelectItem value='single-room'>Single room</SelectItem>
											</SelectContent>
										</Select>
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
									<FormLabel>Phone</FormLabel>
									<FormControl>
										<Input type='tel' placeholder='Phone' {...field} />
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
									<FormLabel>Number of people</FormLabel>
									<FormControl>
										<Input min={1} placeholder='Number of people' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='checkInDate'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Check in date</FormLabel>
									<FormControl>
										<div className='w-full'>
											<DatePicker />
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
									<FormLabel>Check out date</FormLabel>
									<FormControl>
										<div className='w-full'>
											<DatePicker />
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
									<FormLabel>Message</FormLabel>
									<FormControl>
										<Textarea rows={7} />
									</FormControl>
								</FormItem>
							)}
						/>

						<Button type='submit' className='text-white'>
							Make a reservation
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
