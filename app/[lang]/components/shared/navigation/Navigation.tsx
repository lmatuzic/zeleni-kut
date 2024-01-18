import { getDictionary } from '@/app/dictionaries/dictionary';
import { Locale } from '@/i18.config';
import MobileNavigation from './MobileNavigation';
import NavLogo from './NavLogo';
import NavMenu from './NavMenu';

export default async function Navigation({ lang }: { lang: Locale }) {
	const { navigation, theme } = await getDictionary(lang);

	return (
		<nav className='w-full fixed top-0 z-50 bg-background border-b border-solid'>
			<div className='container flex items-center justify-between'>
				<NavLogo lang={lang} />
				<NavMenu lang={lang} theme={theme} translation={navigation} />
				<MobileNavigation lang={lang} />
			</div>
		</nav>
	);
}
