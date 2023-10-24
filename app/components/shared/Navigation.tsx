import { EVENTS_PAGE, HOME_PAGE } from '@/app/constants/routes';
import Link from 'next/link';
import MobileNavigation from './MobileNavigation';
import ThemeToggleButton from './ThemeToggleButton';

export default async function Navigation() {
	return (
		<nav className='w-full py-2 mb-8 border-b'>
			<div className='container flex items-center justify-between'>
				<Link href={HOME_PAGE} className='hidden sm:flex'>
					Logo
				</Link>

				<ul className='flex justify-between w-full sm:w-auto sm:items-center'>
					<li className='hidden mr-6 sm:flex'>
						<Link href={EVENTS_PAGE}>Events</Link>
					</li>

					<li>
						<ThemeToggleButton />
					</li>

					<li className='flex sm:hidden'>
						<MobileNavigation />
					</li>
				</ul>
			</div>
		</nav>
	);
}
