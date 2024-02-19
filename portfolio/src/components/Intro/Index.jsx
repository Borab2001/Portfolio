import styles from "./style.module.css";
import { FiLinkedin, FiGithub, FiCodepen } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";


export default function Intro() {

    const backgroundImage = useRef(null);
    const introImage = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                start: "0",
                end: "+=500px",
                scrub: true,
                markers: false
            }
        })

        timeline
        .from(backgroundImage.current, {clipPath: "inset(15%)"})
        .to(introImage.current, {height: "200px"}, 0)
    }, []);

    return (
        <div className={styles.intro}>
            <div className={styles.introContainer}>
                <div className={styles.introHeaders}>
                    <h1 data-scroll data-scroll-speed="0.3">Bora Balos</h1>
                    <h2 data-scroll data-scroll-speed="0.3">🇫🇷 CS Student - Capgemini Intern</h2>
                </div>
                <div className={styles.socials}>
                    <Link href="https://www.linkedin.com/in/bora-balos/" title="LinkedIn">
                        <FiLinkedin />
                    </Link>
                    <Link href="https://github.com/Borab2001" title="GitHub">
                        <FiGithub />
                    </Link>
                    <Link href="https://twitter.com/borab2001" title="X">
                        <BsTwitterX />
                    </Link>
                    <Link href="https://codepen.io/borab2001" title="Codepen">
                        <FiCodepen />
                    </Link>
                </div>
            </div>
        </div>
    )
}