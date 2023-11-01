import { ReactNode } from 'react';

export default function ReservationLayout({ children }: { children: ReactNode }) {
	return <main className='container'>{children}</main>;
}
