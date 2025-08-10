import { ImageComparison } from "@/components/image-comparison";

export default function Work() {	
    return (
		<main>
            <div className="min-h-dvh w-full p-4 sm:p-8 md:p-20 flex flex-col smooth-height">
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-medium text-white">
                    Portfolio
                </h1>
                <ImageComparison />
            </div>
		</main>
    );
}
