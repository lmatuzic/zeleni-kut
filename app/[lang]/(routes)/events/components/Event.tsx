import { Button } from '@/app/[lang]/(ui)/components/shadcn/Button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/app/[lang]/(ui)/components/shadcn/Card';
import { format } from 'date-fns';
import Link from 'next/link';

interface EventProps {
	id: string;
	title: string;
	shortDescription: string;
	dateAndTime: string;
	locale: string;
}

export default function Event({ id, title, shortDescription, dateAndTime }: EventProps) {
	const originalDate = new Date(dateAndTime);
	const formattedDate = format(originalDate, 'dd.MM.yyyy');

	return (
		<Card className='flex flex-col justify-between max-w-sm' key={id}>
			<CardHeader>
				<CardTitle className='text-xl'>{title}</CardTitle>
				<div className='text-sm'>{formattedDate}</div>
			</CardHeader>

			<CardContent>
				<CardDescription className='mb-6'>{shortDescription}</CardDescription>
				<Link href={'#'}>
					<Button className='w-full text-white xs:w-fit'>Vidi više</Button>
				</Link>
			</CardContent>
		</Card>
	);
}
