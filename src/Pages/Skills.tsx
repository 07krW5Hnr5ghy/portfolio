import Logohtml from '../assets/html-5.svg';
import Logocss from '../assets/css-3.svg';
import Logojs from '../assets/logo-javascript.svg';
import LogoNode from '../assets/nodejs-icon.svg';
import LogoReact from '../assets/react-2.svg';
import LogoExpress from '../assets/express.svg';
import LogoPostgres from '../assets/postgresql.svg';
import LogoSass from '../assets/sass.svg';
import LogoRedux from '../assets/redux.svg';

const Skills = () => {
    return(
        <div id="Skills_container">
            <h1>Skills</h1>
            <div id="Techs_container">
                <img src={Logohtml} alt="html" loading='lazy' /> 
                <img src={Logocss} alt="css" loading='lazy'/> 
                <img src={Logojs} alt="js" loading='lazy'/>
                <img src={LogoNode} alt="node" loading='lazy'/>
                <img src={LogoReact} alt="react" loading='lazy'/>
                <img src={LogoExpress} alt="express" loading='lazy'/>
                <img src={LogoPostgres} alt="postgress" loading='lazy'/>
                <img src={LogoSass} alt="sass" loading='lazy'/>
                <img src={LogoRedux} alt="redux" loading='lazy'/>
            </div>
        </div>
    )
}

export default Skills;