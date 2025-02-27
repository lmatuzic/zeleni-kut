'use client';

import {
	CONTACT_PAGE,
	EVENTS_PAGE,
	GALLERY_PAGE,
	SERVICES_PAGE,
} from '@/app/[lang]/constants/routes';
import { Locale } from '@/i18.config';
import LanguageSwitch from '../LanguageSwitch';
import ThemeToggle from '../ThemeToggle';
import NavLink from './NavLink';

type NavMenuProps = {
	lang: Locale;
	translation: {
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

export default function NavMenu({ lang, translation, theme }: Readonly<NavMenuProps>) {
	return (
		<ul className='hidden md:flex justify-between gap-6 w-full md:w-auto items-center'>
			<li>
				<NavLink route={`/${lang}${SERVICES_PAGE}`}>{translation.services}</NavLink>
			</li>

			<li>
				<NavLink route={`/${lang}${EVENTS_PAGE}`}>{translation.events}</NavLink>
			</li>

			<li>
				<NavLink route={`/${lang}${GALLERY_PAGE}`}>{translation.gallery}</NavLink>
			</li>

			<li>
				<NavLink route={`/${lang}${CONTACT_PAGE}`}>{translation.contact}</NavLink>
			</li>

			<li>
				<ThemeToggle theme={theme} />
			</li>

			<li>
				<LanguageSwitch />
			</li>
		</ul>
	);
}
