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
            description: 'Web & mobile app for recipe search & meal planning',
            src: '/images/foodify.webp',
            alt: 'Foodify project image',
            link: 'https://foodifyapp.vercel.app/'
        },
        {
            title: 'Curious',
            description: "Content search & visualisation platform using OpenAI's API",
            src: '/images/curious.webp',
            alt: 'Curious project image',
            link: 'https://curious-gpt.vercel.app/'
        },
        {
            title: 'AusVision',
            description: 'Accessible navigation app for 2032 Brisbane Olympics',
            src: '/images/ausvision.webp',
            alt: 'AusVision project image',
            link: 'https://www.figma.com/design/o40ZnVFnKsYgeqUWRfGny4/AusVision-%F0%9F%87%A6%F0%9F%87%BA?node-id=1-10549&t=pDOyUD5NSvgl6bio-1'
        },
        {
            title: 'Reveal',
            description: 'Daily challenge app that helps you connect with friends',
            src: '/images/reveal.webp',
            alt: 'Reveal project image',
            link: 'https://www.figma.com/design/GFKM09zZdy9HGaxM0rEtOz/Reveal?node-id=1-6332&t=x7X6VEMM39UoDvdE-1'
        },
        {
            title: 'Flowfinity',
            description: 'Treasury management system for student associations',
            src: '/images/flowfinity.webp',
            alt: 'Flowfinity project image',
            link: 'https://www.figma.com/design/7KykoagveciEHeAV6ej6lu/Maquette-%F0%9F%8C%B7?node-id=0-1&t=oheWC3bzA38jtNTX-1'
        },
        {
            title: 'Maestro',
            description: 'Collective of French pianists and artists',
            src: '/images/maestro.webp',
            alt: 'Maestro project image',
            link: 'https://www.figma.com/design/Avq5X2vCWDFz3giIPbEurJ/Maestro?node-id=0-1&t=MArnJkhau6JSWXLw-1'
        },
        // {
        //     title: 'Yarn',
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

                return <Card key={index} index={index} {...project} progress={scrollYProgress} range={[index * 0.16, 1]} targetScale={targetScale} />
            })}
        </div>
    );
}
 
export default Cards;