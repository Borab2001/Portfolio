"use client";

import { useRef } from "react";
import Card from "./ui/card";
import { Project } from "@/types/project";
import { useScroll } from "motion/react";

interface CardsProps {
    projects: Project[];
}

const Cards = ({ projects }: CardsProps) => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const mapProjectToCardProps = (project: Project) => {
        return {
            title: project.title,
            description: project.subtitle,
            src: project.coverImage,
            alt: `${project.title} project image`,
        };
    };

    return (
        <div ref={container}>
            {projects.map((project, index) => {
                const targetScale = 1 - ((projects.length - index) * 0.05);
                const cardProps = mapProjectToCardProps(project);

                return <Card 
                    key={project.id} 
                    index={index} 
                    {...cardProps}
                    progress={scrollYProgress} 
                    range={[index * 0.10, 1]} 
                    targetScale={targetScale} 
                />
            })}
        </div>
    );
}
 
export default Cards;