'use client';

import { useTransitionRouter } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { Project as ProjectTypes } from '@/types/project';

interface ProjectListProps {
    projects: ProjectTypes[];
}

export default function ProjectList({ projects }: ProjectListProps) {
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

    return (
        <div>
            {projects.map((project) => (
                <button 
                    key={project.id} 
                    onClick={(e) => {
                        e.preventDefault();
                        const targetPath = `/projects/${project.id}`;
                        router.push(targetPath, {
                            onTransitionReady: () => pageAnimation(pathname, targetPath)
                        });
                    }}
                    className="block text-left w-full"
                >
                    <h2 className="text-xl md:text-2xl font-semibold text-primary mb-1 hover:text-muted transition-colors">
                        {project.title}
                    </h2>
                </button>
            ))}
        </div>
    );
}