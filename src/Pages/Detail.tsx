import slides from '../slides';
import {useParams} from "react-router-dom";

const Detail = () => {
    const {id} = useParams();
    const slide = slides[Number(id)];
    return(
        <div className="detail-container">
            <h1 className="detail-title">{slide.title}</h1>
            <img src={slide.image} className="detail-image"/>
            <div className="detail-stack">
                {slide.stack.map(tech => <span className="detail-tech">{tech}</span>)}
            </div>
            <p></p>
            <div className="detail-link">
                {!slide.source ? null :  <a href={slide.source}>{`>> source code <<`}</a>}
                {!slide.frontend ? null : <a href={slide.frontend}>{`>> source code frontend <<`}</a>}
                {!slide.backend ? null : <a href={slide.backend}>{`>> source code backend <<`}</a>}
            </div>
        </div>
    );
}

export default Detail;