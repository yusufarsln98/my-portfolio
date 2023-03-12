import styles from '@/styles/Home.module.scss';
import React, { useContext, useState } from 'react';

import {
	ApolloClient,
	InMemoryCache,
	createHttpLink,
	gql,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from '@/components/Header/Header';
import { useTheme } from '@/context/Theme/Theme.context';
import { useTranslation } from '@/context/Translation/Translation.context';
import Head from 'next/head';
import Image from 'next/image';
import { SKILLS } from '@/constants/Skills/Skills.config';
import { Skill } from '../models/skill.model';
import { PinnedItem } from '../models/pinnedItem.model';
import { Blogs } from '@/constants/Blogs/Blogs.config';
import { Blog } from '@/models/blog.model';
import { LINKS } from '@/constants/Links/Links.config';

const pp = '/images/profile.svg';
const globeLight = '/icons/globe_light.svg';
const globeDark = '/icons/globe_dark.svg';
const linkedinLight = '/icons/linkedin_light.svg';
const linkedinDark = '/icons/linkedin_dark.svg';
const githubLight = '/icons/github_light.svg';
const githubDark = '/icons/github_dark.svg';

function SkillItem(item: Skill) {
	return (
		<div className={styles.skill} key={item.id}>
			<p className={styles.skillTitle}>{item.title}</p>
			<div
				className={styles.barChart}
				style={{ ...(item.cssVariable as React.CSSProperties) }}
			>
				<div className={styles.barChartBar}></div>
			</div>
		</div>
	);
}

function PinnedItem(item: PinnedItem) {
	const { themeType } = useTheme();
	return (
		<div className={styles.project} key={item.id}>
			<div>
				<a className={styles.projectTitle} href={item.url} target='_blank'>
					{item.name}
				</a>
				<p className={styles.projectDescription}>{item.description}</p>
			</div>
			<div className={styles.projectFooter}>
				<Image
					src={themeType === 'light' ? globeLight : globeDark}
					alt='globe'
					width={20}
					height={20}
					style={{ marginRight: '6px' }}
				/>
				<div className={styles.languages}>
					{item.languages.map((language, index) => (
						<p className={styles.language} key={language}>
							{language}
							{index !== item.languages.length - 1 && ','}
						</p>
					))}
				</div>
			</div>
		</div>
	);
}

function BlogItem(item: Blog) {
	return (
		<div className={styles.blog} key={item.id}>
			<div className={styles.content}>
				<a href={item.url} target='_blank' className={styles.title}>
					{item.title}
				</a>
				<a href={item.url} target='_blank' className={styles.description}>
					{item.description}
				</a>
			</div>
			<a className={styles.image} href={item.url} target='_blank'>
				<Image src={item.image} alt='blog' width={160} height={160} />
			</a>
		</div>
	);
}

export default function Home({ pinnedItems }: { pinnedItems: PinnedItem[] }) {
	const { theme, themeType } = useTheme();
	const { t } = useTranslation();
	const [lineHeight, setLineHeight] = useState(0);

	return (
		<>
			<Head>
				<title>{t.title}</title>
			</Head>
			<div
				style={{ ...(theme as React.CSSProperties) }}
				className={styles.home}
			>
				<Header />
				<div
					className={styles.container}
					ref={(el) => {
						if (!el) return;
						setLineHeight(el.getBoundingClientRect().height);
					}}
				>
					<div className={styles.lineContainer} style={{ height: lineHeight }}>
						<div className={styles.line}></div>
					</div>
					<div id='about' className={styles.banner}>
						<div className={styles.bannerBg}></div>
						<div className={styles.bannerContent}>
							<div>
								<p className={styles.title}>{t.first_name}</p>
								<p className={styles.title}>{t.last_name}</p>
							</div>
							<div>
								<Image
									className={styles.profile}
									src={pp}
									alt='profile'
									width={160}
									height={160}
								/>
							</div>
						</div>
					</div>
					<div className={styles.about}>
						<p>{t.hey}</p>
						<p>{t.aboutMe}</p>
					</div>
					<div
						id='skills'
						className={styles.sectionContainer}
						ref={(el) => {
							if (!el) return;

							console.log(el.getBoundingClientRect());
						}}
					>
						<div className={styles.sectionHeader}>
							<p className={styles.sectionTitle}>{t.skills}</p>
						</div>
						<div className={styles.skillsContainer}>
							{SKILLS.map((skill) => SkillItem(skill))}
						</div>
					</div>
					<div id='projects' className={styles.sectionContainer}>
						<div className={styles.sectionHeader}>
							<p className={styles.sectionTitle}>{t.projects}</p>
						</div>
						<div className={styles.projectsContainer}>
							{pinnedItems.map((item) => PinnedItem(item))}
						</div>
					</div>
					<div id='blog' className={styles.sectionContainer}>
						<div className={styles.sectionHeader}>
							<p className={styles.sectionTitle}>{t.blog}</p>
						</div>
						<div className={styles.blogContainer}>
							{Blogs.map((item) => BlogItem(item))}
						</div>
					</div>
				</div>
				<div className={styles.footer}>
					<div className={styles.footerContent}>
						<p className={styles.footerLeft}>{t.footer}</p>
						<div className={styles.footerRight}>
							<a
								href={LINKS.my_github}
								target='_blank'
								className={styles.footerLink}
							>
								<Image
									src={themeType === 'dark' ? githubLight : githubDark}
									alt='github'
									width={28}
									height={28}
								/>
							</a>
							<a
								href={LINKS.my_linkedin}
								target='_blank'
								className={styles.footerLink}
							>
								<Image
									src={themeType === 'dark' ? linkedinLight : linkedinDark}
									alt='linkedin'
									width={28}
									height={28}
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

// Github GraphQL API with Apollo Client - Pinned Repositories
export async function getStaticProps() {
	const httpLink = createHttpLink({
		uri: 'https://api.github.com/graphql',
	});

	const authLink = setContext((_, { headers }) => {
		return {
			headers: {
				...headers,
				authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
			},
		};
	});

	const client = new ApolloClient({
		link: authLink.concat(httpLink),
		cache: new InMemoryCache(),
	});

	const { data } = await client.query({
		query: gql`
			{
				user(login: "yusufarsln98") {
					id
					pinnedItems(first: 6) {
						totalCount
						edges {
							node {
								... on Repository {
									id
									name
									description
									stargazerCount
									url
									languages(first: 5) {
										nodes {
											name
										}
									}
								}
							}
						}
					}
				}
			}
		`,
	});

	const { user } = data;
	const pinnedItems: PinnedItem[] = user.pinnedItems.edges.map(
		({ node }: any) =>
			({
				...node,
				languages: node.languages.nodes
					.filter((language: any) => language.name !== 'Makefile')
					.map((language: any) => language.name),
			} as PinnedItem)
	);

	return {
		props: {
			pinnedItems,
		},
	};
}
