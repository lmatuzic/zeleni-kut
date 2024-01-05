import { Locale } from '@/i18.config';
import Image from 'next/image';
import Link from 'next/link';
import { getDictionary } from '../dictionaries/dictionary';
import { Button } from './(ui)/components/shadcn/Button';
// import ImageCarousel from './(ui)/components/shared/ImageCarousel';
import Events from './(routes)/events/components/Events';
import img from './assets/images/main.jpg';
import { CONTACT_PAGE } from './constants/routes';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
	const { button, page } = await getDictionary(lang);

	return (
		<div className='relative flex flex-col items-start w-full'>
			<div className='flex items-center w-full flex-col justify-center lg:flex-row gap-12'>
				<div className='flex flex-col items-center lg:items-start text-center'>
					<h1 className='mb-4 text-6xl lg:text-7xl text-zk-green'>Zeleni kut</h1>
					<h2 className='text-xl'>{page.home.subtitle}</h2>
					<h3>{page.home['sub-subtitle']}</h3>

					<Button className='mt-8 text-white cursor-pointer'>
						<Link href={CONTACT_PAGE}>{button['make-reservation']}</Link>
					</Button>
				</div>

				<Image src={img} alt='bridge nature' width={600} className='rounded-lg' priority />
			</div>

			<div className='w-full p-8 pb-12 mt-20 bg-sectionBg rounded-xl'>
				<h2 className='text-2xl font-bold text-center'>{page.home.events}</h2>

				<div className='flex flex-col lg:flex-row items-center justify-center gap-8 mt-8'>
					<Events locale={lang} />
				</div>
			</div>

			{/* 
			<div className='flex items-center justify-center w-full mt-20 pb-12'>
				<ImageCarousel />
			</div> */}
		</div>
	);
}
