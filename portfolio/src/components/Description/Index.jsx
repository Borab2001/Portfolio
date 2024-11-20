import styles from './style.module.css';
import { HiOutlineArrowDown } from "react-icons/hi";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function Index() {
    // const phrases = [
    // `Engineering Student ${<a href='https://www.isep.fr/'>@ISEP 🇫🇷</a>} & ${<a href='https://www.sydney.edu.au/'>@SydneyUni 🇦🇺</a>}`,
    // "Passionate about front-end & design",
    // "Working on ambitious and diverse projects"
    //     "Engineering Student ",
    //     <a href='https://www.isep.fr/'>@ISEP 🇫🇷</a>,
    //     " & ",
    //     <a href='https://www.sydney.edu.au/'>@SydneyUni 🇦🇺</a>,
    //     "Passionate about front-end & design",
    //     "Working on ambitious and diverse projects"
    // ];

    return (
        <div className={styles.description}>
            <AnimatedText>
                <h2>
                    <span>Master&#39;s in Computer Science</span>
                </h2>
            </AnimatedText>
            <AnimatedText>
                <p>
                    {/* <a href='https://www.isep.fr/'>ISEP Paris</a> */}
                    <span>ISEP Paris &#x1F1EB;&#x1F1F7;</span>
                </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    {/* <a href='https://www.sydney.edu.au/'>University of Sydney</a> */}
                    <span>University of Sydney &#x1F1E6;&#x1F1FA;</span>
                </p>
            </AnimatedText>
            <AnimatedText>
                <h2>
                    Internships
                </h2>
            </AnimatedText>
            <AnimatedText>
                <p>
                    <span>Software Engineer at </span> 
                    <a href='https://www.capgemini.com/'>Capgemini</a>
                    <span className={styles.descriptionText}> ~ Experts in Digital Transformation and Consulting</span>
                </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    <span>Frontend Engineer at </span> 
                    <a href='https://www.cypheme.com/'>Cypheme</a>
                    <span className={styles.descriptionText}> ~ AI-Powered Anti Counterfeit Startup based in <a href='https://stationf.co/'>Station F</a></span>
                    {/* <span> &#x1F1EB;&#x1F1F7;</span> */}
                </p>
            </AnimatedText>

            <AnimatedText>
                <h2>
                    Freelance Software Engineer
                </h2>
            </AnimatedText>
            <AnimatedText>
                <p>
                    {/* <span>Software Engineer & Designer ~ </span>  */}
                    <a href='https://ailaconsulting.com/'>Aila Consulting</a>
                    <span className={styles.descriptionText}> ~ Experts in Administrative Processes and Linguistic Services</span>
                    {/* <span> &#x1F1EB;&#x1F1F7;</span> */}
                </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    {/* <span>Software Engineer & Designer ~ </span>  */}
                    <a href='https://groupe-bnsb.com/'>Groupe BNSB</a>
                    <span className={styles.descriptionText}> ~ Design and Sourcing Office in Fashion</span>
                </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    {/* <span>Software Engineer & Designer ~ </span>  */}
                    <a href='https://groupe-bnsb.com/'>Maison Anaé</a>
                    <span className={styles.descriptionText}> ~ Upcoming eco-friendly fashion brand by Groupe BNSB</span>
                </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    {/* <span>Frontend Engineer at </span>  */}
                    <a href='https://www.cypheme.com/'>Cypheme</a>
                    <span className={styles.descriptionText}> ~ AI-Powered Anti Counterfeit Startup based in <a href='https://stationf.co/'>Station F</a></span>
                    {/* <span> &#x1F1EB;&#x1F1F7;</span> */}
                </p>
            </AnimatedText>

            <AnimatedText>
                <h2>
                    About me
                </h2>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Passionate about creating and designing
                </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    10+ years of experience in football
                </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Crafting some music on FL Studio
                </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Food distribution for people in need at Paris City Hall
                </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Part of an association welcoming international students
                </p>
            </AnimatedText>
            {/* <AnimatedText>
                <p>
                    Member of a job service association for students
                </p>
            </AnimatedText> */}
            <AnimatedText>
                <h2>
                    Here are some of my projects
                </h2>
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
        <div className={styles.animatedText} ref={text}>
            {children}
        </div>
    )
}