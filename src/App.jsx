import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackgroundAnimation from './components/ui/Bg-animation/BackgroundAnimation.jsx';
import Header from './components/Header/Header.jsx';
import Home from "./pages/Home/Home.jsx";
import Projects from "./pages/Projects/Pojects.jsx";
import Contacts from './pages/Contacts/Contacts.jsx';

function App() {
  return (
    <BrowserRouter>
      <BackgroundAnimation />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;