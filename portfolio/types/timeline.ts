export interface TimelineExperience {
    // Experience data
    id: string;
    year: number;
    title: string;
    description: string;
    position: 'left' | 'right';

    // Polaroid data
    image: string;
    alt: string;
    imageTitle: string;
    date: string;
}