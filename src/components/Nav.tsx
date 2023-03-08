import { useState } from "react";
import { useTranslation } from "react-i18next";
import {Link,useParams} from "react-router-dom";
import i18next from "i18next";
import {Home} from "@mui/icons-material";

const Nav = () => {
    const {id} = useParams();
    const {t} = useTranslation();

    const [lang,setLang] = useState<boolean>(true);

    /* switch website language using lang state */
    const handleLang = (value:boolean) => {
        setLang(value);
        if(value === true) i18next.changeLanguage('en');
        if(value === false) i18next.changeLanguage('sp'); 
    }

    return(
        <section className="top-nav">
            <div className="nav-home">
                {/* change main navbar link according 
                with the section of the site */}
                {!id ?
                <a className="home-link" href="#main">{t('navbar_header')}</a> : 
                <Link className="home-link" to="/"><Home fontSize="large"/></Link>}
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <ul className="menu">
                <li className="menu-link"><a href="#link-about">{t('about_link')}</a></li>
                <li className="menu-link"><a href="#link-tech">{t('technologies_link')}</a></li>
                <li className="menu-link"><a href="#link-projects">{t('projects_link')}</a></li>
                <li className="menu-link"><a href="#link-contact">{t('contact_link')}</a></li>
                {/* language switch */}
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