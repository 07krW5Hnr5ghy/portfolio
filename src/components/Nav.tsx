import {Link,useParams} from "react-router-dom";

const Nav = () => {
    const {id} = useParams();
    return(
        <section className="top-nav">
            <div className="nav-home">
                {!id ?
                <a href="#main">Top</a> : 
                <Link to="/">Home</Link>}
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <ul className="menu">
                <li><a href="#link-about">about</a></li>
                <li><a href="#link-tech">technologies</a></li>
                <li><a href="#link-projects">projects</a></li>
                <li><a href="#link-contact">contact</a></li>
            </ul>
        </section>
    )
}

export default Nav;