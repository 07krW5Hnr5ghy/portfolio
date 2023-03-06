import { useState } from "react";
import { useTranslation } from "react-i18next";
import {Link,useParams} from "react-router-dom";
import i18next from "i18next";

const languages = [
    {
        code: 'sp',
        name: 'Español',
        country_code: 'co'
    },
    {
        code: 'en',
        name: 'English',
        country_code: 'us'
    }
];



const Nav = () => {
    const {id} = useParams();
    const {t} = useTranslation();
    const [lang,setLang] = useState<boolean>(true);
    const handleLang = (value:boolean) => {
        setLang(value);
        if(value === true) i18next.changeLanguage('en');
        if(value === false) i18next.changeLanguage('sp'); 
    }
    return(
        <section className="top-nav">
            <div className="nav-home">
                {!id ?
                <a className="home-link" href="#main">{t('navbar_header')}</a> : 
                <Link className="home-link" to="/">Home</Link>}
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <ul className="menu">
                <li className="menu-link"><a href="#link-about">about</a></li>
                <li className="menu-link"><a href="#link-tech">technologies</a></li>
                <li className="menu-link"><a href="#link-projects">projects</a></li>
                <li className="menu-link"><a href="#link-contact">contact</a></li>
                <li className="switch-container">
                    <label className="switch">
                        <input type="checkbox" className="lang" onChange={() => handleLang(!lang)}/>
                        <span className="slider round"></span>
                    </label>
                    <span className="lang-show">{!lang ? "ES" : "EN"}</span>
                </li>
            </ul>
        </section>
    )
}

export default Nav;