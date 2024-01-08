import { Locale, i18n } from '@/i18.config';
import { Quicksand } from '@next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
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

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: Locale };
}) {
	return (
		<html lang={params.lang} suppressHydrationWarning>
			<body className={`${quicksand.className} min-h-screen`}>
				<Providers>
					<Navigation lang={params.lang} />
					<main className='container items-center justify-between my-20 md:my-28'>{children}</main>
					<Footer lang={params.lang} />
				</Providers>

				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
