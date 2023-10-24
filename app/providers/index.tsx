'use client';

import { PropsWithChildren } from 'react';
import ReactQueryClientProvider from './ReactQueryClientProvider';
import { ThemeProvider } from './ThemeProvider';

export default function Providers({ children }: PropsWithChildren<{}>) {
	return (
		<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
			<ReactQueryClientProvider>{children}</ReactQueryClientProvider>
		</ThemeProvider>
	);
}
