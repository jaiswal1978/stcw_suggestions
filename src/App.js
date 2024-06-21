import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import ResponseForm from './Components/ResponseForm';
import Footer from './Components/Footer';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/response-form" element={<ResponseForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
