import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';

function App() {
  return (
    <div id="Main_container">
      <nav>navbar</nav>
      <main>
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
