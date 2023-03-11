import styles from '@/styles/Home.module.scss';
import React, { useContext, useState } from 'react';
import Header from '@/components/Header/Header';
import { useTheme } from '@/context/Theme/Theme.context';
import { useTranslation } from '@/context/Translation/Translation.context';
import Head from 'next/head';
import Image from 'next/image';
const pp = '/images/profile.svg';

export default function Home() {
	const { theme } = useTheme();
	const { t } = useTranslation();

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
				<div className={styles.container}>
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
					<div id='skills' className={styles.skills}>
						skills{' '}
					</div>
					<div id='projects' className={styles.projects}>
						projects{' '}
					</div>
					<div id='blog' className={styles.blog}>
						blog{' '}
					</div>
				</div>
			</div>
		</>
	);
}
