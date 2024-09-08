import React from "react";
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx';
import ProjectsLst from './components/projectsList/PojectsList.jsx';
import Footer from './components/footer/Footer';
import BackgroundAnimation from './components/ui/bg-animation/BackgroundAnimation';

function App() {

  return (
    <React.StrictMode>
      <BackgroundAnimation />
      <About />
      <Skills />
      <ProjectsLst />
      <Footer />
    </React.StrictMode>
  );
}

export default App;
