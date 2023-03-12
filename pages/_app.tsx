import { ThemeProvider } from '@/context/Theme/Theme.context';
import {
	TranslationProvider,
	useTranslation,
} from '@/context/Translation/Translation.context';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
	// if browser not render page, do not render anything
	const [browserRendered, setBrowserRendered] = React.useState(false);
	React.useEffect(() => {
		if (typeof window !== 'undefined') {
			setBrowserRendered(true);
		}
	}, []);

	return (
		<>
			<ThemeProvider>
				<TranslationProvider>
					{browserRendered && <Component {...pageProps} />}
				</TranslationProvider>
			</ThemeProvider>
		</>
	);
}
