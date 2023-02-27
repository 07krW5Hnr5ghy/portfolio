import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import Project from './components/Project';
import slides from './slides';
import photo from './assets/profile.png';
import Logohtml from './assets/html-5.svg';
import Logocss from './assets/css-3.svg';
import Logojs from './assets/logo-javascript.svg';
import LogoNode from './assets/nodejs-icon.svg';
import LogoReact from './assets/react-2.svg';
import LogoExpress from './assets/express.svg';
import LogoPostgres from './assets/postgresql.svg';
import LogoSass from './assets/sass.svg';
import LogoRedux from './assets/redux.svg';

function App() {
  return (
    <div className="main">
      <div className="about section">
        <header className="header">
          <img src={photo} alt="" className="photo"/>
          <h1>Juan Pablo Romero</h1>
          <h2>Fullstack Web Developer</h2>
        </header>
        <article className="about-me">
          <p>
            Help-desk agent with 3 years and 9 months of work experience in Point of Sale systems support.
            <br/>
            <br/>
            I am interested in the technologies currently used on the internet, and their inner workings.
            <br/>
            <br/>
            Now, I am improving my technological skills, and learning new technologies to further my career and projects.
          </p>
        </article>
      </div>
      <div className="technologies section">
        <h2>Technologies</h2>
        <div className="icons-container">
          <img src={Logohtml} alt="html" loading='lazy' className="icon"/> 
          <img src={Logocss} alt="css" loading='lazy' className="icon"/> 
          <img src={Logojs} alt="js" loading='lazy' className="icon"/>
          <img src={LogoNode} alt="node" loading='lazy' className="icon"/>
          <img src={LogoReact} alt="react" loading='lazy' className="icon"/>
          <img src={LogoExpress} alt="express" loading='lazy' className="icon"/>
          <img src={LogoPostgres} alt="postgress" loading='lazy' className="icon"/>
          <img src={LogoSass} alt="sass" loading='lazy' className="icon"/>
          <img src={LogoRedux} alt="redux" loading='lazy' className="icon"/>
        </div>
      </div>
      <div className="projects section">
        <h2>Projects</h2>
        <div className="projects-container">
          {slides.map(slide => <Project {...slide}/>)}
        </div>
      </div>
      <div className="cv section"></div>
      <div className="contact section"></div>
    </div>
  );
}

export default App;
