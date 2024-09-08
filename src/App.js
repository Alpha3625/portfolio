import React, {useState, useEffect} from "react";
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx';
import ProjectsLst from './components/projectsList/PojectsList.jsx';
import Footer from './components/footer/Footer';
import BackgroundAnimation from './components/ui/bg-animation/BackgroundAnimation';
import data from './database/projects.json';

function App() {
  // const [posts, setPosts] = useState([]);
  // const [query, setQuery] = useState(false);
  // const [page, setPage] = useState(1);
  // const [pageQty, setPageQty] = useState(0);

  // useEffect(() => {
  //   const getCountries = async () => {
  //     const res = data
  //   };
  // }, [query, page]);

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
