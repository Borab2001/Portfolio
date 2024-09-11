import styles from './style.module.css';
import { HiOutlineArrowDown } from "react-icons/hi";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function Index() {
    const sections = [
        {
            title: "MS in Computer Science",
            content: (
                <>
                    <span>MS in Computer Science </span>
                    <a href='https://www.isep.fr/'>@ISEP</a>
                    <span> 🇫🇷 & </span>
                    <a href='https://www.sydney.edu.au/'>@SydneyUni</a>
                    <span> 🇦🇺</span>
                </>
            ),
        },
        {
            title: "Intern at",
            content: (
                <>
                    <span>Intern at </span> 
                    <a href='https://www.capgemini.com/'>Capgemini</a>
                    <span> ♠ 🇫🇷</span>
                </>
            ),
        },
        { title: "My Interests", content: "Passionate about creating & designing" },
        { title: "Sports", content: "Sports (played high-level of football)" },
        { title: "Music", content: "Making beats on FL Studio" },
        { title: "My Activities", content: "Food distribution for people in need at Paris City Hall" },
        { title: "International Students", content: "Creation Pole in an association helping international students" },
        { title: "Student Jobs", content: "Member of a job service association for students" },
        { title: "My Work", content: "Like working on ambitious and diverse projects" },
        { title: "Current Work", content: "Currently working on Maison Anaée’s fully automatized e-commerce web app with admin dashboard" },
        { title: "Previous Work", content: "Ex-front-end engineer intern at Cypheme Anti-Counterfeit Technologies" },
        { title: "Carbon Footprint", content: "Worked on a carbon footprint calculator for the startup Tickarbone" },
        { title: "Projects", content: "Here are some of my projects:" }
    ];

    return (
        <div className={styles.description}>
            {sections.map((section, index) => (
                <AnimatedSection key={index} title={section.title}>
                    {section.content}
                </AnimatedSection>
            ))}
        </div>
    );
}

function AnimatedSection({ title, children }) {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(sectionRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "0px bottom",
                end: "bottom+=400px bottom",
                scrub: true
            },
            left: "-200px",
            opacity: 0
        });
    }, []);

    return (
        <div ref={sectionRef}>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    );
}