import Home from './Pages/Home';
import Detail from "./Pages/Detail";
import {Route,Routes} from "react-router-dom";

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
