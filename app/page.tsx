'use client';

import Bubaras from './(ui)/components/Bubaras';
import useTest from './hooks/useTest';

export default function Home() {
	const { data } = useTest();

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1>Hello world</h1>
			<Bubaras data={data} />
		</main>
	);
}
