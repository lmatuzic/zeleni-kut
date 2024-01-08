'use client';

import BookingIcon from '@/app/[lang]/assets/icons/booking-icon.svg';
import FacebookIcon from '@/app/[lang]/assets/icons/facebook-icon.svg';
import TripAdvisorIcon from '@/app/[lang]/assets/icons/trip-advisor-icon.svg';
import Image from 'next/image';

export default function Social() {
	return (
		<div className='flex items-center gap-4 sm:absolute bottom-6 right-6'>
			<a href='https://www.facebook.com/zeleni.kut' target='_blank' aria-label='Facebook'>
				<Image
					src={FacebookIcon}
					alt='facebook-icon'
					width={28}
					height={28}
					className='dark:invert'
				/>
			</a>

			<a
				href='https://www.booking.com/hotel/hr/zeleni-kut.html'
				target='_blank'
				aria-label='Booking'
			>
				<Image
					src={BookingIcon}
					alt='booking-icon'
					width={25}
					height={25}
					className='dark:invert'
				/>
			</a>

			<a
				href='https://www.tripadvisor.co.uk/Hotel_Review-g1959799-d1093472-Reviews-Zeleni_Kut-Gornji_Zvecaj_Karlovac_County_Central_Croatia.html'
				target='_blank'
				aria-label='Trip Advisor'
			>
				<Image
					src={TripAdvisorIcon}
					alt='booking-icon'
					width={30}
					height={30}
					className='dark:invert'
				/>
			</a>
		</div>
	);
}
