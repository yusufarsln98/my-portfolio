import { useTranslation } from '@/context/Translation/Translation.context';
import React, { useContext, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styles from './Header.module.scss';
import { useTheme } from '@/context/Theme/Theme.context';
import Image from 'next/image';

const light = '/icons/mode_light.svg';
const dark = '/icons/mode_dark.svg';

const Header = () => {
	const { t, language, setLanguage } = useTranslation();
	const { themeType, setThemeType } = useTheme();
	const [currentLink, setCurrentLink] = React.useState<string>('about');

	const themeClicked = () => {
		setThemeType(themeType === 'light' ? 'dark' : 'light');
		// save the new theme to local storage
		localStorage.setItem('theme', themeType === 'light' ? 'dark' : 'light');
	};

	const languageClicked = () => {
		setLanguage(language === 'en' ? 'tr' : 'en');
		// save the new language to local storage
		localStorage.setItem('language', language === 'en' ? 'tr' : 'en');
	};

	return (
		<div className={styles.header}>
			<button>
				<Image
					src={themeType === 'light' ? dark : light}
					alt='mode'
					onClick={themeClicked}
					style={{ transform: 'rotate(180deg)' }}
					width={24}
					height={24}
				/>
			</button>
			<div className={styles.headerRight}>
				<div className={styles.links}>
					<AnchorLink
						href='#about'
						onClick={() => setCurrentLink('about')}
						className={currentLink === 'about' ? styles.active : ''}
					>
						{t.about}
					</AnchorLink>
					<AnchorLink
						href='#skills'
						onClick={() => setCurrentLink('skills')}
						className={currentLink === 'skills' ? styles.active : ''}
					>
						{t.skills}
					</AnchorLink>
					<AnchorLink
						href='#projects'
						onClick={() => setCurrentLink('projects')}
						className={currentLink === 'projects' ? styles.active : ''}
					>
						{t.projects}
					</AnchorLink>
					<AnchorLink
						href='#blog'
						onClick={() => setCurrentLink('blog')}
						className={currentLink === 'blog' ? styles.active : ''}
					>
						{t.blog}
					</AnchorLink>
				</div>
				{language === 'tr' ? (
					<button onClick={languageClicked}>🇺🇸</button>
				) : (
					<button onClick={languageClicked}>🇹🇷</button>
				)}
			</div>
		</div>
	);
};

export default Header;
