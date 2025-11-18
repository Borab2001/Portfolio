import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import TextHoverEnter from './ui/text-hover-enter';
import type { Project, ContentSection, MockupConfig } from '@/types/project';

interface ProjectContentProps {
    project: Project;
}

interface MockupGridProps {
    mockupImages: string[][];
    mockupConfig: MockupConfig;
    title: string;
}

interface ContentSectionsProps {
    content: ContentSection[];
    showSubtitle?: boolean;
    subtitle?: string;
    links?: { url: string; label: string; type: string }[];
}

// Composant pour afficher la grille de mockups
function MockupGrid({ mockupImages, mockupConfig, title }: MockupGridProps) {
    return (
        <>
            <div className={`grid grid-cols-1 md:grid-cols-${mockupConfig.columns} gap-4 mb-16`}>
                {mockupImages.map((group, groupIndex) => (
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
                                    alt={`${title} mockup group ${groupIndex + 1} image ${imageIndex + 1}`}
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
        </>
    );
}

// Composant pour afficher les sections de contenu
function ContentSections({ content, showSubtitle, subtitle, links }: ContentSectionsProps) {
    return (
        <div className="space-y-16 mb-16">
            {content.map((section, sectionIndex) => (
                <div key={sectionIndex} className="group grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="col-span-1 flex flex-col gap-6 items-start">
                        <div>
                            <h2 className="text-xl font-semibold text-primary">
                                {section.title}
                            </h2>
                            {sectionIndex === 0 && showSubtitle && subtitle && (
                                <p className="mt-1 text-muted text-base">{subtitle}</p>
                            )}
                        </div>
                        {sectionIndex === 0 && links && (
                            <div className="flex flex-row items-center gap-2">
                                {links.map((link, index) => (
                                    <Link key={index} href={link.url} className="text-sm text-foreground" target="_blank" rel="noopener noreferrer" aria-label={`Link to ${link.type}`}>
                                        <TextHoverEnter>
                                            {link.label} 
                                            <ArrowUpRight className="inline-block ml-0.5 w-4 h-4" />
                                        </TextHoverEnter>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="col-span-2">
                        <div>
                            {section.description.map((paragraph, index) => (
                                <p key={index} className={`text-muted text-sm md:text-base leading-relaxed md:leading-relaxed ${index === 0 || paragraph.trim().startsWith('•') ? '' : 'mt-4 md:mt-6'}`}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        {section.images && section.images.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                {section.images.map((image, imgIndex) => (
                                    <Image
                                        key={imgIndex}
                                        src={image}
                                        alt={`${section.title} image ${imgIndex + 1}`}
                                        width={800}
                                        height={800}
                                        className="w-full aspect-video object-cover bg-background border border-border rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export { MockupGrid, ContentSections };

export default function ProjectContent({ project }: ProjectContentProps) {
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
        <div className="w-full py-16">
            {project.mockupImages && (
                <MockupGrid 
                    mockupImages={project.mockupImages} 
                    mockupConfig={mockupConfig} 
                    title={project.title} 
                />
            )}
            
            {project.content && (
                <ContentSections 
                    content={project.content} 
                    showSubtitle={true}
                    subtitle={project.subtitle}
                    links={project.links}
                />
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
    );
}
