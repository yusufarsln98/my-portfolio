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
	return (
		<>
			<ThemeProvider>
				<TranslationProvider>
					<Component {...pageProps} />
				</TranslationProvider>
			</ThemeProvider>
		</>
	);
}
