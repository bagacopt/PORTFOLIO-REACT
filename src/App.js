import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/js/pages/Navbar';
import Footer from './components/js/pages/Footer';
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
      <Footer />
    </Router>
    </>
  );
}

export default App;