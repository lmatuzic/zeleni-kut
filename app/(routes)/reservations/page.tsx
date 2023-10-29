import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/(ui)/components/shadcn/Tabs';
import DinnerReservationForm from '../contact/components/DinnerReservationForm';
import RoomReservationForm from '../contact/components/RoomReservationForm';

export default function Reservation() {
	return (
		<div className='grid grid-cols-1 pb-12 md:grid-cols-2 place-items-center'>
			<div className='h-full'>
				<h1 className='w-full mb-8 text-left sm:w-9/12'>
					Book your place in time to experience the unique atmosphere and temperamental cuisine of
					Restaurant Zeleni Kut.
				</h1>
			</div>

			<Tabs defaultValue='dinner' className='w-full'>
				<TabsList>
					<TabsTrigger value='dinner'>Dinner</TabsTrigger>
					<TabsTrigger value='room'>Room</TabsTrigger>
				</TabsList>

				<TabsContent value='dinner'>
					<DinnerReservationForm />
				</TabsContent>

				<TabsContent value='room'>
					<RoomReservationForm />
				</TabsContent>
			</Tabs>
		</div>
	);
}
