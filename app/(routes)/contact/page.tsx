import ContactInfo from './components/ContactInfo';
import Reservation from './reservations/page';

export default function Contact() {
	return (
		<>
			<h1 className='mb-12 text-2xl text-zk-green'>Contact</h1>

			<div className='grid grid-cols-1 pb-12 md:grid-cols-2'>
				<ContactInfo />
				<Reservation />
			</div>
		</>
	);
}
