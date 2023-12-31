import { phoneRegex } from '@/app/[lang]/utils/phoneRegex';
import * as zod from 'zod';

export const roomReservationFormSchema = zod.object({
	firstName: zod.string().min(1),
	lastName: zod.string().min(1),
	email: zod.string().min(1),
	typeOfRoom: zod.string(),
	numberOfNights: zod.coerce.number().nonnegative(),
	numberOfPeople: zod.coerce.number().nonnegative(),
	phone: zod.string().regex(phoneRegex, 'Invalid phone format!'),
	checkInDate: zod.date(),
	checkOutDate: zod.date(),
	message: zod.string(),
});
