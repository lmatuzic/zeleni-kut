import { ReactNode } from 'react';

export default function AccommodationLayout({ children }: { children: ReactNode }) {
	return <main className='container'>{children}</main>;
}
