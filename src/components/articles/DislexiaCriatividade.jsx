import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import QuizDislexiaCriatividade from "../quiz/QuizDislexiaCriatividade";
import ShareModal from "../ui/ShareModal";
import ArtigosSugeridos from "../ui/ArtigosSugeridos";

export default function DislexiaCriatividade() {
  const [shareModalOpen, setShareModalOpen] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const openShareModal = () => setShareModalOpen(true);
  const closeShareModal = () => setShareModalOpen(false);

  return (
    <>
      <Header />
      <main className="artigo-main">
        <section className="hero" id="heroSection">
          <img src="/imagens/img15.jpg" alt="Dislexia e criatividade" className="hero-bg" loading="lazy" />
          
          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">Dislexia e Criatividade: Uma Força Poderosa</h1>
            
            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>setembro 22, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>Pensamento Inovador</span>
              </div>
            </div>
            
            <button 
              className="scroll-down artigo-seta-flutuante"
              style={{
                position: 'absolute',
                bottom: '-1rem',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                zIndex: 3
              }}
              onClick={() => {
                const articleStart = document.getElementById('articleStart');
                if (articleStart) {
                  articleStart.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              aria-label="Rolar para o conteúdo do artigo"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </button>
          </div>
        </section>
        
        <main className="main-content" id="articleStart">
          <div className="breadcrumb">
            <a href="#">Início</a>
            <span className="divider">/</span>
            <a href="#">Artigos</a>
            <span className="divider">/</span>
            <span>Dislexia e Criatividade: Uma Força Poderosa</span>
          </div>
          
          <article className="article-content">
            <p>A dislexia é frequentemente vista através da lente de suas dificuldades - desafios com leitura, escrita e processamento de linguagem. Mas essa perspectiva limitada obscurece uma verdade extraordinária: pessoas com dislexia possuem formas únicas de pensamento que têm impulsionado algumas das maiores inovações da humanidade. Longe de ser apenas uma "dificuldade de aprendizagem", a dislexia representa um estilo cognitivo diferente que, quando compreendido e apoiado, pode ser uma fonte poderosa de criatividade e inovação.</p>
            
            <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Arte e criatividade" className="animate__animated" id="articleImage1" loading="lazy" />
            
            <p>O cérebro disléxico processa informações de forma fundamentalmente diferente, favorecendo o pensamento visuoespacial, holístico e tridimensional sobre o processamento linear e sequencial. Essa diferença neurológica resulta em habilidades excepcionais: pensamento lateral extraordinário, capacidade de ver o "quadro geral", habilidades visuais aprimoradas, intuição para padrões complexos e uma propensão natural para soluções inovadoras.</p>
            
            <div className="highlight-box animate__animated" id="highlightBox">
              <p>"A dislexia não é uma barreira; é um caminho diferente para a genialidade." - Dr. Fernette Eide</p>
            </div>
            
            <p>Estudos neurocientíficos revelam que pessoas com dislexia frequentemente apresentam maior atividade no hemisfério direito do cérebro, associado à criatividade, intuição e pensamento não-linear. Elas tendem a ser excelentes em conectar ideias aparentemente não relacionadas, visualizar soluções complexas e pensar "fora da caixa" - habilidades cruciais para inovação em qualquer campo.</p>
            
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Inovação e design" className="animate__animated" id="articleImage2" loading="lazy" />
            
            <p>A história está repleta de inovadores disléxicos que transformaram suas "dificuldades" em superpoderes criativos. Richard Branson revolucionou múltiplas indústrias com seu pensamento disruptivo. Steven Spielberg criou mundos cinematográficos que capturam imaginações globalmente. Agatha Christie construiu tramas literárias de complexidade incomparável. Estes não são casos isolados, mas exemplos de como a dislexia, quando apoiada adequadamente, pode catalisar genialidade criativa.</p>
          </article> 
          
          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Forças Criativas da Dislexia</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Pensamento Visuoespacial</h3>
                <p>Capacidade excepcional de visualizar objetos tridimensionais, compreender relações espaciais complexas e "ver" soluções antes de verbalizá-las.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>2. Pensamento Holístico</h3>
                <p>Habilidade natural de ver o "quadro geral", compreender sistemas complexos e identificar conexões que outros podem perder.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>3. Criatividade Divergente</h3>
                <p>Tendência a gerar múltiplas soluções criativas para problemas, explorando abordagens não-convencionais e inovadoras.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>4. Intuição para Padrões</h3>
                <p>Capacidade de reconhecer padrões complexos, tendências e relações sutis que podem não ser imediatamente óbvias.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>5. Pensamento Narrativo</h3>
                <p>Habilidade excepcional para construir histórias, criar cenários e comunicar ideias através de narrativas envolventes.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>6. Flexibilidade Cognitiva</h3>
                <p>Capacidade de alternar facilmente entre diferentes perspectivas, adaptar-se a novas situações e repensar problemas de ângulos únicos.</p>
              </div>
            </div>
          </section>

          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">Conclusão</h2>
            <div className="conclusao-content">
              <p>A dislexia não é uma limitação a ser superada, mas um estilo de pensamento a ser cultivado. Quando a sociedade reconhece e apoia as forças únicas do pensamento disléxico, descobrimos uma fonte inexplorada de inovação e criatividade que pode transformar campos inteiros do conhecimento humano.</p>
              
              <div className="highlight-box">
                <p>"Minha dislexia me ensinou que há muitas maneiras diferentes de ver e compreender o mundo." - Richard Branson</p>
              </div>
              
              <p>O futuro pertence a sociedades que sabem valorizar diferentes tipos de inteligência e estilos de pensamento. À medida que nosso mundo se torna mais complexo e interconectado, precisamos mais do que nunca das perspectivas únicas, do pensamento criativo e das soluções inovadoras que mentes disléxicas naturalmente oferecem. A dislexia não é um obstáculo no caminho para o sucesso - é um caminho diferente, muitas vezes mais rico e criativo, para a realização extraordinária.</p>
            </div>
          </section>

          <section className="quiz-section animate__animated">
            <h2 className="proposta-title">Teste Seu Conhecimento</h2>
            <div className="quiz-container">
              <QuizDislexiaCriatividade />
            </div>
          </section>

          <ArtigosSugeridos />
        </main>

        {/* Botões flutuantes */}
        <div style={{position: 'fixed',bottom: '2rem',right: '2rem',display: 'flex',flexDirection: 'column',gap: '1.5rem',zIndex: 9999}}>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{width: '50px',height: '50px',borderRadius: '50%',backgroundColor: '#F6B600',color: '#071D3B',display: 'flex',alignItems: 'center',justifyContent: 'center',border: 'none',boxShadow: '0 4px 10px rgba(0,0,0,0.2)',cursor: 'pointer',transition: 'all 0.3s ease',position: 'relative'}} onMouseOver={(e) => {e.currentTarget.style.transform = 'translateY(-5px)';e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.3)';e.currentTarget.querySelector('.tooltip').style.opacity = '1';e.currentTarget.querySelector('.tooltip').style.right = '70px';}} onMouseOut={(e) => {e.currentTarget.style.transform = 'translateY(0)';e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';e.currentTarget.querySelector('.tooltip').style.opacity = '0';e.currentTarget.querySelector('.tooltip').style.right = '60px';}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#071D3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
            <div style={{position: 'absolute',right: '60px',backgroundColor: '#071D3B',color: 'white',padding: '0.5rem 1rem',borderRadius: '6px',fontSize: '0.8rem',whiteSpace: 'nowrap',opacity: '0',pointerEvents: 'none',transition: 'all 0.3s ease'}} className="tooltip">Voltar ao topo</div>
          </button>
          <button onClick={openShareModal} style={{width: '50px',height: '50px',borderRadius: '50%',backgroundColor: '#071D3B',color: 'white',display: 'flex',alignItems: 'center',justifyContent: 'center',border: 'none',boxShadow: '0 4px 10px rgba(0,0,0,0.2)',cursor: 'pointer',transition: 'all 0.3s ease',position: 'relative'}} onMouseOver={(e) => {e.currentTarget.style.transform = 'translateY(-5px)';e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.3)';e.currentTarget.querySelector('.tooltip').style.opacity = '1';e.currentTarget.querySelector('.tooltip').style.right = '70px';}} onMouseOut={(e) => {e.currentTarget.style.transform = 'translateY(0)';e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';e.currentTarget.querySelector('.tooltip').style.opacity = '0';e.currentTarget.querySelector('.tooltip').style.right = '60px';}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
            <div style={{position: 'absolute',right: '60px',backgroundColor: '#071D3B',color: 'white',padding: '0.5rem 1rem',borderRadius: '6px',fontSize: '0.8rem',whiteSpace: 'nowrap',opacity: '0',pointerEvents: 'none',transition: 'all 0.3s ease'}} className="tooltip">Compartilhar</div>
          </button>
        </div>
      </main>
      <Footer />
      <ShareModal isOpen={shareModalOpen} onClose={closeShareModal} />
    </>
  );
}