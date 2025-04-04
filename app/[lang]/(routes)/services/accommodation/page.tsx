import { Button } from '@/app/[lang]/components/shadcn/Button';
import { CONTACT_PAGE } from '@/app/[lang]/constants/routes';
import { getDictionary } from '@/app/dictionaries/dictionary';
import { Locale } from '@/i18.config';
import Link from 'next/link';

import room1 from '@/app/[lang]/assets/images/rooms/room1.jpeg';
import room2 from '@/app/[lang]/assets/images/rooms/room2.jpeg';
import room3 from '@/app/[lang]/assets/images/rooms/room3.jpeg';
import room4 from '@/app/[lang]/assets/images/rooms/room4.jpeg';
import room5 from '@/app/[lang]/assets/images/rooms/room5.jpeg';
import room6 from '@/app/[lang]/assets/images/rooms/room6.jpeg';
import room7 from '@/app/[lang]/assets/images/rooms/room7.jpeg';
import room8 from '@/app/[lang]/assets/images/rooms/room8.jpeg';
import room9 from '@/app/[lang]/assets/images/rooms/room9.jpeg';
import Gallery from '@/app/[lang]/components/shared/Gallery';
import PDFView from '@/app/[lang]/components/shared/PDFView';
import { PdfsDocument } from '@/app/lib/graphql-codegen/graphql';

export default async function Accommodation(props: { params: Promise<{ lang: Locale }> }) {
    const params = await props.params;

    const {
        lang
    } = params;

    const { page, button } = await getDictionary(lang);
    const galleryImages = [room1, room2, room3, room4, room5, room6, room7, room8, room9];

    return (
		<div>
			<h1 className='mb-4 font-medium text-2xl text-zk-green'>{page.accommodation.title}</h1>
			<p className='mb-8'>{page.accommodation.infoText}</p>

			<div className='flex flex-col gap-6 items-start'>
				<PDFView
					queryKey={'accommodation'}
					queryDocument={PdfsDocument}
					buttonTextTranslation={page.accommodation.priceList}
					fileName={`sobe.pdf`}
				/>

				<Link href={`/${lang}${CONTACT_PAGE}`}>
					<Button className='text-white'>{button.makeReservation}</Button>
				</Link>
			</div>

			<Gallery images={galleryImages} className='mt-10' />
		</div>
	);
}
