import Image from 'next/image';

interface MockupGridImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
}

const MockupGridImage = ({ 
    src, 
    alt, 
    className = 'col-span-1', 
    width = 1000, 
    height = 1000 
}: MockupGridImageProps) => {
    const baseClasses = 'w-full object-cover border border-border rounded-lg sm:rounded-xl md:rounded-2xl';
    const heightClass = className?.includes('h-full') ? 'h-full' : 'h-auto';
    const combinedClasses = `${className} ${baseClasses} ${heightClass}`;

    return (
        <Image
            src={src}
            alt={alt}
            className={combinedClasses}
            width={width}
            height={height}
        />
    );
};

export default MockupGridImage;