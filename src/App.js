import React from 'react';
import Navbar from './components/js/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/AboutMe';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Achievements from './components/pages/Achievements';
import ContactMe from './components/pages/ContactMe';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' exact Component={Home}/>
      <Route path='/about' exact Component={About} />
      <Route path='/skills' exact Component={Skills} />
      <Route path ='/projects' exact Component={Projects} />
      <Route path ='/achievements' exact Component={Achievements} />
      <Route path = '/contact' exact Component={ContactMe} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
