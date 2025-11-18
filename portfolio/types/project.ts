export interface ContentSection {
    title: string;
    description: string[];
    images?: string[]; // Images optionnelles pour chaque section
}

export interface MockupConfig {
    columns: 1 | 2 | 3;
    maxHeightMobile: 360 | 420 | 480;
    aspectRatio: {
        mobile: string;
        md: string;
        lg: string;
    };
    hasPadding: boolean;
    objectFit: "contain" | "cover";
    imageText?: string;
}

export interface RedesignItem {
    subtitle: string;
    content: ContentSection[];
    links: {
        type: string;
        label: string;
        url: string;
    }[];
    mockupImages: string[][];
    mockupConfig?: MockupConfig;
}

export interface Project {
    id: string;
    navTitle: string;
    title: string;
    subtitle?: string;
    coverImage: string;
    links?: {
        type: string;
        label: string;
        url: string;
    }[];
    content?: ContentSection[];
    mockupImages?: string[][];
    mockupConfig?: MockupConfig;
    redesigns?: RedesignItem[];
    personas?: {
        title: string;
        images: string[];
    };
}