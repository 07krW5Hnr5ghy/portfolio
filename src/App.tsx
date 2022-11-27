import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="grid">
      <aside className="grid__sidebar">
        <div className='grid__widget grid__head'>
          <section id="home">
            <Home/>
          </section>
        </div>
        <div className='grid__widget'>
          <section id="about">
            <About/>
          </section>
        </div>
        <div className='grid__widget'>
          <section id="skills">
           <Skills/>
          </section>
        </div>
      </aside>
      <main className='grid__main'>
        <section id="projects">
          <Projects/>
        </section>
        <section id="contact">
          <Contact/>
        </section>
      </main>
    </div>
  );
}

export default App;
