import { Button } from '@/app/[lang]/(ui)/components/shadcn/Button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/app/[lang]/(ui)/components/shadcn/Card';
import { ACCOMMODATION_PAGE, MENU_PAGE, RECREATION_PAGE } from '@/app/[lang]/constants/routes';
import { getDictionary } from '@/app/dictionaries/dictionary';
import type { Locale } from '@/i18.config';
import Link from 'next/link';

export default async function Services({ params: { lang } }: { params: { lang: Locale } }) {
	const { page, button } = await getDictionary(lang);

	return (
		<div className='pb-12'>
			<h1 className='mb-4 text-2xl text-zk-green'>{page.services.title}</h1>

			<div className='flex items-center'>
				<p className='max-w-2xl mb-12'>{page.services.description}</p>
			</div>

			<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
				<Card className='flex flex-col justify-between'>
					<CardHeader>
						<CardTitle className='mb-2 text-xl'>{page.services.accomodationCardTitle}</CardTitle>

						<CardDescription>{page.services.accomodationCardContent}</CardDescription>
					</CardHeader>

					<CardContent>
						<Link href={ACCOMMODATION_PAGE}>
							<Button className='w-full text-white xs:w-fit'>{button.seeMore}</Button>
						</Link>
					</CardContent>
				</Card>

				<Card className='flex flex-col justify-between'>
					<CardHeader>
						<CardTitle className='mb-2 text-xl'>{page.services.gastroCardTitle}</CardTitle>
						<CardDescription>{page.services['gastroCardContent']}</CardDescription>
					</CardHeader>

					<CardContent>
						<Link href={MENU_PAGE}>
							<Button className='w-fu.recreationCardTitle.recre.recreationCardTitlell text-white xs:w-fit'>
								{button.seeMore}
							</Button>
						</Link>
					</CardContent>
				</Card>

				<Card className='flex flex-col justify-between'>
					<CardHeader>
						<CardTitle className='mb-2 text-xl'>{page.services.recreationCardTitle}</CardTitle>
						<CardDescription>{page.services.recreationCardContent}</CardDescription>
					</CardHeader>

					<CardContent>
						<Link href={RECREATION_PAGE}>
							<Button className='w-full text-white xs:w-fit'>{button.seeMore}</Button>
						</Link>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
