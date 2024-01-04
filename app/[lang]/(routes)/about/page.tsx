import { getDictionary } from '@/app/dictionaries/dictionary';
import { Locale } from '@/i18.config';

export default async function About({ params: { lang } }: { params: { lang: Locale } }) {
	const { page } = await getDictionary(lang);

	return (
		<div>
			<h1 className='mb-4 text-2xl text-zk-green'>{page.about.title}</h1>
			<p className='max-w-lg'>{page.about['text-1']}</p>
			<br />
			<p>{page.about['text-2']}</p>
			<br />
			<p>{page.about['text-3']}</p>
			<br />
			<p>{page.about['text-3']}</p>
		</div>
	);
}
