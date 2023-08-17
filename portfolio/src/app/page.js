"use client";

import { useEffect, useState } from 'react';
import styles from './page.module.css';

import Intro from '../components/Intro/Index';
import Description from '../components/Description/Index';
import Preloader from '../components/Preloader/Index';
import Projects from '../components/Projects/Index';
import Footer from '../components/Footer/Index';
import { AnimatePresence } from 'framer-motion';

export default function Home() {

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(
			async () => {
				const LocomotiveScroll = (await import('locomotive-scroll')).default;
				const locomotiveScroll = new LocomotiveScroll();

				setTimeout(() => {
					setIsLoading(false);
					document.body.style.cursor = 'default';
					window.scrollTo(0,0);
				}, 2000)
			}
		)();
	}, []);

	return (
		<main className={styles.main}>
			<AnimatePresence mode='wait'>
				{
					isLoading && <Preloader />
				}
			</AnimatePresence>
			
			<div className={styles.body}>
				<Intro />
				<Description />
				<Projects />
				<Footer />
			</div>
		</main>
	);
}