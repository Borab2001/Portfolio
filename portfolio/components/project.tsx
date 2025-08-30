import Image from 'next/image';
import { Project as ProjectTypes } from '@/types/project';

interface ProjectProps {
    project: ProjectTypes;
}

export default function Project({ project }: ProjectProps) {
    return (
        <div className="w-full py-16 border-b border-gray-800 last:border-b-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
                {project.mockupImages.map((image, index) => (
                    <div key={index} className="w-full aspect-[4/3] md:aspect-[5/5] lg:aspect-[6/5] border border-zinc-700 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                            <Image
                                src={image}
                                alt={`${project.title} mockup ${index + 1}`}
                                width={160}
                                height={320}
                                className="w-full h-full object-cover"
                            />
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
                <div className="col-span-1">
                    <h2 className="text-2xl font-semibold text-white mb-1">{project.title}</h2>
                    <p className="text-gray-400 text-md">{project.subtitle}</p>
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
                <div className="grid grid-cols-2 gap-4 justify-items-center">
                    {project.personas.images.map((image, index) => (
                    // <div key={index} className="w-full aspect-[5/3] border border-zinc-700 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                    //     <Image
                    //         src={image}
                    //         alt={`Persona ${index + 1}`}
                    //         width={400}
                    //         height={600}
                    //         className="w-full h-auto object-cover"
                    //     />
                    // </div>

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
