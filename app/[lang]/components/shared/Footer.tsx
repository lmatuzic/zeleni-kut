import { getDictionary } from '@/app/dictionaries/dictionary';
import { Locale } from '@/i18.config';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Separator } from '../shadcn/Separator';
import Social from './Social';

export default async function Footer({ lang }: Readonly<{ lang: Locale }>) {
	const { footer } = await getDictionary(lang);

	return (
		<div className='sticky top-[100vh] border-t border-solid bg-sectionBg mt-20 py-12'>
			<div className='container flex items-baseline gap-16 p-8 flex-col md:flex-row static sm:relative'>
				<div className='w-full'>
					<div className='mb-4 font-medium text-2xl'>{footer.workingHours}</div>

					<div className='border border-solid border-gray-400 rounded-md p-4 mb-4'>
						<div className='flex sm:items-center justify-between sm:flex-row flex-col items-start'>
							<span className='mr-6'>
								{footer.tuesday} - {footer.closed}
							</span>
						</div>
					</div>

					<div className='border border-solid border-gray-400 rounded-md p-4'>
						<div>02.03. - 28.03.</div>

						<Separator className='bg-gray-400 my-2' />

						<div className='flex sm:items-center justify-between sm:flex-row flex-col items-start'>
							<span className='mr-6'>
								{footer.monday} - {footer.sunday}
							</span>

							<span>09:00 - 21:00</span>
						</div>
					</div>

					<div className='border border-solid border-gray-400 rounded-md mt-4 p-4'>
						<div>29.03. - 01.11.</div>

						<Separator className='bg-gray-400 my-2' />

						<div className='flex sm:items-center justify-between sm:flex-row flex-col items-start'>
							<span className='mr-6'>
								{footer.monday} - {footer.sunday}
							</span>

							<span>07:00 - 23:00</span>
						</div>
					</div>

					<div className='border border-solid border-gray-400 rounded-md mt-4 p-4'>
						<div>12.11. - 01.03.</div>
						<Separator className='bg-gray-400 my-2' />
						<div className='mr-4'>{footer.closed}</div>
					</div>
				</div>

				<div className='w-full'>
					<div className='mb-4 font-medium text-2xl'>{footer.contact}</div>

					<div className='flex items-center mb-4'>
						<Phone className='mr-2' size={16} />
						<a href='tel:+38547866100'>385 (0) 47 866 100</a>
					</div>

					<div className='flex items-center mb-4'>
						<Mail className='mr-2' size={16} />
						<a href='mailto:sinfo@zeleni-kut.com'>info@zeleni-kut.com</a>
					</div>

					<div className='flex items-center'>
						<MapPin className='mr-2' size={16} />
						<a href='https://maps.app.goo.gl/KtcGaaS4kWm57LKD8' target='_blank'>
							Zvečaj 109, 47250 Duga Resa
						</a>
					</div>
				</div>

				<Social />
			</div>
		</div>
	);
}
