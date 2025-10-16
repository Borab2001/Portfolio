export interface Project {
    id: string;
    navTitle: string;
    title: string;
    subtitle: string;
    coverImage: string;
    links: {
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
        columns: 1 | 2 | 3; // Colonnes pour md:
        maxHeightMobile: 360 | 480; // Max height en mobile (px)
        aspectRatio: {
            mobile: string; // ex: "4/3"
            md: string; // ex: "5/5"
            lg: string; // ex: "6/5"
        };
        hasPadding: boolean; // Si le container a du padding
        objectFit: "contain" | "cover"; // object-contain ou object-cover
        imageText?: string; // Texte optionnel sous les images
    };
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