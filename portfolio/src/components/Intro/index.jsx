import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FiLinkedin, FiGithub, FiTwitter, FiCodepen } from "react-icons/fi";
import { useLayoutEffect, useRef } from "react";

export default function index() {

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
                <h1 data-scroll data-scroll-speed="0.3">Bora Balos</h1>
                <h2 data-scroll data-scroll-speed="0.3">🇫🇷 Engineering Student</h2>
                <div className={styles.socials}>
                    <Link href="https://www.linkedin.com/in/bora-balos/">
                        <FiLinkedin />
                    </Link>
                    <Link href="https://github.com/Borab2001">
                        <FiGithub />
                    </Link>
                    <Link href="https://twitter.com/borab0302">
                        <FiTwitter />
                    </Link>
                    <Link href="https://codepen.io/borab2001">
                        <FiCodepen />
                    </Link>
                </div>
            </div>
        </div>
    )
}