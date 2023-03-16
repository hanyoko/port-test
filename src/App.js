import logo from './logo.svg';
import './App.css';
import "./reset.css";
import "./style.css";
import NavBar from './components/Header/NavBar';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import PreLoader from './components/PreLoader';
import Skillset from './pages/Skillset';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <PreLoader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/home"  element={<Home />} />
          <Route path="/skillset" element={<Skillset />} />
          <Route path="/projects"  element={<Projects />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>

    
  );
}

export default App;
