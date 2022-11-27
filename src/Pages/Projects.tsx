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
            <div id="Projects_slider">
                <Project {...slides[page]}/>
                <div id="Buttons_container">
                    {page === slides.length - 1 ? null : <div className='Buttons_slider' onClick={next} >{"next >>"}</div>}
                    {!page ? null : <div className='Buttons_slider' onClick={previous}>{"<< previous"}</div>}
                </div>
            </div>
        </div>
    )
    
}

export default Projects;