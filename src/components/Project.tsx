import {Slide} from '../interfaces';

const Project = ({title,image,link} : Slide) => {
    return(
        <div id="Project_container">
            <h3>{title}</h3>
            <img src={image} alt="" loading='lazy'/>
            <a href={link}>{`>> Check it out here <<`}</a>
        </div>
    );
};

export default Project;