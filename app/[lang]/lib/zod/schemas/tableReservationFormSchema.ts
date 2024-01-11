import { phoneRegex } from '@/app/[lang]/utils/phoneRegex';
import * as zod from 'zod';

export const tableReservationFormSchema = zod.object({
	firstName: zod.string().min(1),
	lastName: zod.string().min(1),
	email: zod.string().min(1),
	numberOfPeople: zod.coerce.number().nonnegative(),
	phone: zod.string().regex(phoneRegex, 'Invalid phone format!'),
	reservationDate: zod.string(),
	message: zod.string(),
});
