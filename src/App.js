import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExpertisePage from './pages/ExpertisePage';
import TechnologiesPage from './pages/TechnologiesPage';
import OffshoreDeveloperPage from './pages/OffshoreDeveloperPage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/offshore-developer" element={<OffshoreDeveloperPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
