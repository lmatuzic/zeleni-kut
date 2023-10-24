import { ReactNode } from 'react';

export default function MenuLayout({ children }: { children: ReactNode }) {
	return <main className='container'>{children}</main>;
}
