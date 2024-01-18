import {
	ACCOMMODATION_PAGE,
	RECREATION_PAGE,
	RESTAURANT_PAGE,
} from '@/app/[lang]/constants/routes';
import { getDictionary } from '@/app/dictionaries/dictionary';
import type { Locale } from '@/i18.config';
import ServiceCard from './components/ServiceCard';

export default async function Services({ params: { lang } }: { params: { lang: Locale } }) {
	const { page, button } = await getDictionary(lang);

	return (
		<div className='pb-12'>
			<h1 className='mb-4 font-medium text-2xl text-zk-green'>{page.services.title}</h1>
			<p className='max-w-2xl mb-12'>{page.services.description}</p>

			<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
				<ServiceCard
					title={page.services.accomodationCardTitle}
					description={page.services.accomodationCardContent}
					url={`/${lang}${ACCOMMODATION_PAGE}`}
					buttonTranslationText={button.seeMore}
				/>

				<ServiceCard
					title={page.services.restaurantCardTitle}
					description={page.services.restaurantCardContent}
					url={`/${lang}${RESTAURANT_PAGE}`}
					buttonTranslationText={button.seeMore}
				/>

				<ServiceCard
					title={page.services.recreationCardTitle}
					description={page.services.recreationCardContent}
					url={`/${lang}${RECREATION_PAGE}`}
					buttonTranslationText={button.seeMore}
				/>
			</div>
		</div>
	);
}
