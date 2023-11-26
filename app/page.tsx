'use client';

import Image from 'next/image';
import img from './assets/images/main.jpg';
import { Button } from './(ui)/components/shadcn/Button';
import Link from 'next/link';
import { ACCOMMODATION_PAGE, RESERVATIONS_PAGE } from './constants/routes';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from './(ui)/components/shadcn/Card';

export default function Home() {
	return (
		<div className='relative flex flex-col items-start w-full'>
			{/* <BackgroundImage
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
				<div className='z-20 flex flex-col items-center justify-center w-full py-12 bg-black/40'>
					<h1 className='mb-4 text-8xl text-zk-green'>Zeleni kut</h1>
					<h2 className='text-xl text-white'>Mjesto gdje sva osjetila uživaju</h2>
					<h3 className='text-white'>Kuda krenete, kamo stanete, ljepota se reda do ljepote</h3>

					<Button className='mt-8 text-white cursor-pointer'>
						<Link href={RESERVATIONS_PAGE}>Make a reservation</Link>
					</Button>
				</div>
			</BackgroundImage> */}

			<div className='flex items-center w-full justify-evenly'>
				<div>
					<h1 className='mb-4 text-8xl text-zk-green'>Zeleni kut</h1>
					<h2 className='text-xl'>Mjesto gdje sva osjetila uživaju</h2>
					<h3>Kuda krenete, kamo stanete, ljepota se reda do ljepote</h3>

					<Button className='mt-8 text-white cursor-pointer'>
						<Link href={RESERVATIONS_PAGE}>Make a reservation</Link>
					</Button>
				</div>

				<Image src={img} alt='bridge nature' width={500} height={200} className='rounded-lg' />
			</div>

			<div className='w-full p-4 pb-10 mt-20 bg-light-gray'>
				<h2 className='text-2xl font-bold text-center'>Novosti</h2>

				<div className='flex items-center justify-center gap-8 mt-8'>
					<Card className='flex flex-col justify-between max-w-sm'>
						<CardHeader>
							<CardTitle className='mb-2 text-xl'>Dan zena</CardTitle>

							<CardDescription>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae a praesentium itaque
								vel dicta provident deleniti ducimus sed natus iusto, nulla, explicabo dolorum
								voluptatum assumenda libero? Reprehenderit eum sunt unde.
							</CardDescription>
						</CardHeader>

						<CardContent>
							<Link href={'#'}>
								<Button className='w-full text-white xs:w-fit'>Vidi više</Button>
							</Link>
						</CardContent>
					</Card>

					<Card className='flex flex-col justify-between max-w-sm'>
						<CardHeader>
							<CardTitle className='mb-2 text-xl'>Martinje</CardTitle>

							<CardDescription>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae a praesentium itaque
								vel dicta provident deleniti ducimus sed natus iusto, nulla, explicabo dolorum
								voluptatum assumenda libero? Reprehenderit eum sunt unde.
							</CardDescription>
						</CardHeader>

						<CardContent>
							<Link href={'#'}>
								<Button className='w-full text-white xs:w-fit'>Vidi više</Button>
							</Link>
						</CardContent>
					</Card>

					<Card className='flex flex-col justify-between max-w-sm'>
						<CardHeader>
							<CardTitle className='mb-2 text-xl'>Turnir u Beli</CardTitle>

							<CardDescription>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae a praesentium itaque
								vel dicta provident deleniti ducimus sed natus iusto, nulla, explicabo dolorum
								voluptatum assumenda libero? Reprehenderit eum sunt unde.
							</CardDescription>
						</CardHeader>

						<CardContent>
							<Link href={'#'}>
								<Button className='w-full text-white xs:w-fit'>Vidi više</Button>
							</Link>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
