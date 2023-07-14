import styles from './style.module.css';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function index() {
    const phrases = [
        // `Engineering Student ${<a href='https://www.isep.fr/'>@ISEP 🇫🇷</a>} & ${<a href='https://www.sydney.edu.au/'>@SydneyUni 🇦🇺</a>}`,
        // "Passionate about front-end & design",
        // "Working on ambitious and diverse projects"
        "Engineering Student ",
        <a href='https://www.isep.fr/'>@ISEP 🇫🇷</a>,
        " & ",
        <a href='https://www.sydney.edu.au/'>@SydneyUni 🇦🇺</a>,
        "Passionate about front-end & design",
        "Working on ambitious and diverse projects"
    ];

    return (
        <div className={styles.description}>
            <AnimatedText>
                    <p>
                        Engineering Student
                        <a href='https://www.isep.fr/'> @ISEP</a>
                        <span> 🇫🇷 &amp; </span>
                        <a href='https://www.sydney.edu.au/'>@SydneyUni</a>
                        <span> 🇦🇺</span>
                    </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Passionate about front-end &amp; design
                </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Working on ambitious and diverse projects
                </p>
            </AnimatedText>
        </div>
    )
}

function AnimatedText({children}) {

    const text = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                start: "0px bottom",
                end: "bottom+=400px bottom",
                scrub: true
            },
            left: "-200px",
            opacity: 0
        })

    }, []);
    
    return (
        <p ref={text}>{children}</p>
    )
}