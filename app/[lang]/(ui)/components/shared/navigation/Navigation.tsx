import { HOME_PAGE } from '@/app/[lang]/constants/routes';
import MobileNavigation from './MobileNavigation';
import ThemeToggleButton from '../ThemeToggleButton';
// import NavLink from './NavLink';
import Link from 'next/link';
import { Locale } from '@/i18.config';
import LanguageSwitch from '../LanguageSwitch';
import { getDictionary } from '@/app/dictionaries/dictionary';

export default async function Navigation({ lang }: { lang: Locale }) {
	const { navigation } = await getDictionary(lang);

	console.log(lang);

	return (
		<nav className='w-full'>
			<div className='container flex items-center justify-between py-4'>
				{/* <NavLogo /> */}
				<Link href={HOME_PAGE}>Logo</Link>

				<ul className='flex justify-between gap-4 w-full sm:w-auto sm:items-center'>
					{/* {routes.map((route) => (
						<li key={route.path} className='hidden mr-6 sm:flex'>
							<NavLink route={route} />
						</li>
					))} */}

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
						<Link href={`/${lang}/contact`}>{navigation.contact}</Link>
					</li>

					<li>
						<ThemeToggleButton />
					</li>

					<li>
						<LanguageSwitch />
					</li>

					<li className='flex sm:hidden'>
						<MobileNavigation />
					</li>
				</ul>
			</div>
		</nav>
	);
}
