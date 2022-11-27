import Logohtml from '../assets/html-5.svg';
import Logocss from '../assets/css-3.svg';
import Logojs from '../assets/logo-javascript.svg';
import LogoNode from '../assets/nodejs-icon.svg';
import LogoReact from '../assets/react-2.svg';
import LogoExpress from '../assets/express.png';
import LogoPostgres from '../assets/postgresql.svg';

const Skills = () => {
    return(
        <div id="Skills_container">
            <h1>Skills</h1>
            <div id="Techs_container">
                <img src={Logohtml} alt="html" /> 
                <img src={Logocss} alt="css" /> 
                <img src={Logojs} alt="js" />
                <img src={LogoNode} alt="node" />
                <img src={LogoReact} alt="react" />
                <img src={LogoExpress} alt="express" />
                <img src={LogoPostgres} alt="postgress" />
            </div>
        </div>
    )
}

export default Skills;