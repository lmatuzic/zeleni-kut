import { getDictionary } from '@/app/dictionaries/dictionary';
import SideDrawer from './SideDrawer';
import { Locale } from '@/i18.config';

export default async function MobileNavigation({ lang }: { lang: Locale }) {
	const { navigation } = await getDictionary(lang);

	return <SideDrawer lang={lang} navigation={navigation} />;
}
