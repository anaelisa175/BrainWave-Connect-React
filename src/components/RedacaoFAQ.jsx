import React, { useState } from "react";
import "./RedacaoFAQ.css";

const faqs = [
  {
    pergunta: "Como estruturar uma redação dissertativa?",
    resposta: "Uma redação dissertativa deve conter introdução, desenvolvimento e conclusão. Na introdução, apresente o tema e sua tese (ponto de vista); no desenvolvimento, apresente 2-3 argumentos com exemplos concretos; e na conclusão, retome sua tese e proponha uma solução ou reflexão sobre o tema."
  },
  {
    pergunta: "O que é uma tese na redação?",
    resposta: "A tese é a ideia principal que será defendida ao longo do texto. Ela deve ser clara, objetiva e aparecer logo na introdução. Uma boa tese apresenta seu posicionamento sobre o tema e dá direcionamento para toda a argumentação que virá no desenvolvimento."
  },
  {
    pergunta: "Como evitar o uso de clichês?",
    resposta: "Para evitar clichês, procure sempre trazer argumentos originais e exemplos atuais. Leia bastante sobre diversos assuntos, fique atento a notícias recentes, pesquise dados estatísticos e referências culturais menos óbvias. Revise seu texto várias vezes para identificar e substituir frases feitas por formulações mais originais."
  },
  {
    pergunta: "Qual a importância do repertório sociocultural?",
    resposta: "O repertório sociocultural enriquece sua redação ao trazer referências de filmes, livros, fatos históricos, conceitos filosóficos ou sociológicos que se relacionam com o tema. Isso demonstra conhecimento amplo e dá maior credibilidade aos seus argumentos, além de mostrar capacidade de fazer conexões entre diferentes áreas do conhecimento."
  },
  {
    pergunta: "Como garantir coesão e coerência no texto?",
    resposta: "Para garantir coesão, utilize conectivos adequados entre frases e parágrafos (portanto, contudo, além disso). Para a coerência, mantenha uma linha de raciocínio clara, evite contradições e certifique-se de que todos os argumentos estão relacionados à sua tese central. Organize suas ideias em uma sequência lógica e revise o texto para verificar se há fluidez na leitura."
  }
];

export default function RedacaoFAQ() {
  const [aberta, setAberta] = useState(null);

  const toggleFAQ = (index) => {
    setAberta(aberta === index ? null : index);
  };
  
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      // Calculando a posição para garantir que toda a seção de contato seja visível
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const headerHeight = 100; // Altura aproximada do header fixo com margem extra
      
      // Seleciona a seção inteira, não apenas o formulário
      const rect = contactSection.getBoundingClientRect();
      const targetPosition = scrollTop + rect.top - headerHeight + 10; // Ajustado para descer o card um pouco
      
      // Rolando para a posição calculada
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Dando foco ao primeiro campo do formulário após a rolagem
      setTimeout(() => {
        const firstInput = contactSection.querySelector('input');
        if (firstInput) firstInput.focus();
      }, 800);
    }
  };

  return (
    <section className="content-section">
      <div className="container">
        <br></br>
        <h2>Dúvidas Frequentes sobre Redação</h2>
        
        
        <div className="faq-container">
          {faqs.map((faq, idx) => (
            <div
              className={`redacao-item${aberta === idx ? " aberta" : ""}`}
              key={idx}
              onClick={() => toggleFAQ(idx)}
              role="button"
              aria-expanded={aberta === idx}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleFAQ(idx);
                }
              }}
            >
              <div className="redacao-header">
                <h3>{faq.pergunta}</h3>
                <span className={`arrow${aberta === idx ? " rotate" : ""}`}>▼</span>
              </div>
              <div 
                className={`redacao-content${aberta === idx ? " visible" : ""}`}
                aria-hidden={aberta !== idx}
              >
                <p>{faq.resposta}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="faq-button-container">
          <a href="#" className="btn-redacao" onClick={scrollToContact}>Fale Conosco</a>
        </div>
      </div>
    </section>
  );
}