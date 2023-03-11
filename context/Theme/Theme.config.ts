import { Color } from '../../models/color.model';
import { ThemeType, Theme } from './Theme.model';

export const THEMES: Record<ThemeType, Theme> = {
	light: {
		'--bg-color': Color.WHITE_BG,
		'--banner-bg-color': Color.CREAM,
		'--text-color-primary': Color.BLACK_TEXT,
		'--text-color-secondary': Color.CREAM,
		'--text-color-tertiary': Color.CREAM_DARKER,
		'--blue': Color.BLUE,
		'--blue-linear-gradient': Color.BLUE_LINEAR_GRADIENT,
		'--card-bg-color': Color.SNOW,
		'--orange': Color.ORANGE,
		'--shadow': Color.SHADOW,
	},

	dark: {
		'--bg-color': Color.BLACK_BG,
		'--banner-bg-color': Color.CREAM_DARKER,
		'--text-color-primary': Color.WHITE_TEXT,
		'--text-color-secondary': Color.CREAM_DARKER,
		'--text-color-tertiary': Color.CREAM,
		'--blue': Color.BLUE,
		'--blue-linear-gradient': Color.BLUE_LINEAR_GRADIENT,
		'--card-bg-color': Color.DARK_BLUE,
		'--orange': Color.ORANGE_DARKER,
		'--shadow': Color.SHADOW,
	},
};
