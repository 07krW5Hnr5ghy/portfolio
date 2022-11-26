import {Slide} from '../interfaces';

const Project = ({title,image} : Slide) => {
    return(
        <div>
            <h3>{title}</h3>
            <img src={image} alt="" width={400} height={200}/>
        </div>
    );
};

export default Project;