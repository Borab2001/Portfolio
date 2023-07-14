"use client";

import { useEffect } from 'react';
import styles from './page.module.css';

import Intro from '../components/Intro/Index';
import Description from '../components/Description/Index';
import Projects from '../components/Projects/Index';
import Footer from '../components/Footer/Index';


export default function Home() {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, []);

  return (
    <main className={styles.main}>
      <Intro />
      <Description />
      <Projects />
      <Footer />
    </main>
  )
}