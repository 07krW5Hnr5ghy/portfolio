import slides from '../slides';
import Project from '../components/Project';
import Contact from './Contact';
import Logohtml from '../assets/html-5.svg';
import Logocss from '../assets/css-3.svg';
import Logojs from '../assets/logo-javascript.svg';
import LogoNode from '../assets/nodejs-icon.svg';
import LogoReact from '../assets/react-2.svg';
import LogoExpress from '../assets/express.svg';
import LogoPostgres from '../assets/postgresql.svg';
import LogoSass from '../assets/sass.svg';
import LogoRedux from '../assets/redux.svg';
import LogoTypescript from "../assets/typescript.svg";
import LogoJava from "../assets/java.svg";
import LogoSpringBoot from "../assets/spring.svg";
import { Link } from "react-router-dom";
import { Download } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import Nav from "../components/Nav";
import { EngProps } from '../interfaces';



const Home = ({ eng, setEng }: EngProps) => {
  const { t } = useTranslation();

  /* donwload pdf with resume */
  const downloadCV = () => {
    fetch(eng ? 'Juan_Pablo_Romero_Poveda_CV_EN.pdf' : 'Juan_Pablo_Romero_Poveda_CV.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let aLink = document.createElement('a');
        aLink.href = fileURL;
        aLink.download = 'cv.pdf';
        aLink.click();
      })
    })
  }

  return (
    <div className="main" id="main">
      <Nav eng={eng} setEng={setEng} />
      <div className="about section" id="link-about">
        {/* photo and headline */}
        <header className="header">
          <img src={'https://res.cloudinary.com/dqzvbdf9r/image/upload/v1737757507/portfolio/profile_xte9qn.png'} alt="" className="photo" />
          <h1>Juan Pablo Romero</h1>
          <h2>{t('headline')}</h2>
        </header>
        {/* about me description */}
        <article className="about-me">
          <p className="description">
            {t('description_1')}
            <br />
            <br />
            {t('description_2')}
            <br />
            <br />
            {t('description_3')}
          </p>
          {/* button for download resume */}
          <button className="download" onClick={downloadCV}>
            CV <Download fontSize="large" />
          </button>
        </article>
      </div>
      {/* skills section */}
      <div className="technologies section" id="link-tech">
        <h2 className="icons-title">{t('technologies')}</h2>
        <div className="icons-container">
          <img src={Logohtml} alt="html" loading='lazy' className="icon" />
          <img src={Logocss} alt="css" loading='lazy' className="icon" />
          <img src={Logojs} alt="js" loading='lazy' className="icon" />
          <img src={LogoNode} alt="node" loading='lazy' className="icon" />
          <img src={LogoReact} alt="react" loading='lazy' className="icon" />
          <img src={LogoExpress} alt="express" loading='lazy' className="icon" />
          <img src={LogoPostgres} alt="postgress" loading='lazy' className="icon" />
          <img src={LogoSass} alt="sass" loading='lazy' className="icon" />
          <img src={LogoRedux} alt="redux" loading='lazy' className="icon" />
          <img src={LogoTypescript} alt="typescript" loading="lazy" className="icon" />
          <img src={LogoJava} alt="java" loading="lazy" className="icon" />
          <img src={LogoSpringBoot} alt="spring boot" loading="lazy" className="icon" />
        </div>
      </div>
      {/* projects section */}
      <div className="projects section" id="link-projects">
        <h2 className="projects-title">{t('projects')}</h2>
        <div className="projects-container">
          {slides.map((slide, index) => <Link className="projects-link" to={`/project/${slide.id}`}>
            <Project {...slide} key={index} />
          </Link>)}
        </div>
      </div>
      {/* contact section */}
      <div className="contact section" id="link-contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;