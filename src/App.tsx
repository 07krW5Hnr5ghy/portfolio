import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import Project from './components/Project';
import Detail from "./Pages/Detail";
import {Route,Routes} from "react-router-dom";
import slides from './slides';
import { Slide } from './interfaces';

function App() {
  return (
    <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/project/:id" element={<Detail/>}/>
            <Route path="*" element={<Home/>}/>
    </Routes>
  );
}

export default App;
