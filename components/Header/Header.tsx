import { useTranslation } from '@/context/Translation/Translation.context';
import React, { useContext } from 'react';
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

	return (
		<div className={styles.header}>
			<button>
				<Image
					src={themeType === 'light' ? dark : light}
					alt='mode'
					onClick={() => setThemeType(themeType === 'light' ? 'dark' : 'light')}
					style={{ transform: 'rotate(180deg)' }}
					width={24}
					height={24}
				/>
			</button>
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
				{language === 'tr' ? (
					<button onClick={() => setLanguage('en')}>🇺🇸</button>
				) : (
					<button onClick={() => setLanguage('tr')}>🇹🇷</button>
				)}
			</div>
		</div>
	);
};

export default Header;
