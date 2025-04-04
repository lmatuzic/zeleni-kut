import PDFView from '@/app/[lang]/components/shared/PDFView';
import { getDictionary } from '@/app/dictionaries/dictionary';
import { PdfsDocument } from '@/app/lib/graphql-codegen/graphql';
import { Locale } from '@/i18.config';
import FetchedImageGallery from './components/FetchedImageGallery';

export default async function Restaurant(props: { params: Promise<{ lang: Locale }> }) {
    const params = await props.params;

    const {
        lang
    } = params;

    const { page } = await getDictionary(lang);

    return (
		<div>
			<h1 className='mb-4 text-2xl font-medium text-zk-green'>{page.restaurant.title}</h1>
			<p className='mb-8 max-w-3xl'>{page.restaurant.infoText}</p>

			<div className='flex gap-4 items-center mb-12'>
				<PDFView
					queryKey={'food'}
					queryDocument={PdfsDocument}
					buttonTextTranslation={page.restaurant.foodMenu}
					fileName={`jelovnik.pdf`}
				/>

				<PDFView
					queryKey={'drinks'}
					queryDocument={PdfsDocument}
					buttonTextTranslation={page.restaurant.drinksMenu}
					fileName={`pica.pdf`}
				/>
			</div>

			<FetchedImageGallery />
		</div>
	);
}
