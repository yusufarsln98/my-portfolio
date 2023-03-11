import { Color } from '../../models/color.model';

export type ThemeType = 'light' | 'dark';

export interface Theme {
	'--bg-color': Color;
	'--banner-bg-color': Color;
	'--text-color-primary': Color;
	'--text-color-secondary': Color;
	'--text-color-tertiary': Color;
	'--blue': Color;
	'--blue-linear-gradient': Color;
	'--card-bg-color': Color;
	'--orange': Color;
	'--shadow': Color;
}
