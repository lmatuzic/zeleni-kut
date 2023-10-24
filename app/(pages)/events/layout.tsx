import { ReactNode } from 'react';

export default function EventsLayout({ children }: { children: ReactNode }) {
	return <main className='container'>{children}</main>;
}
