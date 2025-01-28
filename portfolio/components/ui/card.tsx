const Card = ({
    title,
    description,
    src,
    link
}) => {
    return (
        <div className="p-8 sm:p-20">
            <div className="w-full max-w-5xl h-auto aspect-video dark:bg-zinc-900 border dark:border-zinc-700 rounded-xl">
                <h2 className="text-2xl">{title}</h2>
            </div>
        </div>
    );
}
 
export default Card;