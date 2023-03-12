import { Skill } from '../../models/skill.model';

// array of objects
export const SKILLS: Skill[] = [
	{
		id: 1,
		title: 'ReactJS, NextJS',
		cssVariable: {
			'--skill-level': 0.74,
		},
	} as Skill,
	{
		id: 2,
		title: 'HTML, CSS, SCSS',
		cssVariable: {
			'--skill-level': 0.78,
		},
	} as Skill,
	{
		id: 3,
		title: 'JS/TS',
		cssVariable: {
			'--skill-level': 0.76,
		},
	} as Skill,
	{
		id: 4,
		title: 'C/C++, Java',
		cssVariable: {
			'--skill-level': 0.82,
		},
	} as Skill,
	{
		id: 5,
		title: 'Git, GitHub',
		cssVariable: {
			'--skill-level': 0.75,
		},
	} as Skill,
	{
		id: 6,
		title: 'Figma, Photoshop',
		cssVariable: {
			'--skill-level': 0.7,
		},
	} as Skill,
];
