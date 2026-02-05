import { HOME_PAGE } from '@/app/[lang]/constants/routes';
import { Locale } from '@/i18.config';
import darkLogo from '@/app/logo.png';
import Image from 'next/image';
import Link from 'next/link';

type NavLogoProps = {
	lang: Locale;
	className?: string;
};

export default function NavLogo({ lang, className }: Readonly<NavLogoProps>) {
	return (
		<Link href={`/${lang}${HOME_PAGE}`}>
			<Image
				src={darkLogo}
				alt='Picture of the author'
				className={`dark:invert-[25%] min-w-[200px] max-w-[500px] ${className ?? ''}`}
				priority
			/>
		</Link>
	);
}
