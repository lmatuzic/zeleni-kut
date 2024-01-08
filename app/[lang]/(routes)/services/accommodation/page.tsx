import { Button } from '@/app/[lang]/(ui)/components/shadcn/Button';
import { CONTACT_PAGE } from '@/app/[lang]/constants/routes';
import Link from 'next/link';
import { Locale } from '@/i18.config';
import { getDictionary } from '@/app/dictionaries/dictionary';
import ImageGallery from '@/app/[lang]/(ui)/components/shared/ImageGallery';

import room1 from '@/app/[lang]/assets/images/rooms/room1.jpeg';
import room2 from '@/app/[lang]/assets/images/rooms/room2.jpeg';
import room3 from '@/app/[lang]/assets/images/rooms/room3.jpeg';
import room4 from '@/app/[lang]/assets/images/rooms/room4.jpeg';
import room5 from '@/app/[lang]/assets/images/rooms/room5.jpeg';
import room6 from '@/app/[lang]/assets/images/rooms/room6.jpeg';
import room7 from '@/app/[lang]/assets/images/rooms/room7.jpeg';
import room8 from '@/app/[lang]/assets/images/rooms/room8.jpeg';
import room9 from '@/app/[lang]/assets/images/rooms/room9.jpeg';

export default async function Accommodation({ params: { lang } }: { params: { lang: Locale } }) {
	const { page, button } = await getDictionary(lang);

	const galleryImages = [room1, room2, room3, room4, room5, room6, room7, room8, room9];

	return (
		<div>
			<h1 className='mb-6 font-semibold text-2xl text-zk-green'>{page.accommodation.title}</h1>
			<p className='mb-8'>{page.accommodation.infoText}</p>

			<Link href={`/${lang}/${CONTACT_PAGE}`}>
				<Button className='text-white'>{button.makeReservation}</Button>
			</Link>

			<ImageGallery images={galleryImages} className='mt-10' />
		</div>
	);
}
