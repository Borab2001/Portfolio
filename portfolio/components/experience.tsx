const Experience = () => {
    return (
        <div className="w-full flex flex-col gap-4 max-w-5xl mx-auto p-4 sm:p-8 md:p-20">
            <h2 className="text-2xl font-semibold">Experience</h2>
            <div className="flex flex-col">
                <div className="flex flex-row justify-between items-start border-b border-zinc-300 dark:border-zinc-700 py-4">
                    <h3 className="text-xl font-semibold">Job title</h3>
                    <div className="flex flex-col gap-4">
                        <p className="text-xl font-semibold">Company</p>
                        <p className="text-lg font-normal">Date</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Experience;