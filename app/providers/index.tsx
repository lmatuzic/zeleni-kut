'use client';

import { PropsWithChildren } from 'react';
import ReactQueryClientProvider from './ReactQueryClientProvider';

export default function Providers({ children }: PropsWithChildren<{}>) {
	return <ReactQueryClientProvider>{children}</ReactQueryClientProvider>;
}
