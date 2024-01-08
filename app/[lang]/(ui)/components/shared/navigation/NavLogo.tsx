'use client';

import { HOME_PAGE } from '@/app/[lang]/constants/routes';
import { Locale } from '@/i18.config';
import darkLogo from '@/public/zeleni-kut-logo-dark.svg';
import lightLogo from '@/public/zeleni-kut-logo-light.svg';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

type NavLogoProps = {
	lang: Locale;
};

export default function NavLogo({ lang }: NavLogoProps) {
	const { theme } = useTheme();

	return (
		<Link href={`/${lang}/${HOME_PAGE}`} className='hidden sm:flex'>
			<Image
				src={theme === 'dark' ? lightLogo : darkLogo}
				alt='Picture of the author'
				className='fill-green'
			/>
		</Link>
	);
}
