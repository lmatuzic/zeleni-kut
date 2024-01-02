import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/[lang]/(ui)/components/shadcn/Tabs';
import DinnerReservationForm from './components/DinnerReservationForm';
import RoomReservationForm from './components/RoomReservationForm';

export default function Reservation() {
	return (
		<div>
			<h1 className='w-full mb-8 text-left sm:w-9/12'>
				Book your place in time to experience the unique atmosphere and temperamental cuisine of
				Restaurant Zeleni Kut.
			</h1>

			<Tabs defaultValue='dinner' className='w-full'>
				<TabsList>
					<TabsTrigger value='dinner'>Dinner</TabsTrigger>
					<TabsTrigger value='room'>Room</TabsTrigger>
				</TabsList>

				<TabsContent value='dinner' className='mt-4'>
					<DinnerReservationForm />
				</TabsContent>

				<TabsContent value='room' className='mt-4'>
					<RoomReservationForm />
				</TabsContent>
			</Tabs>
		</div>
	);
}
