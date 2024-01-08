import BookingIcon from '@/app/[lang]/assets/icons/booking-icon.svg';
import TripAdvisorIcon from '@/app/[lang]/assets/icons/trip-advisor-icon.svg';
import { getDictionary } from '@/app/dictionaries/dictionary';
import { Locale } from '@/i18.config';
import { FacebookIcon, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { Separator } from '../shadcn/Separator';

export default async function Footer({ lang }: { lang: Locale }) {
	const { footer } = await getDictionary(lang);

	return (
		<div className='sticky top-[100vh] border-t border-solid bg-sectionBg mt-20 py-12'>
			<div className='container flex items-baseline gap-16 p-8 flex-col md:flex-row static sm:relative'>
				<div className='w-full'>
					<div className='mb-4 font-semibold text-2xl'>{footer.workingHours}</div>

					<div className='border border-solid border-gray-400 rounded-md  p-4'>
						<div>01.03. - 11.11.</div>
						<Separator className='bg-gray-400 my-2' />
						<div className='flex sm:items-center justify-between sm:flex-row flex-col items-start'>
							<span className='mr-6'>
								{footer.monday} - {footer.sunday}
							</span>
							<span>08:00 - 23:00</span>
						</div>
					</div>

					<div className='border border-solid border-gray-400 rounded-md mt-4 p-4'>
						<div>12.11. - 01.03.</div>
						<Separator className='bg-gray-400 my-2' />
						<div className='mr-4'>{footer.nonWorkingDays}</div>
					</div>
				</div>

				<div className='w-full'>
					<div className='mb-4 font-semibold text-2xl'>{footer.contact}</div>

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

				<div className='flex items-center gap-4 sm:absolute bottom-6 right-6'>
					<a href='https://www.facebook.com/zeleni.kut' target='_blank' aria-label='Facebook'>
						<FacebookIcon size={30} />
					</a>

					<a
						href='https://www.booking.com/hotel/hr/zeleni-kut.html'
						target='_blank'
						aria-label='Booking'
					>
						<Image src={BookingIcon} alt='booking-icon' width={30} height={30} />
					</a>

					<a
						href='https://www.tripadvisor.co.uk/Hotel_Review-g1959799-d1093472-Reviews-Zeleni_Kut-Gornji_Zvecaj_Karlovac_County_Central_Croatia.html'
						target='_blank'
						aria-label='Trip Advisor'
					>
						<Image src={TripAdvisorIcon} alt='booking-icon' width={30} height={30} />
					</a>
				</div>
			</div>
		</div>
	);
}
