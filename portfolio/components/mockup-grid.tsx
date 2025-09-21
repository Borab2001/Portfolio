import MockupGridImage from './ui/mockup-grid-image';
import type { MockupGridConfig, MockupImage, MockupGridContent } from '@/types/mockup-grid';

interface MockupGridProps {
    grids: MockupGridConfig[];
}

const MockupGrid = ({ grids }: MockupGridProps) => {
    return (
        <div className='flex flex-col gap-8'>
            {grids.map((grid, gridIndex) => (
                <div key={gridIndex} className={grid.className}>
                    {grid.customLayout ? (
                        grid.content?.map((item: MockupGridContent, index: number) => {
                            if (item.type === 'image') {
                                return (
                                    <MockupGridImage
                                        key={index}
                                        src={item.src!}
                                        alt={item.alt!}
                                        className={item.className!}
                                    />
                                );
                            } else if (item.type === 'container') {
                                return (
                                    <div key={index} className={item.className}>
                                        {item.images?.map((img: MockupImage, imgIndex: number) => (
                                            <MockupGridImage
                                                key={imgIndex}
                                                src={img.src}
                                                alt={img.alt}
                                            />
                                        ))}
                                    </div>
                                );
                            }
                            return null;
                        })
                    ) : (
                        grid.images?.map((image, index) => (
                            <MockupGridImage
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                className={image.className}
                            />
                        ))
                    )}
                </div>
            ))}
        </div>
    );
};

export default MockupGrid;