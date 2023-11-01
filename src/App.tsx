import Home from './Pages/Home';
import Detail from "./Pages/Detail";
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';

function App() {
  /* frontend routing */
  const [eng, setEng] = useState<boolean>(false);
  return (
    <Routes>
      <Route path="/" element={<Home eng={eng} setEng={setEng} />} />
      <Route path="/project/:id" element={<Detail eng={eng} setEng={setEng} />} />
      <Route path="*" element={<Home eng={eng} setEng={setEng} />} />
    </Routes>
  );
}

export default App;
