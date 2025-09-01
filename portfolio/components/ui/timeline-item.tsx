import { Calendar } from 'lucide-react';
import PolaroidPhoto from './polaroid';
import { TimelineExperience } from '@/types/timeline';


interface TimelineItemProps {
  experience: TimelineExperience;
  isLast?: boolean;
}

export default function TimelineItem({ experience, isLast = false }: TimelineItemProps) {
  const { year, title, description, image, alt, imageTitle, date, position } = experience;

    return (
        <div className="relative mb-24 md:mb-40">
            {/* Dashed line */}
            {!isLast && (
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <svg 
                        width="100%" 
                        height="100%" 
                        viewBox="0 0 1000 600" 
                        className="absolute inset-0"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <defs>
                            <filter id="blur">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="0.5"/>
                            </filter>
                        </defs>
                        <path
                            d={position === 'left' 
                                ? "M 200 200 Q 400 100, 500 300 Q 600 500, 800 400" 
                                : "M 800 200 Q 600 100, 500 300 Q 400 500, 200 400"
                            }
                            stroke="#666"
                            strokeWidth="3"
                            strokeDasharray="12,8"
                            fill="none"
                            opacity="0.4"
                            filter="url(#blur)"
                        />
                    </svg>
                </div>
            )}

            <div className={`flex flex-col items-start gap-y-10 md:justify-between ${
                position === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}>
                <div className="mx-auto md:mx-0 flex-shrink-0">
                    <PolaroidPhoto 
                        image={image}
                        alt={alt}
                        imageTitle={imageTitle}
                        date={date}
                        position={position}
                    />
                </div>

                {/* Text Content */}
                <div className="mx-auto md:mx-0 flex flex-col items-start">
                    <div className="inline-flex items-center gap-2 bg-foreground rounded-full px-4 py-2 shadow-lg mb-6">
                        <Calendar className='text-surface-text size-5' />
                        <span className="font-medium text-surface-text">{year}</span>
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                        {title}
                    </h3>
                    <p className="text-muted leading-relaxed max-w-lg">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
