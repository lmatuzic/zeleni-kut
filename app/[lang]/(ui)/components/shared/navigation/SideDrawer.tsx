'use client';

import { HOME_PAGE, routes } from '@/app/[lang]/constants/routes';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../../shadcn/Sheet';
import LanguageSwitch from '../LanguageSwitch';
import { Locale } from '@/i18.config';

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
};

export default function SideDrawer({ lang, navigation }: SideDrawerProps) {
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
						<Link href={HOME_PAGE} onClick={handleCloseMobileNav} className='text-xl'>
							{navigation.home}
						</Link>
					</li>

					<li>
						<Link href={`/${lang}/about`} className='text-xl'>
							{navigation.about}
						</Link>
					</li>

					<li>
						<Link href={`/${lang}/events`} className='text-xl'>
							{navigation.events}
						</Link>
					</li>

					<li>
						<Link href={`/${lang}/services`} className='text-xl'>
							{navigation.services}
						</Link>
					</li>

					<li>
						<Link href={`/${lang}/gallery`} className='text-xl'>
							{navigation.gallery}
						</Link>
					</li>

					<li>
						<Link href={`/${lang}/contact`} className='text-xl'>
							{navigation.contact}
						</Link>
					</li>
				</ul>

				<LanguageSwitch />
			</SheetContent>
		</Sheet>
	);
}
