'use client';

import {
	ABOUT_PAGE,
	CONTACT_PAGE,
	EVENTS_PAGE,
	GALLERY_PAGE,
	HOME_PAGE,
	SERVICES_PAGE,
} from '@/app/[lang]/constants/routes';
import { Locale } from '@/i18.config';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../../shadcn/Sheet';
import LanguageSwitch from '../LanguageSwitch';
import ThemeToggle from '../ThemeToggle';

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
			<SheetTrigger onClick={handleOpenMobileNav} className='flex md:hidden'>
				<Menu />
			</SheetTrigger>

			<SheetContent className='pt-20 flex flex-col justify-between items-end'>
				<ul className='flex flex-col items-end gap-4'>
					<li>
						<ThemeToggle theme={theme} />
					</li>

					<li>
						<Link href={`/${lang}/${HOME_PAGE}`} onClick={handleCloseMobileNav} className='text-xl'>
							{navigation.home}
						</Link>
					</li>

					<li>
						<Link
							href={`/${lang}/${ABOUT_PAGE}`}
							onClick={handleCloseMobileNav}
							className='text-xl'
						>
							{navigation.about}
						</Link>
					</li>

					<li>
						<Link
							href={`/${lang}/${EVENTS_PAGE}`}
							onClick={handleCloseMobileNav}
							className='text-xl'
						>
							{navigation.events}
						</Link>
					</li>

					<li>
						<Link
							href={`/${lang}/${SERVICES_PAGE}`}
							onClick={handleCloseMobileNav}
							className='text-xl'
						>
							{navigation.services}
						</Link>
					</li>

					<li>
						<Link
							href={`/${lang}/${GALLERY_PAGE}`}
							onClick={handleCloseMobileNav}
							className='text-xl'
						>
							{navigation.gallery}
						</Link>
					</li>

					<li>
						<Link
							href={`/${lang}/${CONTACT_PAGE}`}
							onClick={handleCloseMobileNav}
							className='text-xl'
						>
							{navigation.contact}
						</Link>
					</li>
				</ul>

				<LanguageSwitch />
			</SheetContent>
		</Sheet>
	);
}
