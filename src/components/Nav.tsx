import {Link,useParams} from "react-router-dom";

const Nav = () => {
    const {id} = useParams();
    return(
        <section className="top-nav">
            <div className="nav-home">
                {!id ?
                <a href=".about">Top</a> : 
                <Link to="/">Home</Link>}
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <ul className="menu">
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
                <li>Five</li>
            </ul>
        </section>
    )
}

export default Nav;