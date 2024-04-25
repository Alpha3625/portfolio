import React from "react";
import About from './templates/about/About.jsx';
import Projects from './templates/projects/Projects';
import Footer from './components/footer/Footer';
import BackgroundAnimation from './components/bg-animation/BackgroundAnimation';

function App() {
  return (
    <div className="page">
      <React.Fragment>
          <About />
          <Projects />
          <Footer />
          <BackgroundAnimation />
      </React.Fragment>
    </div>
  );
}

export default App;
