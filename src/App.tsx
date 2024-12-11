import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from './components/Header';
import Lab1 from './pages/Lab1';
import Footer from './components/Footer';
import Home from './components/Home';
import './App.css';
import Lab2 from './pages/Lab2';
import HyperbolaSimplifier from './pages/Lab3';
import TrianglePattern from './pages/Lab4';
import BezierCurve from './pages/Lab5';
import Laba6 from './pages/Lab6';
import Laba7 from './pages/Laba7';

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Router>
        <Header />
        <main className="flex-grow h-max ">
          <Routes>
            <Route path="/lab1" element={<Lab1 />} />
            <Route path="/lab2" element={<Lab2 />} />
            <Route path="/lab3" element={<HyperbolaSimplifier />} />
            <Route path="/lab4" element={<TrianglePattern />} />
            <Route path="/lab5" element={<BezierCurve />} />
            <Route path="/lab6" element={<Laba6 />} />
            <Route path="/lab7" element={<Laba7 />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
