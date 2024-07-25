import { Locale, i18n } from '@/i18.config';
import { Comfortaa } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import Footer from './components/shared/Footer';
import Navigation from './components/shared/navigation/Navigation';
import './globals.css';
import Providers from './providers';
import { Toaster } from './components/shadcn/Toaster';

export const metadata: Metadata = {
	title: 'Zeleni kut',
	description: 'Restoran Zeleni kut - Obitelj Puškarić - Mjesto gdje sva osjetila uživaju.',
	icons: {
		icon: [
			{
				type: 'image/svg+xml',
				url: '/images/zeleni-kut-favicon.svg',
				href: '/images/zeleni-kut-favicon.svg',
			},
		],
	},
};

const comfortaa = Comfortaa({ subsets: ['latin'] });

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: { lang: Locale };
}>) {
	const runVercelAnalytics = () => {
		if (process.env.NODE_ENV === 'development') {
			return;
		}

		return (
			<>
				<SpeedInsights />
				<Analytics />
			</>
		);
	};

	return (
		<html lang={params.lang} className={comfortaa.className} suppressHydrationWarning>
			<body className={`min-h-screen`}>
				<Providers>
					<Navigation lang={params.lang} />
					<main className='container items-center justify-between mt-24 md:mt-32'>{children}</main>
					<Footer lang={params.lang} />
				</Providers>

				<Toaster />
				{runVercelAnalytics()}
			</body>
		</html>
	);
}
