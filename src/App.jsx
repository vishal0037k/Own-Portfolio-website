import React from 'react';
import './App.css';
import Navbar from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Projects from './Components/Projects/Project';
import Footer from './Components/Footer/Footer';
import Arrow from './Components/Arrow/Arrow';
function App() {
 return (
    <>
<div className='bg'>
      <Navbar />
<div>
<section id="home" className="home-section">
                <Home />
</section>

<section id="about" className='about-section'>
                  <About />
</section>
                
<section id="projects" className='projects-section'>
                  <Projects />
</section>

<section id="skills"  className="skills-section">
                  <Skills />
</section>

<section id="contact" className='contact-section'>
                  <Contact />
</section>
            
<Arrow />

<Footer />
          </div>
</div>
    </>
  )
}
export default App;

