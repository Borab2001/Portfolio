"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import Polaroid from "./ui/polaroid";


const Carousel = () => {
    const polaroids = [
        {
            imageSrc: '/images/sydney2.webp',
            altText: 'Opera House ny night',
            imageTitle: 'Sydney Opera House',
            imageDate: 'Dec 2023 at 5:52AM',
        },
        {
            imageSrc: '/images/sydney2.webp',
            altText: 'Opera House ny night',
            imageTitle: 'Sydney Opera House',
            imageDate: 'Dec 2023 at 5:52AM',
        },
        {
            imageSrc: '/images/sydney2.webp',
            altText: 'Opera House ny night',
            imageTitle: 'Sydney Opera House',
            imageDate: 'Dec 2023 at 5:52AM',
        },
        {
            imageSrc: '/images/sydney2.webp',
            altText: 'Opera House ny night',
            imageTitle: 'Sydney Opera House',
            imageDate: 'Dec 2023 at 5:52AM',
        },
    ];

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    });

    const x = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"])
    // const x = useTransform(scrollYProgress, [0, 1], ["calc(50% + 160px) ", "calc(-50% + 160px)"])

    return (
        <div ref={container} className="w-full relative h-[300vh]">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center">
                <motion.div style={{ x }} className="flex gap-4 absolute">
                    {polaroids.map((project, index) => {
                        return <Polaroid key={index} index={index} {...project} progress={scrollYProgress} range={[index * 0.25, 1]} />
                    })}
                </motion.div>
            </div>
        </div>
    );
}
 
export default Carousel;