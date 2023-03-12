import React, { Dispatch, SetStateAction, PropsWithChildren } from 'react';
import { THEMES } from './Theme.config';
import { ThemeType, Theme } from './Theme.model';

interface ThemeContextProps {
	themeType: ThemeType;
	theme: Theme;
	setThemeType: Dispatch<SetStateAction<ThemeType>>;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
	// check if theme exists in local storage and set it
	themeType: 'light',
	theme: THEMES['light'],
} as ThemeContextProps);

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [themeType, setThemeType] = React.useState<ThemeType>('light');

	return (
		<ThemeContext.Provider
			value={{
				themeType,
				theme: THEMES[themeType],
				setThemeType,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => React.useContext(ThemeContext);
