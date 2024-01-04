'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendReservationEmail = () => {
	resend.emails.send({
		from: 'Matuzzo localhost',
		to: 'luka.matuzic1@gmail.com',
		subject: 'Rezervacija',
		html: '<div><p>Congrats on sending your <strong>first email</strong>!</p><div>',
	});
};
