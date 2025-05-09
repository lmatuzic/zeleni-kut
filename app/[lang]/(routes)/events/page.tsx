import { Locale } from '@/i18.config';
import Events from './components/Events';
import { getDictionary } from '@/app/dictionaries/dictionary';
import { PageProps } from '@/.next/types/app/[lang]/page';

export default async function EventsPage(props: PageProps) {
	const params = await props.params;
	const lang = params.lang as Locale;
	const { page } = await getDictionary(lang);

	return (
		<>
			<header>
				<h1 className='font-medium text-2xl mb-6 text-zk-green'>{page.events.title}</h1>
			</header>

			<Events locale={lang} />
		</>
	);
}
