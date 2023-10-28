import React from 'react';
import Navbar from './components/js/pages/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/js/pages/Home';
import About from './components/js/pages/AboutMe';
import Skills from './components/js/pages/Skills';
import Projects from './components/js/pages/Projects';
import ContactMe from './components/js/pages/ContactMe';

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
      <Route path = '/contact' exact Component={ContactMe} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
