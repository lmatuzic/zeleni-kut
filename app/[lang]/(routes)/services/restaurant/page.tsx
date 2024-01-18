import PDFView from '@/app/[lang]/components/shared/PDFView';
import { getDictionary } from '@/app/dictionaries/dictionary';
import { PdfsDocument } from '@/app/lib/graphql-codegen/graphql';
import { Locale } from '@/i18.config';

export default async function Restaurant({ params: { lang } }: { params: { lang: Locale } }) {
	const { page } = await getDictionary(lang);

	return (
		<div>
			<h1 className='mb-8 text-2xl font-medium text-zk-green'>{page.restaurant.title}</h1>
			<p className='mb-8 max-w-3xl'>{page.restaurant.infoText}</p>

			<PDFView
				queryKey={'assets'}
				queryDocument={PdfsDocument}
				buttonTextTranslation={page.restaurant.lookAtMenu}
				fileName={`jelovnik-2023.pdf`}
			/>
		</div>
	);
}
