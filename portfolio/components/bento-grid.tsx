import BentoElement from "./ui/bento-element";

const BentoGrid = () => {
    return (
        <div className="p-4 sm:p-8 w-full">
            <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                <BentoElement className="col-span-1 md:col-span-1">Grid 1</BentoElement>
                <BentoElement className="col-span-1 md:col-span-2">Grid 2</BentoElement>
                <BentoElement className="col-span-1 md:col-span-2">Grid 3</BentoElement>
                <BentoElement className="col-span-1 md:col-span-1">Grid 4</BentoElement>
            </div>
        </div>
    );
}
 
export default BentoGrid;