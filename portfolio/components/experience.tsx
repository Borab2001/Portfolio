"use client";

import { useState } from 'react';
import { motion } from 'motion/react';


const Experience = () => {

    const [open, setOpen] = useState<number | null>(null);
    const experiences = [
        {
            title: 'Frontend Engineer',
            company: 'Cedrus Solutions',
            date: 'Feb 2025 - Present',
            description: 'SaaS platform for assessing energy consumption and decarbonization strategies in real estate.',
            stack: 'Next.js, TypeScript, Docker, Tailwind, Shadcn, NextAuth, AWS'
        },
        {
            title: 'Freelance Software Engineer',
            company: 'Aila Consulting',
            date: 'Aug 2024 - Present',
            description: 'Test description 2'
        },
        {
            title: 'Freelance Software Engineer',
            company: 'Groupe BNSB',
            date: 'Feb 2022 - Present',
            description: ''
        },
        {
            title: 'Software Engineer Intern',
            company: 'Capgemini',
            date: 'Feb 2024 - Aug 2024',
            description: ''
        },
        {
            title: 'Frontend Engineer Intern',
            company: 'Cypheme',
            date: 'Jul 2022 - Jan 2023',
            description: ''
        },
    ];

    const openAccordion = (index: number) => {
        setOpen(open === index ? null : index);
    };

    return (
        <div className="w-full flex flex-col gap-4 max-w-6xl mx-auto p-4 sm:p-8 md:p-20">
            <h2 className="text-3xl font-semibold">Experience</h2>
            <div className="flex flex-col">
                {experiences.map((experience, index) => (
                    <div 
                        className="w-full flex flex-col gap-2 justify-between items-center cursor-pointer border-b border-zinc-300 dark:border-zinc-700"
                        onClick={() => openAccordion(index)}
                        key={index}
                    >
                        <div 
                            className="w-full flex flex-row gap-2 justify-between items-start py-8"
                            key={index}
                        >
                            <h3 className="text-lg md:text-2xl font-medium">{experience.title}</h3>
                            <div className="flex flex-col gap-6 items-end">
                                <p className="text-lg md:text-2xl font-medium text-right">{experience.company}</p>
                                <p className="text-sm md:text-lg font-normal text-zinc-600 dark:text-zinc-400 text-right">{experience.date}</p>
                            </div>
                        </div>
                        <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: open === index ? 'auto' : 0, opacity: open === index ? 1 : 0 }}
                                transition={{ duration: 0.4 }}
                                className="w-full overflow-hidden flex flex-col gap-2"
                            >
                                {/* CONTENT HERE */}
                                <p className="text-sm md:text-lg font-normal text-zinc-600 dark:text-zinc-400">{experience.description}</p>
                                <p className='text-sm md:text-lg font-normal italic text-zinc-600 dark:text-zinc-400 mb-8'>
                                    {experience.stack}
                                </p>
                        </motion.div>
                    </div>
                ))}

                {/* ONLY FOR ROW WITHOUT ACCORDION */}
                {/* {experiences.map((experience, index) => (
                    <div 
                        className="flex flex-row gap-2 justify-between items-start border-b border-zinc-300 dark:border-zinc-700 py-8"
                        key={index}
                    >
                        <h3 className="text-lg md:text-2xl font-medium">{experience.title}</h3>
                        <div className="flex flex-col gap-6 items-end">
                            <p className="text-lg md:text-2xl font-medium text-right">{experience.company}</p>
                            <p className="text-sm md:text-lg font-normal text-zinc-600 dark:text-zinc-400 text-right">{experience.date}</p>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    );
}
 
export default Experience;