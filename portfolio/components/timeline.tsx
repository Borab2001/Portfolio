import TimelineItem from './ui/timeline-item';
import { TimelineExperience } from '@/types/timeline';

interface TimelineProps {
  experiences: TimelineExperience[];
}

export default function Timeline({ experiences }: TimelineProps) {
    return (
        <div className="min-h-screen py-20">
            <div className="max-w-5xl mx-auto px-6">
                {experiences.map((experience, index) => (
                    <TimelineItem 
                        key={experience.id}
                        experience={experience}
                        isLast={index === experiences.length - 1}
                    />
                    ))}
            </div>
        </div>
    );
}