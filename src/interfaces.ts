/* interface for slide containing project */
export interface Slide {
    id: number,
    title: string;
    image: string;
    stack: string[];
    description_en: string;
    description_es: string;
    link: string;
    source?: string;
    frontend?: string;
    backend?: string;
}

export interface EngProps {
    eng: boolean;
    setEng: React.Dispatch<React.SetStateAction<boolean>>;
}