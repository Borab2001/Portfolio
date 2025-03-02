"use client";

import { useRef } from "react";
import Card from "./ui/card";

import { useScroll } from "motion/react";


const Cards = () => {
    const projects = [
        // {
        //     title: 'Aila Consulting',
        //     description: 'Freelance software engineer & designer',
        //     src: '/images/ailaconsulting.webp',
        //     alt: 'Aila Project image',
        //     link: '/'
        // },
        // {
        //     title: 'Groupe BNSB',
        //     description: 'Description 2',
        //     src: '/images/groupebnsb.webp',
        //     alt: 'BNSB Project image',
        //     link: '/'
        // },
        {
            title: 'Foodify',
            description: 'Web and mobile application for recipe search and meal planning',
            src: '/images/foodify.webp',
            alt: 'Foodify project image',
            link: 'https://foodifyapp.vercel.app/'
        },
        {
            title: 'Curious',
            description: "A social content search and visualisation platform using a reasoning engine powered by OpenAI's API",
            src: '/images/curious.webp',
            alt: 'Curious project image',
            link: 'https://curious-gpt.vercel.app/'
        },
        {
            title: 'AusVision',
            description: 'Accessible Navigation App design for 2032 Brisbane Olympic Games',
            src: '/images/ausvision.webp',
            alt: 'AusVision project image',
            link: 'https://www.figma.com/design/o40ZnVFnKsYgeqUWRfGny4/AusVision-%F0%9F%87%A6%F0%9F%87%BA?node-id=1-10549&t=pDOyUD5NSvgl6bio-1'
        },
        {
            title: 'Flowfinity',
            description: 'Treasury management system for student associations.',
            src: '/images/curious.webp',
            alt: 'Flowfinity project image',
            link: 'https://www.figma.com/design/7KykoagveciEHeAV6ej6lu/Maquette-%F0%9F%8C%B7?node-id=0-1&t=oheWC3bzA38jtNTX-1'
        },
        // {
        //     title: 'Yarn',
        //     description: '/',
        //     src: '/',
        //     alt: '/',
        //     link: '/'
        // },
        // {
        //     title: 'Reveal',
        //     description: '/',
        //     src: '/',
        //     alt: '/',
        //     link: '/'
        // },
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