import React from 'react';
import NavigationBar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => (
  <div>
    <NavigationBar />
    <HeroSection />
    <About />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
  </div>
);

export default App;
