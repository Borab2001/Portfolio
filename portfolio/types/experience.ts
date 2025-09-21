export interface Experience {
    title: string;
    type: 'Freelance' | 'Internship' | 'Full-time';
    company: string;
    date: string;
    description: string;
    stack?: string;
    ux_process?: string;
    referenceLetter?: string;
}
