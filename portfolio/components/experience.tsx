"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';


const Experience = () => {

    const [open, setOpen] = useState<number | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const experiences = [
        {
            title: 'Frontend Engineer',
            company: 'Cedrus Solutions',
            date: 'Feb 2025 - Apr 2025',
            description: 'SaaS platform assessing energy consumption and decarbonization strategies in real estate using LLMs.',
            stack: 'NextJS, TypeScript, Docker, Tailwind, Shadcn, NextAuth, Git, AWS, i18n, Figma'
        },
        {
            title: 'Freelance Software Engineer',
            company: 'Aila Consulting',
            date: 'Aug 2024 - Present',
            description: 'Emerging startup in visa solutions, work permits and translations.',
            stack: 'NextJS, TypeScript, Tailwind, Shadcn, React-Email, Resend, Motion, Git, i18n, Figma, Vercel'
        },
        {
            title: 'Freelance Software Engineer',
            company: 'Groupe BNSB',
            date: 'Feb 2022 - Present',
            description: 'Emerging consulting startup in textile and fashion industry.',
            stack: 'NextJS, TypeScript, Tailwind, Shadcn, MongoDB, Clerk, Stripe, React-Email, Resend, Motion, Git, Figma, Vercel'
        },
        {
            title: 'Software Engineer Intern',
            company: 'Capgemini',
            date: 'Feb 2024 - Aug 2024',
            description: 'Leader in engineering solutions and digital transformation.',
            stack: 'ReactJS, ReactNative, TypeScript, NestJS, Swift, SwiftUI, Jest, Nx, Git, Jira, Figma'
        },
        {
            title: 'Frontend Engineer Intern',
            company: 'Cypheme',
            date: 'Jul 2022 - Jan 2023',
            description: 'AI anti-counterfeit startup based in Station F. Also working as a freelance.',
            stack: 'VueJS, NodeJS, ExpressJS, HTML, CSS, JavaScript, GSAP, Git, Azure, Figma'
        },
    ];

    const openAccordion = (index: number) => {
        setOpen(open === index ? null : index);
    };

    return (
        <div className="overflow-x-hidden w-full flex flex-col gap-4 max-w-6xl mx-auto px-4 pb-4 sm:px-8 sm:pb-8 md:px-20 md:pb-20">
            <h2 className="text-3xl font-semibold">Experience</h2>
            <div className="flex flex-col">
                {experiences.map((experience, index) => (
                    <div 
                        className="w-full flex flex-col gap-2 justify-between items-center cursor-pointer border-b border-zinc-700 relative"
                        onClick={() => openAccordion(index)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        key={index}
                    >
                        <div 
                            className="w-full flex flex-row gap-2 justify-between items-start py-8"
                        >
                            <h3 className="text-lg md:text-2xl font-medium">{experience.title}</h3>
                            <div className="flex flex-col gap-6 items-end">
                                <p className="text-lg md:text-2xl font-medium text-right">{experience.company}</p>
                                <motion.div 
                                    className='flex flex-row items-center'
                                    animate={{ 
                                        x: hoveredIndex === index ? 0 : 28
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >

                                    <p className="text-sm md:text-lg font-normal text-zinc-400 text-right whitespace-nowrap">
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
                                            className="text-zinc-400" 
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
                            {/* CONTENT HERE */}
                            <p className="text-sm md:text-lg font-normal text-zinc-400">{experience.description}</p>
                            <p className='text-sm md:text-lg font-normal italic text-zinc-400 mb-8'>
                                {experience.stack}
                            </p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Experience;