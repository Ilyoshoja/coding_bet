export interface LanguageType {
    id: number;
    title: string;
    url: string;
    sectionCount: number;
    problemCount: number;
    tryCount: number;
    solutionCount: number;
}

export interface GetLocalType {
    email: string;
    password: string;
} 