import { ReactNode } from 'react';

export default function ContactLayout({ children }: { children: ReactNode }) {
	return <main className='container'>{children}</main>;
}
