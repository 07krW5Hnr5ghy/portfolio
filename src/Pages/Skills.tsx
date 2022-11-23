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
                <img src={Logohtml} alt="html" width={100} height={100}/> 
                <img src={Logocss} alt="css" width={100} height={100}/> 
                <img src={Logojs} alt="js" width={100} height={100}/>
                <img src={LogoNode} alt="node" width={100} height={100}/>
                <img src={LogoReact} alt="react" width={100} height={100}/>
                <img src={LogoExpress} alt="express" width={100} height={100}/>
                <img src={LogoPostgres} alt="postgress" width={100} height={100}/>
            </div>
        </div>
    )
}

export default Skills;