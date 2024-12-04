import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home.jsx';
import Frontend from './pages/Front.jsx';
import BackendDevelopment from './pages/Back.jsx';
import AutomationWithAI from "./pages/integracionIA.jsx" 

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/front" element={<Frontend />} />
          <Route path="/back" element={<BackendDevelopment />} />
          <Route path="/ia" element={<AutomationWithAI />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
