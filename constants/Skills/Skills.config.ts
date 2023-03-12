import { Skill } from '../../models/skill.model';

// array of objects
export const SKILLS: Skill[] = [
	{
		id: 1,
		title: 'ReactJS, NextJS',
		cssVariable: {
			'--skill-level': 0.79,
		},
	} as Skill,
	{
		id: 2,
		title: 'HTML, CSS, SCSS',
		cssVariable: {
			'--skill-level': 0.72,
		},
	} as Skill,
	{
		id: 3,
		title: 'JavaScript, TypeScript',
		cssVariable: {
			'--skill-level': 0.7,
		},
	} as Skill,
	{
		id: 4,
		title: 'Figma, Photoshop',
		cssVariable: {
			'--skill-level': 0.65,
		},
	} as Skill,
	{
		id: 5,
		title: 'C/C++, Java',
		cssVariable: {
			'--skill-level': 0.82,
		},
	} as Skill,
	{
		id: 6,
		title: 'Git, GitHub',
		cssVariable: {
			'--skill-level': 0.75,
		},
	} as Skill,
];
