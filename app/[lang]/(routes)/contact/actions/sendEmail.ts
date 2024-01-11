'use server';

import { EmailTemplate } from '@/app/[lang]/components/EmailTemplate';
import { Resend } from 'resend';
import * as z from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

type ReservationEmailProps<T extends z.ZodObject<any, any, any>> = {
	formValues: z.infer<T>;
	emailSubject: string;
};

export const sendReservationEmail = async <T extends z.ZodObject<any, any, any>>({
	formValues,
	emailSubject,
}: ReservationEmailProps<T>) => {
	try {
		await resend.emails.send({
			from: `${formValues.firstName} ${formValues.lastName} <zeleni-kut@zeleni-kut.eu>`,
			to: ['luka.matuzic1@gmail.com'],
			subject: emailSubject,
			reply_to: formValues.email,
			react: EmailTemplate({ formValues, emailSubject }),
		});
	} catch (error) {
		console.log(error);
		throw new Error();
	}
};
