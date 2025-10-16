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
            className="bg-background border border-border hover:bg-[#27272ae6] hover:border-[#f4f4f533] transition-colors duration-500 p-2 rounded-xl sm:rounded-2xl md:rounded-3xl group flex flex-col gap-4 overflow-hidden cursor-pointer"
            onClick={handleClick}
        >
            <div className="flex flex-col p-2 sm:p-4 md:p-6">
                <h2 className="text-xl md:text-3xl font-medium text-primary">
                    {project.navTitle}
               </h2>
            </div>
            <div
                style={{
                    backgroundImage: `url(${project.coverImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="h-[450px] w-[450px] rounded-lg sm:rounded-xl md:rounded-2xl pointer-events-non select-none"
            />
        </div>
    );
};

export default ProjectCard;