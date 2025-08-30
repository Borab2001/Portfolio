import Image from 'next/image';
import Link from 'next/link';
import { Project as ProjectTypes } from '@/types/project';

import TextHoverEnter from './ui/text-hover-enter';

interface ProjectProps {
    project: ProjectTypes;
}

export default function Project({ project }: ProjectProps) {
    return (
        <div className="w-full py-16 border-b border-gray-800 last:border-b-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
                {project.mockupImages.map((group, groupIndex) => (
                    <div key={groupIndex} className="p-[2vw] flex flex-row justify-center space-x-4 w-full h-auto max-h-[360px] md:h-full md:max-h-none aspect-[4/3] md:aspect-[5/5] lg:aspect-[6/5] bg-[#121212] border border-zinc-700 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                        {group.map((image, imageIndex) => (
                            <div key={imageIndex} className="">
                                <Image
                                    src={image}
                                    alt={`${project.title} mockup group ${groupIndex + 1} image ${imageIndex + 1}`}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-10 mb-16">
                <div className="col-span-1 flex flex-col gap-6 items-start">
                    <div>
                        <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">{project.title}</h2>
                        <p className="text-gray-400 text-base">{project.subtitle}</p>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                        {project.links?.map((link, index) => (
                            <Link key={index} href={link.url} className="text-sm" target="_blank" rel="noopener noreferrer" aria-label={`Link to ${link.type}`}>
                                <TextHoverEnter>
                                    {link.label}
                                </TextHoverEnter>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="space-y-4">
                        {project.description.map((paragraph, index) => (
                            <p key={index} className="text-gray-300 leading-relaxed text-sm">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {project.competitorAnalysis && (
                    <>
                        <div className="col-span-1">
                            <h3 className="text-lg font-medium text-white">
                                {project.competitorAnalysis.title}
                            </h3>
                        </div>
                        <div className="col-span-2">
                            <div className="space-y-4">
                                {project.competitorAnalysis.description.map((paragraph, index) => (
                                    <p key={index} className="text-gray-300 text-sm leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>

            {project.personas && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                    {project.personas.images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={`Persona ${index + 1}`}
                            width={400}
                            height={600}
                            className="w-full aspect-[5/3] border border-zinc-700 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden"
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
