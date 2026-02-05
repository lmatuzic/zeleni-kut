import Gallery from '@/app/[lang]/components/shared/Gallery';
import { getDictionary } from '@/app/dictionaries/dictionary';
import { Locale } from '@/i18.config';

import img1 from '@/app/[lang]/assets/images/recreation/beach.jpg';
import img2 from '@/app/[lang]/assets/images/recreation/canue.jpg';
import img3 from '@/app/[lang]/assets/images/recreation/fishing.jpg';
import img4 from '@/app/[lang]/assets/images/recreation/volleyball.jpg';

export default async function Recreation(props: PageProps<'/[lang]/services/recreation'>) {
	const params = await props.params;
	const { lang } = params;
	const { page } = await getDictionary(lang as Locale);
	const galleryImages = [img1, img2, img3, img4];

	return (
		<div>
			<h1 className='mb-4 font-medium text-2xl text-zk-green'>{page.recreation.title}</h1>
			<p>{page.recreation.infoText}</p>

			<Gallery images={galleryImages} className='mt-10' />
		</div>
	);
}
