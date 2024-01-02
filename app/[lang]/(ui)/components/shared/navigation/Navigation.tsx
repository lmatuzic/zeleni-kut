import { HOME_PAGE } from '@/app/[lang]/constants/routes';
import { getDictionary } from '@/app/dictionaries/dictionary';
import { Locale } from '@/i18.config';
import Link from 'next/link';
import LanguageSwitch from '../LanguageSwitch';
import ThemeToggle from '../ThemeToggle';
import MobileNavigation from './MobileNavigation';

export default async function Navigation({ lang }: { lang: Locale }) {
	const { navigation, theme } = await getDictionary(lang);

	return (
		<nav className='w-full'>
			<div className='container flex items-center justify-between py-4'>
				{/* <NavLogo /> */}
				<Link href={HOME_PAGE}>Logo</Link>

				<ul className='hidden md:flex justify-between gap-6 w-full md:w-auto items-center'>
					<li>
						<Link href={`/${lang}/about`}>{navigation.about}</Link>
					</li>

					<li>
						<Link href={`/${lang}/events`}>{navigation.events}</Link>
					</li>

					<li>
						<Link href={`/${lang}/services`}>{navigation.services}</Link>
					</li>

					<li>
						<Link href={`/${lang}/gallery`}>{navigation.gallery}</Link>
					</li>

					<li>
						<Link href={`/${lang}/contact`}>{navigation.contact}</Link>
					</li>

					<li>
						<ThemeToggle theme={theme} />
					</li>

					<li>
						<LanguageSwitch />
					</li>
				</ul>

				<MobileNavigation lang={lang} />
			</div>
		</nav>
	);
}
