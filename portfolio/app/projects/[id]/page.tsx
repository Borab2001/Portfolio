"use client";

import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from "next/navigation";

import projectsData from '@/data/projects.json';

import { ArrowUpRight } from 'lucide-react';
import TextHoverEnter from '@/components/ui/text-hover-enter';
import Footer from '@/components/footer';


const Project = () => {
    const params = useParams();
    const project = projectsData.find((p) => p.id === params.id);

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
                                    <div className={`grid grid-cols-1 md:grid-cols-${mockupConfig.columns} gap-4 mb-16`}>
                                        {redesign.mockupImages.map((group, groupIndex) => (
                                            <div 
                                                key={groupIndex} 
                                                className={`
                                                    ${mockupConfig.hasPadding ? 'p-[2vw]' : ''} 
                                                    flex flex-row justify-center space-x-4 w-full h-auto 
                                                    max-h-[${mockupConfig.maxHeightMobile}px] 
                                                    md:max-h-none 
                                                    aspect-[${mockupConfig.aspectRatio.mobile}] 
                                                    md:aspect-[${mockupConfig.aspectRatio.md}] 
                                                    lg:aspect-[${mockupConfig.aspectRatio.lg}] 
                                                    bg-background border border-border rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden
                                                `}
                                            >
                                                {group.map((image, imageIndex) => (
                                                    <div className='w-full h-full' key={imageIndex}>
                                                        <Image
                                                            src={image}
                                                            alt={`${redesign.subtitle} mockup group ${groupIndex + 1} image ${imageIndex + 1}`}
                                                            width={1000}
                                                            height={1000}
                                                            className={`w-full h-full object-${mockupConfig.objectFit}`}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                    {mockupConfig.imageText && (
                                        <p className="text-center text-sm text-muted mb-16 -mt-12">
                                            {mockupConfig.imageText}
                                        </p>
                                    )}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-10 mb-16">
                                        <div className="col-span-1 flex flex-col gap-6 items-start">
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-1">{redesign.context.title}</h3>
                                            </div>

                                            <div className="flex flex-row items-center gap-2">
                                                {redesign.links && redesign.links.map((link, index) => (
                                                    <Link key={index} href={link.url} className="text-sm text-foreground" target="_blank" rel="noopener noreferrer" aria-label={`Link to ${link.type}`}>
                                                        <TextHoverEnter>
                                                            {link.label} 
                                                            <ArrowUpRight className="inline-block ml-0.5 w-4 h-4" />
                                                        </TextHoverEnter>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-span-2">
                                            <div className="space-y-4 md:space-y-6">
                                                {redesign.context.description.map((paragraph, index) => (
                                                    <p key={index} className="text-muted text-sm md:text-base leading-relaxed md:leading-relaxed">
                                                        {paragraph}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    // Configuration par défaut pour les mockups (projets normaux)
    const mockupConfig = project.mockupConfig || {
        columns: 3,
        maxHeightMobile: 360,
        aspectRatio: {
            mobile: "4/3",
            md: "5/5",
            lg: "6/5"
        },
        hasPadding: true,
        objectFit: "contain" as const
    };
    return (
        <main className="backdrop-blur-lg flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
            <div className="min-h-dvh max-w-[1600px] mx-auto w-full pt-4 px-4 sm:pt-8 sm:px-8 flex flex-col smooth-height">
                <div className="flex-1 h-full flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-[24vh] pb-16">
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-normal text-primary text-center">
                        {project.title}
                    </h1>
                </div>
                <div className="w-full py-16">
                    {project.mockupImages && (
                        <div className={`grid grid-cols-1 md:grid-cols-${mockupConfig.columns} gap-4 mb-16`}>
                            {project.mockupImages.map((group, groupIndex) => (
                                <div 
                                    key={groupIndex} 
                                    className={`
                                        ${mockupConfig.hasPadding ? 'p-[2vw]' : ''} 
                                        flex flex-row justify-center space-x-4 w-full h-auto 
                                        max-h-[${mockupConfig.maxHeightMobile}px] 
                                        md:max-h-none 
                                        aspect-[${mockupConfig.aspectRatio.mobile}] 
                                        md:aspect-[${mockupConfig.aspectRatio.md}] 
                                        lg:aspect-[${mockupConfig.aspectRatio.lg}] 
                                        bg-background border border-border rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden
                                    `}
                                >
                                    {group.map((image, imageIndex) => (
                                        <div className='w-full h-full' key={imageIndex}>
                                            <Image
                                                src={image}
                                                alt={`${project.title} mockup group ${groupIndex + 1} image ${imageIndex + 1}`}
                                                width={1000}
                                                height={1000}
                                                className={`w-full h-full object-${mockupConfig.objectFit}`}
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                    {mockupConfig.imageText && (
                        <p className="text-center text-sm text-muted mb-16 -mt-12">
                            {mockupConfig.imageText}
                        </p>
                    )}
                    {project.context && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-10 mb-16">
                            <div className="col-span-1 flex flex-col gap-6 items-start">
                                <div>
                                    <h2 className="text-xl md:text-2xl font-semibold text-primary mb-1">{project.context.title}</h2>
                                    {project.subtitle && <p className="text-muted text-base">{project.subtitle}</p>}
                                </div>

                                <div className="flex flex-row items-center gap-2">
                                    {project.links && project.links.map((link, index) => (
                                        <Link key={index} href={link.url} className="text-sm text-foreground" target="_blank" rel="noopener noreferrer" aria-label={`Link to ${link.type}`}>
                                            <TextHoverEnter>
                                                {link.label} 
                                                <ArrowUpRight className="inline-block ml-0.5 w-4 h-4" />
                                            </TextHoverEnter>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="space-y-4 md:space-y-6">
                                    {project.context.description.map((paragraph, index) => (
                                        <p key={index} className="text-muted text-sm md:text-base leading-relaxed md:leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {project.competitorAnalysis && (
                                <>
                                    <div className="col-span-1">
                                        <h3 className="text-lg font-medium text-primary">
                                            {project.competitorAnalysis.title}
                                        </h3>
                                    </div>
                                    <div className="col-span-2">
                                        <div className="space-y-4 md:space-y-6">
                                            {project.competitorAnalysis.description.map((paragraph, index) => (
                                                <p key={index} className="text-muted text-sm md:text-base leading-relaxed md:leading-relaxed">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                            
                            {project.marketResearch && (
                                <>
                                    <div className="col-span-1">
                                        <h3 className="text-lg font-medium text-primary">
                                            {project.marketResearch.title}
                                        </h3>
                                    </div>
                                    <div className="col-span-2">
                                        <div className="space-y-4 md:space-y-6">
                                            {project.marketResearch.description.map((paragraph, index) => (
                                                <p key={index} className="text-muted text-sm md:text-base leading-relaxed md:leading-relaxed">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    {project.personas && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                            {project.personas.images.map((image, index) => (
                                <Image
                                    key={index}
                                    src={image}
                                    alt={`Persona ${index + 1}`}
                                    width={800}
                                    height={800}
                                    className="w-full aspect-video bg-background border border-border rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Project;