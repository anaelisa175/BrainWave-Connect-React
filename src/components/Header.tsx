"use client";

import React, { useEffect, useRef, useState } from "react";
import "./Header.css";

export default function Header() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const [title, setTitle] = useState("BrainWave Connect");
  
  useEffect(() => {
    // Função para garantir que o texto seja "BrainWave Connect"
    const fixText = () => {
      if (h1Ref.current && h1Ref.current.textContent !== "BrainWave Connect") {
        h1Ref.current.textContent = "BrainWave Connect";
      }
    };

    // Aplicar imediatamente
    fixText();
    
    // Aplicar após um pequeno atraso para garantir
    const timer1 = setTimeout(fixText, 100);
    const timer2 = setTimeout(fixText, 500);
    const timer3 = setTimeout(fixText, 1000);
    
    // Observar mudanças no DOM
    if (h1Ref.current) {
      const observer = new MutationObserver(fixText);
      
      observer.observe(h1Ref.current, { 
        childList: true, 
        characterData: true, 
        subtree: true 
      });
      
      // Garantir que o h1 não possa ser alterado por CSS
      const style = document.createElement('style');
      style.textContent = `
        .header .header-container .logo-titulo h1::before,
        .header .header-container .logo-titulo h1::after {
          content: none !important;
          display: none !important;
        }
      `;
      document.head.appendChild(style);
      
      // Limpar
      return () => {
        observer.disconnect();
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        document.head.removeChild(style);
      };
    }
  }, []);
  
  
  return (
    <header className="header" id="mainHeader">
      <div className="header-container">
        <div className="logo-titulo">
          <img src="/imagens/logo_branca - Copia.jpg" alt="Logo" className="logo" />
          <h1 ref={h1Ref} style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '26px', color: '#071D3B', margin: 0 }}>{title}</h1>
        </div>
        <nav className="menu">
          <a href="#">Sobre</a>
          <a href="#">Recursos</a>
          <a href="#">Fóruns</a>
          <a href="#">Jogos</a>
          <a href="#">Contato</a>
        </nav>
        <div className="auth-buttons">
          <button className="auth-btn">Conecte-se</button>
          <button className="auth-btn">Cadastrar</button>
        </div>
      </div>
    </header>
  );
}
