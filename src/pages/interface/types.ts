export interface TypePerson {
    email: string;
    password: string;
}

// LanguageType
export interface LanguageType {
    id: number;
    title: string;
    url: string;
    sectionCount: number;
    problemCount: number;
    tryCount: number;
    solutionCount: number;
}


// localStorage
export interface GetLocalType {
    email: string;
    password: string;
} 

// warmup_props
export interface SectionType {
    description: string;
    id: number;
    methodSignature: string;
    section: string;
    title: string;
}

