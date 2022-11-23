import {useState} from 'react';
import Project from '../components/Project';
import slides from '../slides';

const Projects = () => {
    const [page,setPage] = useState<number>(0);
    const next = () => {
        setPage(page + 1);
    };
    const previous = () => {
        setPage(page - 1);
    };
    return(
        <div id="Projects_container">
            <h1>Projects</h1>
            <div>
                {page === slides.length - 1 ? null : <button value={`>`} onClick={next} />}
                <Project {...slides[page]}/>
                {!page ? null : <button onClick={previous} value={`<`}/>}
            </div>
        </div>
    )
    
}

export default Projects;