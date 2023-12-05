import { Button } from '@/app/(ui)/components/shadcn/Button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/app/(ui)/components/shadcn/Card';
import Link from 'next/link';

interface EventProps {
	id: string;
	title: string;
	shortDescription: string;
	dateAndTime: string;
	locale: string;
}

export default function Event({ id, title, shortDescription, dateAndTime }: EventProps) {
	return (
		<Card className='flex flex-col justify-between max-w-sm' key={id}>
			<CardHeader>
				<CardTitle className='mb-2 text-xl'>{title}</CardTitle>
				<CardDescription>{shortDescription}</CardDescription>
			</CardHeader>

			<CardContent>
				<div>{dateAndTime}</div>
				<Link href={'#'}>
					<Button className='w-full text-white xs:w-fit'>Vidi više</Button>
				</Link>
			</CardContent>
		</Card>
	);
}
