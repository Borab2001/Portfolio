import BentoElement from "./ui/bento-element";

const BentoGrid = () => {
    return (
        <div className="p-4 sm:p-8 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                <BentoElement />
                <BentoElement />
                <BentoElement />
                <BentoElement />
        </div>
    );
}
 
export default BentoGrid;