export interface Project {
    id: string;
    title: string;
    subtitle: string;
    links: {
        [key: string]: {
            url: string;
            type: string;
        };
    };
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