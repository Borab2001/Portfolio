'use client';

import { useTransitionRouter } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { Project } from "@/types/project";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const router = useTransitionRouter();
    const pathname = usePathname();

    const pageAnimation = (currentPath: string, targetPath: string) => {
        const isGoingFromProjectsToProject = currentPath === '/projects' && targetPath.startsWith('/projects/') && targetPath !== '/projects';
        
        if (isGoingFromProjectsToProject) {
            const oldPageTranslateX = '-100px';
            const newPageTranslateX = '100%';
            
            document.documentElement.animate(
                [
                    {
                        opacity: 1,
                        scale: 1,
                        transform: 'translateX(0)'
                    },
                    {
                        opacity: 0,
                        scale: 1,
                        transform: `translateX(${oldPageTranslateX})`
                    }
                ], {
                    duration: 1000,
                    easing: "cubic-bezier(0.76, 0, 0.24, 1)",
                    fill: "forwards",
                    pseudoElement: "::view-transition-old(root)",
                }
            );

            document.documentElement.animate(
                [
                    {
                        transform: `translateX(${newPageTranslateX})`
                    },
                    {
                        transform: 'translateX(0)'
                    }
                ], {
                    duration: 1000,
                    easing: "cubic-bezier(0.76, 0, 0.24, 1)",
                    fill: "forwards",
                    pseudoElement: "::view-transition-new(root)",
                }
            );
        }
    };

    const handleClick = () => {
        const targetPath = `/projects/${project.id}`;
        router.push(targetPath, {
            onTransitionReady: () => pageAnimation(pathname, targetPath)
        });
    };

    return (
        <div
            className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 cursor-pointer"
            onClick={handleClick}
        >
            <div
                style={{
                    backgroundImage: `url(${project.coverImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
                    {project.title}
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;