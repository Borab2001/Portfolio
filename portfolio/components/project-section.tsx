'use client';

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ui/project-card";
import { Project } from "@/types/project";

interface ProjectSectionProps {
    projects: Project[];
}

const ProjectSection = ({ projects }: ProjectSectionProps) => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-4">
                {projects.map((project) => {
                    return <ProjectCard key={project.id} project={project} />;
                })}
            </motion.div>
        </div>
        </section>
    );
};

export default ProjectSection;