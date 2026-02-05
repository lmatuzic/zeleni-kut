'use client';

import CroatiaIcon from '@/app/[lang]/assets/icons/croatia-icon.svg';
import UKIcon from '@/app/[lang]/assets/icons/uk-icon.svg';
import { i18n } from '@/i18.config';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

	return (
		<ul className='flex'>
			{i18n.locales.map((locale) => {
				return (
					<li key={locale}>
						<Link href={redirectedPathName(locale)}>
							<Image
								src={locale === 'hr' ? CroatiaIcon : UKIcon}
								alt={locale === 'hr' ? 'croatian language' : 'english language'}
								width={30}
								height={30}
								className='rounded-full mr-2 last:mr-0 last:ml-2'
								priority
							/>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
