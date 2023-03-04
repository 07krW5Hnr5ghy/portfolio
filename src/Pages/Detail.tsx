import slides from '../slides';
import {Link,useParams} from "react-router-dom";
import Nav from "../components/Nav";

const Detail = () => {
    const {id} = useParams();
    const slide = slides[Number(id)];
    const last = slide.stack.length-1;
    return(
        <div>
            <Nav/>
            <div className="detail-container">
                <h1 className="detail-title">{slide.title}</h1>
                <img src={slide.image} className="detail-image"/>
                <div className="detail-stack">
                    <span className="stack-open"> [</span>
                    {slide.stack.map((tech,index) => <span className={index !== last ? "detail-tech" : "detail-tech last" } key={index}>{tech}</span>)}
                    <span className="stack-close"> ]</span>
                </div>
                <div className="detail-description">
                    <p className="">{slide.description}</p>
                </div>
                <div className="detail-link">
                    <button type="button" className="detail-deploy">
                        <a target="_blank" rel='noreferrer' href={slide.link}>Visit the project</a>
                    </button>
                </div>
                <div className="detail-source">
                    {!slide.source ? null :  
                    <a href={slide.source} 
                    className="source-link"
                    target="_blank" 
                    rel='noreferrer'>
                        {`source code`}
                    </a>}
                    {!slide.frontend ? null : 
                    <a href={slide.frontend} 
                    className="source-link"
                    target="_blank" 
                    rel='noreferrer'>
                        {`source code frontend`}
                    </a>}
                    {!slide.backend ? null : 
                    <a href={slide.backend} 
                    className="source-link"
                    target="_blank" 
                    rel='noreferrer'>
                        {`source code backend`}
                    </a>}
                </div>
            </div>
            <div className='back-container'>
                <Link to="/">
                    <button className='back-button'>Back</button>
                </Link>
            </div>
        </div>
    );
}

export default Detail;