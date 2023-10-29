import ContactInfo from './components/ContactInfo';
import ReservationForm from './components/ReservationForm';

export default function Contact() {
	return (
		<div className='grid grid-cols-1 pb-12 md:grid-cols-3 place-items-center'>
			<ContactInfo />
			<ReservationForm />
		</div>
	);
}
