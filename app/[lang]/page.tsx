import { Locale } from '@/i18.config';
import Image from 'next/image';
import Link from 'next/link';
import { getDictionary } from '../dictionaries/dictionary';
import { Button } from './(ui)/components/shadcn/Button';
import Events from './(routes)/events/components/Events';
import traditionImg from './assets/images/1055.jpg';
import mainImg from './assets/images/zk.jpg';
import natureImg from './assets/images/main.jpg';
import canueImg from './assets/images/canue.jpg';
import capacityImg from './assets/images/capacity.jpg';
import roomImg from './assets/images/room1.jpg';
import { ACCOMMODATION_PAGE, CONTACT_PAGE } from './constants/routes';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
	const { button, page } = await getDictionary(lang);

	return (
		<div className='relative flex flex-col items-start w-full'>
			<div className='flex items-center w-full flex-col justify-center lg:flex-row gap-12'>
				<div className='flex flex-col items-center lg:items-start text-center'>
					<h1 className='mb-4 text-6xl lg:text-7xl text-zk-green'>Zeleni kut</h1>
					<h2 className='text-xl'>{page.home.subtitle}</h2>
					<h3>{page.home.subSubtitle}</h3>

					<Button className='mt-8 text-white cursor-pointer'>
						<Link href={CONTACT_PAGE}>{button.makeReservation}</Link>
					</Button>
				</div>

				<Image src={mainImg} alt='bridge nature' width={600} className='rounded-lg' priority />
			</div>

			<div className='w-full p-8 pb-12 mt-20 bg-sectionBg rounded-xl'>
				<h2 className='text-3xl text-center text-zk-green'>{page.home.events}</h2>

				<div className='flex flex-col lg:flex-row items-center justify-center gap-8 mt-8'>
					<Events locale={lang} />
				</div>
			</div>

			<div className='w-full p-8 mt-12'>
				<div className='flex gap-12 items-center'>
					<Image
						src={traditionImg}
						alt='tradition one'
						width={500}
						className='rounded-lg'
						priority
					/>

					<div className='text-center'>
						<h2 className='text-3xl text-zk-green mb-8'>{page.home.tradition}</h2>
						<p className='text-lg max-w-2xl'>{page.home.traditionText}</p>
					</div>
				</div>
			</div>

			<div className='w-full p-8 mt-12 bg-sectionBg rounded-xl'>
				<div className='flex gap-12 items-center'>
					<div className='text-center'>
						<h2 className='text-3xl text-zk-green mb-8'>{page.home.nature}</h2>
						<p className='text-lg max-w-2xl'>{page.home.natureText}</p>
					</div>

					<Image src={natureImg} alt='tradition one' width={500} className='rounded-lg' priority />
				</div>
			</div>

			<div className='w-full p-8 mt-12'>
				<div className='flex gap-12 items-center'>
					<Image
						src={capacityImg}
						alt='tradition one'
						width={500}
						className='rounded-lg'
						priority
					/>

					<div className='text-center'>
						<h2 className='text-3xl text-zk-green mb-8'>{page.home.capacity}</h2>
						<p className='text-lg max-w-2xl'>{page.home.capacityText}</p>
					</div>
				</div>
			</div>

			<div className='w-full p-8 mt-12 bg-sectionBg rounded-xl'>
				<div className='flex gap-12 items-center'>
					<div className='text-center'>
						<h2 className='text-3xl text-zk-green mb-8'>{page.home.recreation}</h2>
						<p className='text-lg max-w-2xl'>{page.home.recreationText}</p>
					</div>

					<Image src={canueImg} alt='tradition one' width={500} className='rounded-lg' priority />
				</div>
			</div>

			<div className='w-full p-8 mt-12'>
				<div className='flex gap-12 items-center'>
					<Image src={roomImg} alt='tradition one' width={500} className='rounded-lg' priority />

					<div className='text-center'>
						<h2 className='text-3xl text-zk-green mb-8'>{page.home.rest}</h2>
						<p className='text-lg max-w-2xl'>{page.home.restText}</p>

						<Button className='mt-8 text-white cursor-pointer'>
							<Link href={ACCOMMODATION_PAGE}>{button.seeMore}</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
