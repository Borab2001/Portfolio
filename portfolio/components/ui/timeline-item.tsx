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
        <div className="relative md:mb-40">
            {/* Dashed line */}
            {!isLast && (
                <div className="hidden md:block absolute top-3/4 left-0 w-full h-full z-0">
                    <svg 
                        width="100%" 
                        height="100%" 
                        viewBox="0 0 100 100" 
                        className="absolute inset-0"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <filter id="blur">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="0.5"/>
                            </filter>
                        </defs>
                        <path
                            d={position === 'left' 
                                ? "M 10 5 Q 12 60, 40 45 Q 68 30, 90 85" 
                                : "M 90 5 Q 88 60, 60 45 Q 32 30, 10 85"
                            }
                            stroke="#3f3f46"
                            strokeWidth="3"
                            strokeDasharray="12,8"
                            fill="none"
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                            opacity="1"
                            filter=""
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>
                </div>
            )}

            {isLast && (
                <div className="hidden md:block absolute top-3/4 left-0 w-1/2 h-full z-0">
                    <svg 
                        width="100%" 
                        height="100%" 
                        viewBox="0 0 100 100" 
                        className="absolute inset-0"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <marker id="chevron" markerWidth="12" markerHeight="10" 
                                refX="3" refY="5" orient="auto">
                                <polyline points="5 2, 8 5, 5 8" 
                                    stroke="#3f3f46" 
                                    strokeWidth="1" 
                                    fill="none" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" />
                            </marker>
                        </defs>
                        <path
                            d={position === 'left' 
                                ? "M 10 5 Q 12 50, 90 45" 
                                : "M 90 5 Q 88 50, 10 45"
                            }
                            stroke="#3f3f46"
                            strokeWidth="3"
                            strokeDasharray="12,8"
                            fill="none"
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                            opacity="1"
                            markerEnd="url(#chevron)"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>
                </div>
            )}

            <div className={`flex flex-col max-w-[480px] md:max-w-none items-center mx-auto md:mx-0 md:items-start gap-y-10 md:justify-between ${
                position === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}>
                <div className="flex-shrink-0">
                    <PolaroidPhoto 
                        image={image}
                        alt={alt}
                        imageTitle={imageTitle}
                        date={date}
                        position={position}
                    />
                </div>

                {/* Text Content */}
                <div className="flex flex-col items-start">
                    <div className="inline-flex items-center gap-2 bg-foreground rounded-full px-4 py-2 shadow-lg mb-6 border border-border-light">
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

                {/* Mobile dashed line */}
                {!isLast && (
                    <div className="flex md:hidden w-36 h-44 mb-10">
                        <svg 
                            width="100%" 
                            height="100%" 
                            viewBox="0 0 90 96" 
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <defs>
                                <marker id="chevron-mobile" markerWidth="8" markerHeight="6" 
                                    refX="3" refY="3" orient="auto">
                                    <polyline points="2 1, 4 3, 2 5" 
                                        stroke="#3f3f46" 
                                        strokeWidth="1" 
                                        fill="none" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" />
                                </marker>
                            </defs>
                            <path
                                d="M 45 8 Q 15 50, 45 96"
                                stroke="#3f3f46"
                                strokeWidth="2"
                                strokeDasharray="6,4"
                                fill="none"
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                opacity="1"
                                markerEnd="url(#chevron-mobile)"
                            />
                        </svg>
                    </div>
                )}
            </div>
        </div>
    );
}
