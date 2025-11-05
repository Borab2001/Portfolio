export interface RedesignItem {
    subtitle: string;
    context: {
        title: string;
        description: string[];
    }
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
    context: {
        title: string;
        description: string[];
    }
    mockupImages: string[][];
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
    competitorAnalysis?: {
        title: string;
        description: string[];
    };
    marketResearch?: {
        title: string;
        description: string[];
    };
    personas?: {
        title: string;
        images: string[];
    };
}