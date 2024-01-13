'use client';

import { Button } from '@/app/[lang]/(ui)/components/shadcn/Button';
import useGQLQuery from '@/app/[lang]/hooks/useGQLQuery';
import { AssetsDocument, AssetsQuery } from '@/app/lib/graphql-codegen/graphql';
import { Locale } from '@/i18.config';
import Link from 'next/link';

type PdfMenuProps = {
	locale: Locale;
	translation: {
		lookAtMenu: string;
	};
};

export default function PdfMenu({ locale, translation }: PdfMenuProps) {
	const { data } = useGQLQuery<AssetsQuery>(['assets', locale], AssetsDocument, {
		locales: [locale],
	});

	return (
		<Button asChild className='p-6'>
			<Link href={`${data?.assets[0].url}`} download className='text-white'>
				{translation.lookAtMenu}
			</Link>
		</Button>
	);
}
