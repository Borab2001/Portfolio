import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";

import { FiLinkedin, FiGithub, FiTwitter, FiCodepen } from "react-icons/fi";

export default function index() {
    return (
        <div className={styles.intro}>
            <div className={styles.backgroundImage}>
                <Image
                    src={'/images/background.jpg'}
                    fill={true}
                    alt="Background Image"
                />
            </div>

            <div className={styles.introContainer}>
                <h1>Bora Balos</h1>
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