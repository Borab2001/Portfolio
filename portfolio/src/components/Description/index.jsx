import styles from './style.module.css';
import { HiOutlineArrowDown } from "react-icons/hi";

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
                    <h2>
                        <span>Engineering Student </span>
                        <a href='https://www.isep.fr/'>@ISEP</a>
                        <span> 🇫🇷 &amp; </span>
                        <a href='https://www.sydney.edu.au/'>@SydneyUni</a>
                        <span> 🇦🇺</span>
                    </h2>
            </AnimatedText>
            <AnimatedText>
                <h2>
                    My Interests
                </h2>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Passionate about front-end &amp; design
                </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Making beat on FL Studio
                </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Sports (played high-level of football)
                </p>
            </AnimatedText>
            <AnimatedText>
                <h2>
                    My Activities
                </h2>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Food distribution for people in need at Paris City Hall
                </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Creation Pole in an association helping international students
                </p>
            </AnimatedText>
            <AnimatedText>
                <h2>
                    My Work
                </h2>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Like working on ambitious and diverse projects
                </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Currently working on Maison Anaé's fully automatized e-commerce web app with admin dashboard
                </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Here are some of my projects :
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
        <div ref={text}>{children}</div>
    )
}