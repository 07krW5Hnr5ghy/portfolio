import {Slide} from '../interfaces';

const Project = ({title,image,link,source,frontend,backend} : Slide) => {
    return(
        <div className="project-card">
            <img src={image} alt="" loading='lazy' className="project-picture"/>
            <h3>{title}</h3>
            <div className="card-overlay"></div>
        </div>
    );
};

export default Project;