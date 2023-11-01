'use client';

import { HOME_PAGE } from '@/app/constants/routes';
import darkLogo from '@/public/zeleni-kut-logo-dark.svg';
import lightLogo from '@/public/zeleni-kut-logo-light.svg';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

export default function NavLogo() {
	const { theme } = useTheme();

	return (
		<Link href={HOME_PAGE} className='hidden sm:flex'>
			<Image
				src={theme === 'dark' ? lightLogo : darkLogo}
				alt='Picture of the author'
				className='fill-green'
			/>
		</Link>
	);
}
