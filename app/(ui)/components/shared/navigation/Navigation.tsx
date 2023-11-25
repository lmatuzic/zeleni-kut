import { routes } from '@/app/constants/routes';
import MobileNavigation from './MobileNavigation';
import ThemeToggleButton from '../ThemeToggleButton';
import NavLink from './NavLink';

export default async function Navigation() {
	return (
		<nav className='w-full'>
			<div className='container flex items-center justify-between py-4'>
				{/* <NavLogo /> */}
				<div>Logo</div>

				<ul className='flex justify-between w-full sm:w-auto sm:items-center'>
					{routes.map((route) => (
						<li key={route.path} className='hidden mr-6 sm:flex'>
							<NavLink route={route} />
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
