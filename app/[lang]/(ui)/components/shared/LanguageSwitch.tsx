'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Locale, i18n } from '@/i18.config';
import CroatiaIcon from '@/app/[lang]/assets/icons/croatia-icon.svg';
import UKIcon from '@/app/[lang]/assets/icons/uk-icon.svg';

// Map locales to their respective icons
const localeIconMap = {
	hr: CroatiaIcon,
	en: UKIcon,
};

export default function LanguageSwitch() {
	const pathName = usePathname();

	const redirectedPathName = (locale: string) => {
		if (!pathName) {
			return '/';
		}

		const segments = pathName.split('/');
		segments[1] = locale;

		return segments.join('/');
	};

	const renderCountryFlag = (locale: Locale) => {
		if (locale === 'hr') {
			return (
				<Image
					src={CroatiaIcon}
					alt='croatia-icon'
					width={30}
					height={30}
					className='rounded-full mr-2'
					priority
				/>
			);
		}

		return (
			<Image
				src={UKIcon}
				alt='croatia-icon'
				width={30}
				height={30}
				className='rounded-full'
				priority
			/>
		);
	};

	return (
		<ul className='flex'>
			{i18n.locales.map((locale) => {
				const IconComponent = localeIconMap[locale]; // Get the corresponding icon component

				return (
					<li key={locale}>
						<Link href={redirectedPathName(locale)}>
							{renderCountryFlag(locale)}
							{/* {locale} */}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
