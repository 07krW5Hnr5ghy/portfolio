import {Slide} from '../interfaces';

const Project = ({title,image,link,source,frontend,backend} : Slide) => {
    return(
        <div className="project-card">
            <img src={image} alt="" loading='lazy' className="project-picture"/>
            <h3>{title}</h3>
            {/* <img src={image} alt="" loading='lazy'/>
            <a href={link}>{`>> Check it out here <<`}</a>
            {!source ? null :  <a href={source}>{`>> source code <<`}</a>}
            {!frontend ? null : <a href={frontend}>{`>> source code frontend <<`}</a>}
            {!backend ? null : <a href={backend}>{`>> source code backend <<`}</a>} */}
        </div>
    );
};

export default Project;