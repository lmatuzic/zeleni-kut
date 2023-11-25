'use client';

import Image from 'next/image';
import img from './assets/images/main.jpg';
import BackgroundImage from './components/BackgroundImage';
import { Button } from './(ui)/components/shadcn/Button';

export default function Home() {
	return (
		<div className='relative flex flex-col items-start w-full'>
			<BackgroundImage
				className='w-full h-[600px] rounded-lg'
				image={
					<Image
						priority
						src={img}
						alt='Image Alt Text'
						className='object-cover object-center'
						fill
					/>
				}
			>
				<div className='z-20 flex flex-col items-center justify-center w-full py-12 bg-black/60'>
					<h1 className='mb-4 text-8xl text-zk-green'>Zeleni kut</h1>
					<h2 className='text-xl text-white'>Mjesto gdje sva osjetila uživaju</h2>
					<h3 className='text-white'>Kuda krenete, kamo stanete, ljepota se reda do ljepote</h3>

					<Button className='mt-8'>Make a reservation</Button>
				</div>
			</BackgroundImage>
		</div>
	);
}
