import { getDictionary } from '@/app/dictionaries/dictionary';
import { Locale } from '@/i18.config';

export default async function About({ params: { lang } }: { params: { lang: Locale } }) {
	const { page } = await getDictionary(lang);

	return (
		<div>
			<h1 className='mb-4 font-medium text-2xl text-zk-green'>{page.about.title}</h1>
			<p className='max-w-lg'>{page.about.text1}</p>
			<br />
			<p>{page.about.text2}</p>
			<br />
			<p>{page.about.text3}</p>
			<br />
			<p>{page.about.text4}</p>
		</div>
	);
}
