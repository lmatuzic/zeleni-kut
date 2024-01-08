import { HOME_PAGE } from '@/app/[lang]/constants/routes';
import { Locale } from '@/i18.config';
import darkLogo from '@/public/zeleni-kut-logo-dark.svg';
import Image from 'next/image';
import Link from 'next/link';

type NavLogoProps = {
	lang: Locale;
	className?: string;
};

export default function NavLogo({ lang, className }: NavLogoProps) {
	return (
		<Link href={`/${lang}${HOME_PAGE}`} className='hidden sm:flex'>
			<Image
				src={darkLogo}
				alt='Picture of the author'
				className={`dark:invert ${className ? className : ''}`}
			/>
		</Link>
	);
}
