import { Metadata } from 'next';
import { Project as ProjectTypes } from '@/types/project';
import type { MockupGridConfig } from '@/types/mockup-grid';

import projectsData from '@/data/projects.json';

import Footer from '@/components/footer';
import MockupGrid from '@/components/mockup-grid';
import ProjectList from '@/components/project-list';


export const metadata: Metadata = {
    title: 'Projects',
    description: 'A showcase of design projects made by Bora, blending creativity with user-focused design.',
};

export function getProjects(): ProjectTypes[] {
  return projectsData as ProjectTypes[];
}

export function getProjectById(id: string): ProjectTypes | undefined {
  return projectsData.find(project => project.id === id) as ProjectTypes | undefined;
}

export function getProjectsCount(): number {
  return projectsData.length;
}

export default function Projects() {
    const mockupGrids: MockupGridConfig[] = [
        {
            className: 'h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8',
            images: [
                { src: "/images/projects/grid/maestro_1.webp", alt: "Maestro 1", className: "row-span-1 h-full" },
                { src: "/images/projects/grid/vrai.webp", alt: "Vrai", className: "row-span-2 h-full" },
                { src: "/images/projects/grid/maestro_2.webp", alt: "Maestro 2", className: "row-span-1 h-full" },
                { src: "/images/projects/grid/watches.webp", alt: "AusVision Watch", className: "row-span-1 h-full" },
                { src: "/images/projects/grid/cedrus.webp", alt: "Reveal 1", className: "row-span-1 h-full" },
            ]
        },
        {
            className: 'grid grid-cols-1 lg:grid-cols-3 gap-8',
            images: [
                { src: "/images/projects/grid/flowfinity_1.avif", alt: "Flowfinity 1", className: "col-span-1" },
                { src: "/images/projects/grid/flowfinity_2.avif", alt: "Flowfinity 2", className: "col-span-1" },
                { src: "/images/projects/grid/flowfinity_3.avif", alt: "Flowfinity 3", className: "col-span-1" },
            ]
        },
        {
            className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8',
            customLayout: true,
            content: [
                { 
                    type: 'image', 
                    src: "/images/projects/grid/reveal_1.webp", 
                    alt: "Reveal 1", 
                    className: "col-span-1 lg:row-span-1 w-full h-full object-cover border border-border rounded-lg sm:rounded-xl md:rounded-2xl aspect-square lg:aspect-auto" 
                },
                { 
                    type: 'container', 
                    className: 'flex flex-col gap-8 sm:order-last lg:order-none col-span-1 sm:col-span-2 lg:col-span-1',
                    images: [
                        { src: "/images/projects/grid/cedrus_2.webp", alt: "Aila Consulting" },
                        { src: "/images/projects/grid/aila.webp", alt: "Aila Consulting" },
                    ]
                },
                { 
                    type: 'image', 
                    src: "/images/projects/grid/reveal_2.webp", 
                    alt: "Reveal 2", 
                    className: "col-span-1 lg:row-span-1 w-full h-full object-cover border border-border rounded-lg sm:rounded-xl md:rounded-2xl aspect-square lg:aspect-auto" 
                },
            ]
        },
        {
            className: 'grid grid-cols-1 lg:grid-cols-2 gap-8',
            images: [
                { src: "/images/projects/grid/paymate.webp", alt: "Paymate", className: "col-span-1" },
                { src: "/images/projects/grid/cpayant.webp", alt: "CPayant", className: "col-span-1" },
            ]
        }
    ];
    
    const projects = getProjects();

    return (
		<main className="backdrop-blur-lg flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
            <div className="min-h-dvh max-w-[1600px] mx-auto w-full pt-4 px-4 sm:pt-8 sm:px-8 flex flex-col smooth-height">
                <div className="flex-1 h-full flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-[24vh] pb-16">
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-medium text-primary text-center">
                        Projects
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl leading-relaxed tracking-tight text-secondary max-w-96 md:max-w-lg text-center">
                        {/* Step into my creative space. Here, every project is a blend of modern design and real-world problem solving */}
                        {/* A brief showcase of my works, each one a glimpse into how I merge creativity and user-centered design */}
                        A quick glimpse at how I blend creativity with user-focused design in my projects
                    </p>
                </div>
            
                
                <ProjectList projects={projects} />
            </div>
            <div className='max-w-[1600px] mx-auto flex flex-col p-4 sm:p-8 pb-4 sm:pb-8 md:pb-20 gap-8 sm:gap-10 md:gap-12'>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-primary text-center">
                    More Mockups
                </h2>
                <MockupGrid grids={mockupGrids} />
            </div>
            <Footer />
		</main>
    );
}