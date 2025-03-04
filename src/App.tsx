import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import Frontend from "./pages/Front.jsx";
import BackendDevelopment from "./pages/Back.jsx";
import AutomationWithAI from "./pages/integracionIA.jsx";
import MediaSection from "./pages/medios.jsx";
import UXUIGallery from "./components/uxui.js";

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
          <Route path="/audiovisual" element={<MediaSection />} />
          <Route path="/ux-ui" element={<UXUIGallery />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
