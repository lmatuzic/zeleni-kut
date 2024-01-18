'use client';

import { Button } from '@/app/[lang]/components/shadcn/Button';
import useGQLQuery from '@/app/[lang]/hooks/useGQLQuery';
import { DocumentNode } from 'graphql';
import Link from 'next/link';
import { FC } from 'react';

type AssetQuery = {
	__typename?: 'Query' | undefined;
	assets: Array<{
		__typename?: 'Asset';
		id: string;
		fileName: string;
		url: string;
	}>;
};

type PDFViewProps = {
	queryKey: string;
	queryDocument: DocumentNode;
	buttonTextTranslation: string;
	fileName: string;
	className?: string;
};

const PDFView: FC<PDFViewProps> = ({
	queryKey,
	queryDocument,
	fileName,
	buttonTextTranslation,
	className,
}) => {
	const { data } = useGQLQuery<AssetQuery>([queryKey], queryDocument, {
		fileName,
	});

	return (
		<>
			{data && data.assets && data.assets[0] ? (
				<Button asChild className={`p-6 ${className}`}>
					<Link href={data.assets[0].url} download className='text-white'>
						{buttonTextTranslation}
					</Link>
				</Button>
			) : null}
		</>
	);
};

export default PDFView;
