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
        <nav>nav</nav>
      </aside>
      <main className='grid__main'>
        <section id="home">
          <Home/>
        </section>
        <section id="about">
          <About/>
        </section>
        <section id="skills">
          <Skills/>
        </section>
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
