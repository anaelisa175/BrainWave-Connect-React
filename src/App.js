import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import ThemeList from "./components/ThemeList";
import RedacaoFAQ from "./components/RedacaoFAQ";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ArtigoPremium from "./components/ArtigoPremium";
import "./global.css";

// Componente para scroll ao topo em mudanças de rota
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  useEffect(() => {
    // ...existing code...
    const enforceHeaderTitle = () => {
      const headerH1 = document.querySelector('.header .header-container .logo-titulo h1');
      if (headerH1 && headerH1.textContent !== "BrainWave Connect") {
        headerH1.textContent = "BrainWave Connect";
      }
    };
    enforceHeaderTitle();
    const interval = setInterval(enforceHeaderTitle, 100);
    const style = document.createElement('style');
    style.innerHTML = `
      .header .header-container .logo-titulo h1::before,
      .header .header-container .logo-titulo h1::after {
        content: none !important;
        display: none !important;
      }
      .header .header-container .logo-titulo h1 {
        content: "BrainWave Connect" !important;
        font-family: 'Montserrat', sans-serif !important;
        font-size: 26px !important;
        color: #071D3B !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      clearInterval(interval);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <SearchSection />
              <div className="background-continuity">
                <ThemeList />
                <RedacaoFAQ />
                <ContactSection />
              </div>
              <BackToTop />
              <Footer />
            </>
          }
        />
        <Route path="/artigo-premium" element={<ArtigoPremium />} />
      </Routes>
    </Router>
  );
}

export default App;