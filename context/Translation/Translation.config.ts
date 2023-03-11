import { Languages, Translation } from './Translation.model';

export const TRANSLATIONS: Record<Languages, Translation> = {
	en: {
		title: 'Yusuf Arslan - Portfolio',
		first_name: 'YUSUF',
		last_name: 'ARSLAN',
		about: 'About',
		skills: 'My Skills',
		projects: 'Projects',
		blog: 'Blog',
		hey: 'Hey! 👋',
		aboutMe:
			"I'm Yusuf, a computer engineering student passionate about frontend development. I'm working on expanding my skills to backend and other web technologies.",
		seeAll: 'See All',
	} as Translation,
	tr: {
		title: 'Yusuf Arslan - Portföy',
		first_name: 'YUSUF',
		last_name: 'ARSLAN',
		about: 'Hakkında',
		skills: 'Yeteneklerim',
		projects: 'Projeler',
		blog: 'Blog',
		hey: 'Merhaba! 👋',
		aboutMe:
			'Ben Yusuf, bilgisayar mühendisliği öğrencisiyim ve frontend geliştirme ile ilgileniyorum. Backend ve diğer web teknolojilerindeki becerilerimi genişletmeye çalışıyorum.',
		seeAll: 'Tümünü Gör',
	} as Translation,
};
