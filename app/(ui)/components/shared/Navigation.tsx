import { HOME_PAGE, routes } from '@/app/constants/routes';
import Link from 'next/link';
import MobileNavigation from './MobileNavigation';
import ThemeToggleButton from './ThemeToggleButton';
import Image from 'next/image';
import logo from '@/public/zeleni-kut-logo-min.svg';

export default async function Navigation() {
	return (
		<nav className='w-full py-2 mb-8 border-b'>
			<div className='container flex items-center justify-between'>
				<Link href={HOME_PAGE} className='hidden sm:flex'>
					<Image src={logo} alt='Picture of the author' />
				</Link>

				<ul className='flex justify-between w-full sm:w-auto sm:items-center'>
					{routes.map((route) => (
						<li key={route.path} className='hidden mr-6 sm:flex'>
							<Link href={route.path}>{route.name}</Link>
						</li>
					))}

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
