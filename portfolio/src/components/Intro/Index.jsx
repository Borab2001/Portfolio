import styles from "./style.module.css";
import { FiCodepen, FiFigma, FiGithub, FiLinkedin  } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

import Link from "next/link";
import Image from "next/image";

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
                    <Image 
                        src="/android-chrome-512x512.png"
                        width={96}
                        height={96}
                        alt="Profile Image"
                        className={styles.profileImage}
                        data-scroll 
                        data-scroll-speed="0.3"
                    />
                    <h1 data-scroll data-scroll-speed="0.3">Bora Balos</h1>
                    <h2 data-scroll data-scroll-speed="0.3">
                        🇫🇷 Software Engineer
                    </h2>
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
                    {/* <Link href="https://codepen.io/borab2001" title="Codepen">
                        <FiCodepen />
                    </Link> */}
                    <Link href="https://www.figma.com/@borab2001" title="Figma">
                        <FiFigma />
                    </Link>
                </div>
            </div>
        </div>
    )
}