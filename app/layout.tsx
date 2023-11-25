import { Quicksand } from '@next/font/google';
import type { Metadata } from 'next';
import Footer from './(ui)/components/shared/Footer';
import Navigation from './(ui)/components/shared/navigation/Navigation';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
	title: 'Zeleni kut',
	description: 'Restoran Zeleni kut - Obitelj Puškarić - Mjesto gdje sva osjetila uživaju.',
};

export const quicksand = Quicksand({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${quicksand.className} min-h-screen container items-center justify-between py-4`}
			>
				<Providers>
					<Navigation />
					<main className='my-8'>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
