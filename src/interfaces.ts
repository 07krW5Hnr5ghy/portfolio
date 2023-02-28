export interface Slide{
    id:number,
    title:string;
    image:string;
    stack:string[];
    description:string;
    link:string;
    source?:string;
    frontend?:string;
    backend?:string;
}