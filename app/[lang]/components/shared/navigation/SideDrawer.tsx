'use client';

import {
	CONTACT_PAGE,
	EVENTS_PAGE,
	GALLERY_PAGE,
	HOME_PAGE,
	SERVICES_PAGE,
} from '@/app/[lang]/constants/routes';
import { Locale } from '@/i18.config';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../../shadcn/Sheet';
import LanguageSwitch from '../LanguageSwitch';
import ThemeToggle from '../ThemeToggle';
import NavLink from './NavLink';

type SideDrawerProps = {
	lang: Locale;
	navigation: {
		home: string;
		events: string;
		about: string;
		services: string;
		contact: string;
		gallery: string;
	};
	theme: {
		light: string;
		dark: string;
	};
};

export default function SideDrawer({ lang, navigation, theme }: SideDrawerProps) {
	const [isOpened, setIsOpened] = useState(false);

	const handleOpenMobileNav = () => {
		setIsOpened(true);
	};

	const handleCloseMobileNav = () => {
		setIsOpened(false);
	};

	return (
		<Sheet open={isOpened} onOpenChange={setIsOpened}>
			<SheetTrigger onClick={handleOpenMobileNav} className='block md:hidden'>
				<Menu />
			</SheetTrigger>

			<SheetContent className='pt-20 flex flex-col justify-between items-end'>
				<ul className='flex flex-col items-end gap-4'>
					<li>
						<ThemeToggle theme={theme} />
					</li>

					<li>
						<NavLink
							route={`/${lang}${HOME_PAGE}`}
							onClick={handleCloseMobileNav}
							className='text-xl'
						>
							{navigation.home}
						</NavLink>
					</li>

					<li>
						<NavLink
							route={`/${lang}${EVENTS_PAGE}`}
							onClick={handleCloseMobileNav}
							className='text-xl'
						>
							{navigation.events}
						</NavLink>
					</li>

					<li>
						<NavLink
							route={`/${lang}${SERVICES_PAGE}`}
							onClick={handleCloseMobileNav}
							className='text-xl'
						>
							{navigation.services}
						</NavLink>
					</li>

					<li>
						<NavLink
							route={`/${lang}${GALLERY_PAGE}`}
							onClick={handleCloseMobileNav}
							className='text-xl'
						>
							{navigation.gallery}
						</NavLink>
					</li>

					<li>
						<NavLink
							route={`/${lang}${CONTACT_PAGE}`}
							onClick={handleCloseMobileNav}
							className='text-xl'
						>
							{navigation.contact}
						</NavLink>
					</li>
				</ul>

				<LanguageSwitch />
			</SheetContent>
		</Sheet>
	);
}
