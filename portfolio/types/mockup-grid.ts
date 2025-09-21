// Types pour les grilles de mockups
export interface MockupImage {
    src: string;
    alt: string;
    className?: string;
}

export interface MockupGridContent {
    type: 'image' | 'container';
    src?: string;
    alt?: string;
    className?: string;
    images?: MockupImage[];
}

export interface MockupGridConfig {
    className: string;
    customLayout?: boolean;
    images?: MockupImage[];
    content?: MockupGridContent[];
}