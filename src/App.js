import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/js/Navbar';
import Home from './components/js/Home';
import About from './components/js/About';
import Skills from './components/js/Skills';
import Projects from './components/js/Projects';
import ContactMe from './components/js/ContactMe';
import Footer from './components/js/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/skills' Component={Skills} />
          <Route path='/projects' Component={Projects} />
          <Route path='/contact' Component={ContactMe} />
        </Routes>
      </div>
      <Footer />      
    </Router>
  );
}

export default App;