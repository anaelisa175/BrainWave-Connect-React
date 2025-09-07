import React, { useEffect } from "react";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import ThemeList from "./components/ThemeList";
import RedacaoFAQ from "./components/RedacaoFAQ";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import "./global.css"; // Importa novamente para garantir prioridade

function App() {
  useEffect(() => {
    // Função para garantir que o texto do h1 seja "BrainWave Connect"
    const enforceHeaderTitle = () => {
      const headerH1 = document.querySelector('.header .header-container .logo-titulo h1');
      if (headerH1 && headerH1.textContent !== "BrainWave Connect") {
        headerH1.textContent = "BrainWave Connect";
      }
    };

    // Aplicar imediatamente
    enforceHeaderTitle();
    
    // Aplicar em intervalos regulares
    const interval = setInterval(enforceHeaderTitle, 100);
    
    // Adicionar estilo de emergência
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
    <div>
      <Header />
      <SearchSection />
      <div className="background-continuity">
        <ThemeList />
        <RedacaoFAQ />
        <ContactSection />
      </div>
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;