"use client";

import { notFound, useParams } from "next/navigation";

import projectsData from '@/data/projects.json';
import type { Project } from '@/types/project';

import Footer from '@/components/footer';
import ProjectContent, { MockupGrid, ContentSections } from '@/components/project';


const ProjectPage = () => {
    const params = useParams();
    const project = (projectsData as Project[]).find((p) => p.id === params.id);

    if (!project) {
        return notFound();
    }

    if (project.redesigns) {
        return (
            <main className="backdrop-blur-lg flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
                <div className="min-h-dvh max-w-[1600px] mx-auto w-full pt-4 px-4 sm:pt-8 sm:px-8 flex flex-col smooth-height">
                    <div className="flex-1 h-full flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-[24vh] pb-16">
                        <h1 className="text-5xl sm:text-7xl md:text-8xl font-normal text-primary text-center">
                            {project.title}
                        </h1>
                    </div>
                    <div className="w-full py-16 space-y-32">
                        {project.redesigns.map((redesign, redesignIndex) => {
                            const mockupConfig = redesign.mockupConfig || {
                                columns: 2,
                                maxHeightMobile: 420,
                                aspectRatio: {
                                    mobile: "4/3",
                                    md: "4/3",
                                    lg: "4/3"
                                },
                                hasPadding: false,
                                objectFit: "cover" as const
                            };

                            return (
                                <div key={redesignIndex} className="w-full">
                                    <div className="mb-16">
                                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-primary text-center mb-8">
                                            {redesign.subtitle}
                                        </h2>
                                    </div>
                                    <MockupGrid 
                                        mockupImages={redesign.mockupImages}
                                        mockupConfig={mockupConfig}
                                        title={redesign.subtitle}
                                    />
                                    <ContentSections 
                                        content={redesign.content}
                                        showSubtitle={false}
                                        links={redesign.links}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="backdrop-blur-lg flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
            <div className="min-h-dvh max-w-[1600px] mx-auto w-full pt-4 px-4 sm:pt-8 sm:px-8 flex flex-col smooth-height">
                <div className="flex-1 h-full flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-[24vh] pb-16">
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-normal text-primary text-center">
                        {project.title}
                    </h1>
                </div>
                <ProjectContent project={project} />
            </div>
            <Footer />
        </main>
    );
}

export default ProjectPage;