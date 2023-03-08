import {Slide} from '../interfaces';

/* card showing the projects */
const Project = ({title,image} : Slide) => {
    return(
        <div className="project-card">
            <img src={image} alt="" loading='lazy' className="project-picture"/>
            <h3>{title}</h3>
            <div className="card-overlay"></div>
        </div>
    );
};

export default Project;