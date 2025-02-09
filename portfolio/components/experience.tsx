const Experience = () => {
    const experiences = [
        {
            title: 'Software Engineer',
            company: 'Cedrus Solutions',
            date: 'Feb 2025 - Present',
        },
        {
            title: 'Freelance Software Engineer',
            company: 'Aila Consulting',
            date: 'Aug 2024 - Present',
        },
        {
            title: 'Freelance Software Engineer',
            company: 'Groupe BNSB',
            date: 'Feb 2022 - Present',
        },
        {
            title: 'Software Engineer Intern',
            company: 'Capgemini',
            date: 'Feb 2024 - Aug 2024',
        },
        {
            title: 'Frontend Engineer Intern',
            company: 'Cypheme',
            date: 'Jul 2022 - Jan 2023',
        },
    ];

    return (
        <div className="w-full flex flex-col gap-4 max-w-6xl mx-auto p-4 sm:p-8 md:p-20">
            <h2 className="text-3xl font-semibold">Experience</h2>
            <div className="flex flex-col">
                {experiences.map((experience, index) => (
                    <div 
                        className="flex flex-row justify-between items-start border-b border-zinc-300 dark:border-zinc-700 py-8"
                        key={index}
                    >
                        <h3 className="text-2xl font-medium">{experience.title}</h3>
                        <div className="flex flex-col gap-6 items-end">
                            <p className="text-2xl font-medium">{experience.company}</p>
                            <p className="text-lg font-normal text-zinc-600 dark:text-zinc-400">{experience.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Experience;