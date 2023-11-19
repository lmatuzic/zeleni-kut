import type { Metadata } from 'next';
import { GeistSans } from 'geist/font';
import { Quicksand } from '@next/font/google';
import './globals.css';
import Providers from './providers';
import Navigation from './(ui)/components/shared/navigation/Navigation';

export const metadata: Metadata = {
	title: 'Zeleni kut',
	description: 'Restoran Zeleni kut - Obitelj Puškarić - Mjesto gdje sva osjetila uživaju.',
};

export const quicksand = Quicksand({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={quicksand.className}>
				<Providers>
					<Navigation />
					{children}
				</Providers>
			</body>
		</html>
	);
}
