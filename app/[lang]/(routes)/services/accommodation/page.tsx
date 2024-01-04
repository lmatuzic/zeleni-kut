import { Button } from '@/app/[lang]/(ui)/components/shadcn/Button';
import { CONTACT_PAGE } from '@/app/[lang]/constants/routes';
import Link from 'next/link';

export default function Accommodation() {
	return (
		<div>
			<h1>Accommodation</h1>

			<p>
				From may 2004. we have 14 modern rooms. We can offer 12 double or twin rooms (6 with river
				view) and 2 single rooms (both with the river view) with possibility for extra bed in double
				or twin rooms. Every room have its own bathroom, satellite Tv, mini-bar and free internet
				access, air condition and river side rooms have balconies over the river.
			</p>

			<Link href={CONTACT_PAGE}>
				<Button>Reserve</Button>
			</Link>
		</div>
	);
}
