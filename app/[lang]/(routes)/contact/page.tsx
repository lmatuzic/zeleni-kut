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
			<h1 className='mb-12 text-2xl text-zk-green'>{page.contact.title}</h1>
			<div className='grid grid-cols-1 pb-12 md:grid-cols-2'>
				<ContactInfo translation={page.contact} />

				<div>
					<h1 className='w-full mb-8 text-left sm:w-9/12'>{page.contact.reservationDescription}</h1>

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
