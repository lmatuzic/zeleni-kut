import { phoneRegex } from '@/app/utils/phoneRegex';
import * as zod from 'zod';

export const reservationFormSchema = zod.object({
	firstName: zod.string().min(1),
	lastName: zod.string().min(1),
	email: zod.string().min(1),
	numberOfPeople: zod.number().nonnegative(),
	phone: zod.string().regex(phoneRegex, 'Invalid phone format!'),
	reservationDate: zod.date(),
	message: zod.string().min(5),
});
