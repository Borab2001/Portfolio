"use client";

import { useRef } from "react";
import Card from "./ui/card";

import { useScroll } from "motion/react";


const Cards = () => {
    const projects = [
        {
            title: 'Aila Consulting',
            description: 'Freelance software engineer & designer for website currently in build with Next.js, TypeScript, TailwindCSS, React Email, Resend & FramerMotion.',
            src: '/images/ailaconsulting.webp',
            alt: 'Aila Project image',
            link: '/'
        },
        {
            title: 'Groupe BNSB',
            description: 'Description 2',
            src: '/images/groupebnsb.webp',
            alt: 'BNSB Project image',
            link: '/'
        },
    ];

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <div ref={container}>
            {projects.map((project, index) => {
                const targetScale = 1 - ((projects.length - index) * 0.05);

                return <Card key={index} index={index} {...project} progress={scrollYProgress} range={[index * 0.25, 1]} targetScale={targetScale} />
            })}
        </div>
    );
}
 
export default Cards;