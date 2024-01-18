import { Button } from '@/app/[lang]/components/shadcn/Button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/app/[lang]/components/shadcn/Card';
import Link from 'next/link';

type ServiceProps = {
	title: string;
	description: string;
	url: string;
	buttonTranslationText: string;
};

export default function ServiceCard({
	title,
	description,
	url,
	buttonTranslationText,
}: ServiceProps) {
	return (
		<Card className='flex flex-col justify-between'>
			<CardHeader>
				<CardTitle className='mb-2 text-xl'>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>

			<CardContent>
				<Link href={url}>
					<Button className='w-full text-white xs:w-fit'>{buttonTranslationText}</Button>
				</Link>
			</CardContent>
		</Card>
	);
}
