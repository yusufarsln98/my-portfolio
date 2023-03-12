import React, { Dispatch, SetStateAction, PropsWithChildren } from 'react';
import { TRANSLATIONS } from './Translation.config';
import { Languages, Translation } from './Translation.model';

interface TranslationContextProps {
	language: Languages;
	t: Translation;
	setLanguage: Dispatch<SetStateAction<Languages>>;
}

export const TranslationContext = React.createContext<TranslationContextProps>({
	language: 'en',
	t: TRANSLATIONS['en'],
} as TranslationContextProps);

export const TranslationProvider: React.FC<PropsWithChildren> = ({
	children,
}) => {
	const [language, setLanguage] = React.useState<Languages>('en');

	React.useEffect(() => {
		if (typeof window !== 'undefined') {
			const language = localStorage.getItem('language');
			if (language) {
				setLanguage(language as 'en' | 'tr');
			}
		}
	}, []);

	return (
		<TranslationContext.Provider
			value={{
				language,
				t: TRANSLATIONS[language],
				setLanguage,
			}}
		>
			{children}
		</TranslationContext.Provider>
	);
};

export const useTranslation = () => React.useContext(TranslationContext);
