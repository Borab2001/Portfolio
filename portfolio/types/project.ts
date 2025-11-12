export interface ContentSection {
    title: string;
    description: string[];
    images?: string[]; // Images optionnelles pour chaque section
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
    mockupConfig?: {
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
    };
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
    mockupConfig?: {
        columns: 1 | 2 | 3;
        maxHeightMobile: 360 | 420 | 480;
        aspectRatio: {
            mobile: string; // ex: "4/3"
            md: string; // ex: "5/5"
            lg: string; // ex: "6/5"
        };
        hasPadding: boolean;
        objectFit: "contain" | "cover";
        imageText?: string;
    };
    redesigns?: RedesignItem[];
    personas?: {
        title: string;
        images: string[];
    };
}