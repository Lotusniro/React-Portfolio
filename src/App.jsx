
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/pages/Header/Header';
import Home from './components/pages/Home/Home';
import Contact from './components/pages/Contact/Contact';

import ProjectGallery from './components/pages/ProjectGallery/ProjectGallery';
import Footer from './components/pages/Footer/Footer';








function App() {
return (
  <Router basename="/React-Portfolio">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projectgallery" element={<ProjectGallery />} />
    </Routes>
    <Footer />
  </Router>
   
  )
}

export default App
