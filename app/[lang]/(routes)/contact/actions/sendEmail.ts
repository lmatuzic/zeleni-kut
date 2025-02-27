'use server';

import { EmailTemplate } from '@/app/[lang]/components/shared/EmailTemplate';
import { Resend } from 'resend';
import * as z from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

type ReservationEmailProps<T extends z.ZodObject<any, any, any>> = {
	formValues: z.infer<T>;
	emailSubject: string;
};

export const sendReservationEmail = async <T extends z.ZodObject<any, any, any>>({
	emailSubject,
	formValues,
}: ReservationEmailProps<T>) => {
	try {
		await resend.emails.send({
			from: `Zeleni Kut Website <zeleni-kut@zeleni-kut.com>`,
			to: ['luka.matuzic1@gmail.com', 'info@zeleni-kut.com'],
			subject: emailSubject,
			reply_to: formValues.email,
			react: EmailTemplate({ formValues, emailSubject }),
		});
	} catch {
		throw new Error();
	}
};
