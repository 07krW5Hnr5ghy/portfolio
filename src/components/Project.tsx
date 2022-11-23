import {Slide} from '../interfaces';

const Project = ({title,image} : Slide) => {
    return(
        <div>
            <h3>{title}</h3>
            <img src={image} alt=""/>
        </div>
    );
};

export default Project;