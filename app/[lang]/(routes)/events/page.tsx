import { Locale } from '@/i18.config';
import Events from './components/Events';
import { getDictionary } from '@/app/dictionaries/dictionary';

export default async function EventsPage({ params: { lang } }: { params: { lang: Locale } }) {
	const { page } = await getDictionary(lang);

	return (
		<>
			<header>
				<h1 className='font-medium text-2xl mb-6 text-zk-green'>{page.events.title}</h1>
				<Events locale={lang} />
			</header>
		</>
	);
}
