export interface WarmupType {
    "id": number;
    "title": string;
    "description": string;
    "methodSignature": string;
    "section": string;
    "cases": [
        {
            "id": string;
            "args": string;
            "expected": string;
            "visible": boolean;
            "problem": number;
            "ordIndex": number;
        }
    ]
}