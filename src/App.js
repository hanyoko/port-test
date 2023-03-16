import logo from './logo.svg';
import './App.css';
import "./reset.css";
import "./style.css";
import NavBar from './components/Header/NavBar';
import Home from './pages/Home';
import { useState } from 'react';
import PreLoader from './components/PreLoader';

function App() {
  const [load, upadateLoad] = useState(true);

  return (
    <div className="App">
      <PreLoader load={load} />
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
