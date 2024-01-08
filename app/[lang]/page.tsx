import { Locale } from '@/i18.config';
import Image from 'next/image';
import Link from 'next/link';
import { getDictionary } from '../dictionaries/dictionary';
// import Events from './(routes)/events/components/Events';
import { Button } from './(ui)/components/shadcn/Button';
import traditionImg from './assets/images/homepage/1055.jpg';
import capacityImg from './assets/images/homepage/capacity.jpg';
import natureImg from './assets/images/nature/main.jpg';
import mainImg from './assets/images/nature/zk.jpg';
import canueImg from './assets/images/recreation/canue.jpg';
import roomImg from './assets/images/rooms/room9.jpeg';
import {
	ACCOMMODATION_PAGE,
	CONTACT_PAGE,
	RECREATION_PAGE,
	SERVICES_PAGE,
} from './constants/routes';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
	const { button, page } = await getDictionary(lang);

	return (
		<div className='relative flex flex-col items-start w-full'>
			<div className='flex items-center w-full flex-col justify-center lg:flex-row gap-12'>
				<div className='flex flex-col items-center lg:items-start text-center'>
					<h1 className='mb-4 font-medium text-6xl lg:text-7xl text-zk-green'>Zeleni kut</h1>
					<h2 className='text-xl'>{page.home.subtitle}</h2>
					<h3>{page.home.subSubtitle}</h3>

					<Button className='mt-8 text-white cursor-pointer'>
						<Link href={`/${lang}${CONTACT_PAGE}`}>{button.makeReservation}</Link>
					</Button>
				</div>

				<Image src={mainImg} alt='bridge nature' width={600} className='rounded-lg' priority />
			</div>

			{/* <Events locale={lang} translation={page.events} /> */}

			<div className='w-full p-4 md:p-8 mt-20 border border-solid bg-sectionBg rounded-xl'>
				<div className='flex flex-col-reverse lg:flex-row gap-12 items-center'>
					<Image
						src={traditionImg}
						alt='tradition one'
						width={500}
						className='rounded-lg'
						priority
					/>

					<div className='text-center'>
						<h2 className='text-2xl font-medium lg:text-3xl text-zk-green mb-8'>
							{page.home.tradition}
						</h2>

						<p className='lg:text-lg max-w-2xl'>{page.home.traditionText}</p>

						<Button className='mt-8 text-white cursor-pointer'>
							<Link href={`/${lang}${SERVICES_PAGE}`}>{button.seeMore}</Link>
						</Button>
					</div>
				</div>
			</div>

			<div className='w-full p-4 md:p-8 mt-12'>
				<div className='flex flex-col lg:flex-row gap-12 items-center'>
					<div className='text-center'>
						<h2 className='text-2xl font-medium lg:text-3xl text-zk-green mb-8'>
							{page.home.nature}
						</h2>

						<p className='lg:text-lg max-w-2xl'>{page.home.natureText}</p>
					</div>

					<Image src={natureImg} alt='tradition one' width={500} className='rounded-lg' priority />
				</div>
			</div>

			<div className='w-full p-4 md:p-8 mt-12 border border-solid bg-sectionBg rounded-xl'>
				<div className='flex flex-col-reverse lg:flex-row gap-12 items-center'>
					<Image
						src={capacityImg}
						alt='tradition one'
						width={500}
						className='rounded-lg'
						priority
					/>

					<div className='text-center'>
						<h2 className='text-2xl font-medium lg:text-3xl text-zk-green mb-8'>
							{page.home.capacity}
						</h2>

						<p className='lg:text-lg max-w-2xl'>{page.home.capacityText}</p>
					</div>
				</div>
			</div>

			<div className='w-full p-4 md:p-8 mt-12'>
				<div className='flex flex-col lg:flex-row gap-12 items-center'>
					<div className='text-center'>
						<h2 className='text-2xl font-medium lg:text-3xl text-zk-green mb-8'>
							{page.home.recreation}
						</h2>

						<p className='lg:text-lg max-w-2xl'>{page.home.recreationText}</p>

						<Button className='mt-8 text-white cursor-pointer'>
							<Link href={`/${lang}${RECREATION_PAGE}`}>{button.seeMore}</Link>
						</Button>
					</div>

					<Image src={canueImg} alt='tradition one' width={500} className='rounded-lg' priority />
				</div>
			</div>

			<div className='w-full p-4 md:p-8 mt-12 border border-solid bg-sectionBg rounded-xl'>
				<div className='flex flex-col-reverse lg:flex-row gap-12 items-center'>
					<Image src={roomImg} alt='tradition one' width={500} className='rounded-lg' priority />

					<div className='text-center'>
						<h2 className='text-2xl font-medium lg:text-3xl text-zk-green mb-8'>
							{page.home.rest}
						</h2>

						<p className='lg:text-lg max-w-2xl'>{page.home.restText}</p>

						<Button className='mt-8 text-white cursor-pointer'>
							<Link href={`/${lang}${ACCOMMODATION_PAGE}`}>{button.seeMore}</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
