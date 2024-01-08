import MenuList from './components/MenuList';
import { Locale } from '@/i18.config';

export default function Menu({ params: { lang } }: { params: { lang: Locale } }) {
	return (
		<div>
			<h1 className='mb-8 text-2xl font-medium text-zk-green'>Jelovnik</h1>
			<MenuList locale={lang} />
		</div>
	);
}
