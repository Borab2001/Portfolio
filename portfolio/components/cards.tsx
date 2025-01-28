import { useEffect, useRef } from "react";
import Card from "./ui/card";

import { motion, useScroll } from "motion/react";


const Cards = () => {
    const projects = [
        {
            title: 'Aila Consulting',
            description: 'Description 1',
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

    useEffect(() => {
        scrollYProgress.on("change", e => console.log(scrollYProgress));
    })

    return (
        <div ref={container}>
            {projects.map((project, index) => {
                return <Card key={index} index={index} {...project} />
            })}
        </div>
    );
}
 
export default Cards;