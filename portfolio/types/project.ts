export interface Project {
    id: string;
    title: string;
    subtitle: string;
    link: string;
    link2?: string;
    linkType: string;
    description: string[];
    mockupImages: string[][];
    competitorAnalysis?: {
        title: string;
        description: string[];
    };
    personas?: {
        title: string;
        images: string[];
    };
}