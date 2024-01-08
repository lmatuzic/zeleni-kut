import { getDictionary } from '@/app/dictionaries/dictionary';
import { Locale } from '@/i18.config';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../(ui)/components/shadcn/Tabs';
import ContactInfo from './components/ContactInfo';
import RoomReservationForm from './components/RoomReservationForm';
import TableReservationForm from './components/TableReservationForm';

export default async function Contact({ params: { lang } }: { params: { lang: Locale } }) {
	const { page } = await getDictionary(lang);

	return (
		<>
			<h1 className='mb-12 font-medium text-2xl text-zk-green'>{page.contact.title}</h1>
			<div className='grid grid-cols-1 gap-12 pb-12 md:grid-cols-2'>
				<div className='flex flex-col'>
					<ContactInfo translation={page.contact} />

					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.422174757378!2d15.42070897661459!3d45.38065397107265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4764147d7a37830b%3A0x8acb977e39c98e02!2sRestaurant%20and%20Rooms%20Zeleni%20kut!5e0!3m2!1sen!2shr!4v1704377246569!5m2!1sen!2shr'
						loading='lazy'
						className='w-full h-96 md:h-1/2 md:mt-12'
					></iframe>
				</div>

				<div>
					<p className='w-full mb-8 text-left lg:w-11/12'>{page.contact.reservationDescription}</p>

					<Tabs defaultValue='dinner' className='w-full'>
						<TabsList>
							<TabsTrigger value='dinner'>{page.contact.table}</TabsTrigger>
							<TabsTrigger value='room'>{page.contact.room}</TabsTrigger>
						</TabsList>

						<TabsContent value='dinner' className='mt-4'>
							<TableReservationForm translation={page.contact.tableReservationForm} />
						</TabsContent>

						<TabsContent value='room' className='mt-4'>
							<RoomReservationForm translation={page.contact.roomReservationForm} />
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</>
	);
}
