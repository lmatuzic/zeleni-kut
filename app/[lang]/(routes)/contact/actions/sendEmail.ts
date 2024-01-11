'use server';

import { EmailTemplate } from '@/app/[lang]/components/EmailTemplate';
import { Resend } from 'resend';
import * as z from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

type ReservationEmailProps<T extends z.ZodObject<any, any, any>> = {
	formValues: z.infer<T>;
	emailSubject: string;
};

export const sendReservationEmail = <T extends z.ZodObject<any, any, any>>({
	formValues,
	emailSubject,
}: ReservationEmailProps<T>) => {
	resend.emails.send({
		from: 'Zeleni Kut Website <zeleni-kut.eu>',
		to: ['luka.matuzic1@gmail.com'],
		subject: emailSubject,
		html: '',
		react: EmailTemplate({ formValues, emailSubject }),
	});
};
