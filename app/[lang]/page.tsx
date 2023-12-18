import Image from 'next/image';
import img from './assets/images/main.jpg';
import { Button } from './(ui)/components/shadcn/Button';
import Link from 'next/link';
import { RESERVATIONS_PAGE } from './constants/routes';
import Events from './(ui)/components/events/Events';

export default function Home({ params: { lang } }: { params: { lang: Locale } }) {
	return (
		<div className='relative flex flex-col items-start w-full'>
			<div className='flex items-center w-full flex-col justify-center lg:flex-row gap-12'>
				<div className='flex flex-col items-center lg:items-start'>
					<h1 className='mb-4 text-6xl lg:text-7xl text-zk-green'>Zeleni kut</h1>
					<h2 className='text-xl'>Mjesto gdje sva osjetila uživaju</h2>
					<h3>Kuda krenete, kamo stanete, ljepota se reda do ljepote</h3>

					<Button className='mt-8 text-white cursor-pointer'>
						<Link href={RESERVATIONS_PAGE}>Make a reservation</Link>
					</Button>
				</div>

				<Image src={img} alt='bridge nature' width={600} className='rounded-lg' priority />
			</div>

			<div className='w-full p-8 pb-12 mt-20 bg-sectionBg rounded-xl'>
				<h2 className='text-2xl font-bold text-center'>Dogadanja</h2>
				<Events />
			</div>
		</div>
	);
}
