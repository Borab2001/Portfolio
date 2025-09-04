"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import type { Experience as ExperienceType } from '@/types/experience';
import Link from 'next/link';
import TextHoverEnter from './ui/text-hover-enter';


const Experience = () => {

    const [open, setOpen] = useState<number | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const experiences: ExperienceType[] = [
        {
            title: 'UX/UI Designer',
            type: 'Freelance',
            company: 'Cedrus Solutions',
            date: 'Feb 2025 - Present',
            description: 'SaaS platform assessing energy consumption and decarbonization strategies in real estate using LLMs.',
        },
        {
            title: 'Product Designer',
            type: 'Freelance',
            company: 'Cypheme',
            date: 'Jan 2023 - Aug 2025',
            description: 'AI anti-counterfeit startup based in Station F. Applying for Y Combinator with VraiAI.',
            stack: 'Figma, Webflow, JavaScript, GSAP, Hubspot'
        },
        {
            title: 'Software Engineer',
            type: 'Freelance',
            company: 'Groupe BNSB',
            date: 'Feb 2022 - Aug 2025',
            description: 'Emerging consulting startup in textile and fashion industry.',
            stack: 'NextJS, TypeScript, Tailwind, Shadcn, MongoDB, Clerk, Stripe, React-Email, Resend, Motion, Git, Figma, Vercel',
            referenceLetter: 'https://drive.google.com/file/d/16ku9X-nS0BYpBCEIUv-nwiGuAUWUPs-z/view?usp=sharing'
        },
        {
            title: 'Frontend Engineer',
            type: 'Freelance',
            company: 'Cedrus Solutions',
            date: 'Feb 2025 - Mar 2025',
            description: 'SaaS platform assessing energy consumption and decarbonization strategies in real estate using LLMs.',
            stack: 'NextJS, TypeScript, Docker, Tailwind, Shadcn, NextAuth, Git, AWS, i18n',
            referenceLetter: 'https://drive.google.com/file/d/1gC1N5EtIZV74-N75YUx9FmEXToHv4tsc/view?usp=sharing'
        },
        {
            title: 'Software Engineer',
            type: 'Freelance',
            company: 'Aila Consulting',
            date: 'Aug 2024 - Mar 2025',
            description: 'Emerging startup in visa solutions, work permits and translations.',
            stack: 'NextJS, TypeScript, Tailwind, Shadcn, React-Email, Resend, Motion, Git, i18n, Figma, Vercel'
        },
        {
            title: 'Software Engineer ',
            type: 'Internship',
            company: 'Capgemini',
            date: 'Feb 2024 - Aug 2024',
            description: 'Leader in engineering solutions and digital transformation.',
            stack: 'ReactJS, ReactNative, TypeScript, NestJS, Swift, SwiftUI, Jest, Nx, Git, Jira, Figma',
            referenceLetter: 'https://drive.google.com/file/d/1OjtPhuC1AK-oKuni7E__pdliLWIDYMTn/view?usp=sharing'
        },
        {
            title: 'Frontend Engineer',
            type: 'Internship',
            company: 'Cypheme',
            date: 'Jul 2022 - Jan 2023',
            description: 'AI anti-counterfeit startup based in Station F.',
            stack: 'VueJS, NodeJS, ExpressJS, HTML, CSS, JavaScript, GSAP, Git, Azure, Figma, Webflow',
            referenceLetter: 'https://drive.google.com/file/d/12X45swBaqcS7x1nY64mFp0_N_1yqqV2z/view?usp=sharing'
        }
    ];

    const openAccordion = (index: number) => {
        setOpen(open === index ? null : index);
    };

    return (
        <div className="overflow-x-hidden w-full flex flex-col gap-4 max-w-6xl mx-auto px-4 pb-4 sm:px-8 sm:pb-8 md:px-20 md:pb-20">
            <h2 className="text-3xl text-primary font-semibold">
                {/* Experience <span className="text-base text-subtle align-top">({experiences.length})</span> */}
                Experience
            </h2>
            <div className="flex flex-col">
                {experiences.map((experience, index) => (
                    <div 
                        className="w-full flex flex-col gap-2 justify-between items-center cursor-pointer border-b border-border-light relative"
                        onClick={() => openAccordion(index)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        key={index}
                    >
                        <div 
                            className="w-full grid grid-cols-2 gap-x-2 justify-between items-start py-8"
                        >
                            <div className="h-full flex flex-col justify-between items-start">
                                <h3 className="text-lg md:text-2xl font-medium text-foreground">{experience.title}</h3>
                                <div className="px-2 py-1 md:px-3 text-sm md:text-lg font-normal bg-background backdrop-blur-md text-secondary border border-border rounded-full">
                                    {experience.type}
                                </div>
                            </div>
                            <div className="flex flex-col gap-6 items-end">
                                <p className="text-lg md:text-2xl font-medium text-right text-foreground">{experience.company}</p>
                                <motion.div 
                                    className='flex flex-row items-center'
                                    animate={{ 
                                        x: hoveredIndex === index ? 0 : 28
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >

                                    <p className="text-sm md:text-lg leading-[30px] md:leading-[38px] font-normal text-muted text-right whitespace-nowrap">
                                        {experience.date}
                                    </p>
                                    
                                    <motion.div
                                        className="pl-2"
                                        initial={{ opacity: 0 }}
                                        animate={{ 
                                            opacity: hoveredIndex === index ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        <ChevronDown 
                                            className="text-muted" 
                                            size={20} 
                                        />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                        
                        
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: open === index ? 'auto' : 0, opacity: open === index ? 1 : 0 }}
                            transition={{ duration: 0.4 }}
                            className="w-full overflow-hidden flex flex-col gap-2"
                        >
                            <p className="text-sm md:text-lg font-normal text-muted">
                                {experience.description}
                            </p>
                            <p className='text-sm md:text-lg font-normal italic text-muted mb-2'>
                                {experience.stack}
                            </p>

                            {experience.referenceLetter && (
                                <Link href={experience.referenceLetter} className="text-sm md:text-base text-foreground" target="_blank" rel="noopener noreferrer" aria-label="Reference Letter">
                                    <TextHoverEnter>
                                        Reference Letter
                                        <ArrowUpRight className="inline-block ml-0.5 w-4 h-4" />
                                    </TextHoverEnter>
                                </Link>
                            )}
                            
                            <div className='mb-8' />
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Experience;