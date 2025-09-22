import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import QuizAutismoComunicacao from "../quiz/QuizAutismoComunicacao";
import ShareModal from "../ui/ShareModal";
import ArtigosSugeridos from "../ui/ArtigosSugeridos";

export default function AutismoComunicacao() {
  const [shareModalOpen, setShareModalOpen] = useState(false);
  
  // Scroll para o topo quando o componente for montado
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const openShareModal = () => {
    setShareModalOpen(true);
  };
  
  const closeShareModal = () => {
    setShareModalOpen(false);
  };

  return (
    <>
      <Header />
      <main className="artigo-main">
        {/* Hero Section */}
        <section className="hero" id="heroSection">
          <img src="/imagens/img3.jpg" alt="Autismo e comunicação" className="hero-bg" loading="lazy" />
          
          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">Autismo e Comunicação: Como Incluir e Compreender Melhor</h1>
            
            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>setembro 15, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>Inclusão e Acessibilidade</span>
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
                  articleStart.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
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
        
        {/* Main Content */}
        <main className="main-content" id="articleStart">
          <div className="breadcrumb">
            <a href="#">Início</a>
            <span className="divider">/</span>
            <a href="#">Artigos</a>
            <span className="divider">/</span>
            <span>Autismo e Comunicação: Como Incluir?</span>
          </div>
          
          <article className="article-content">
            <p>A comunicação é uma ponte fundamental para a inclusão de pessoas autistas em nossa sociedade. Compreender as diferentes formas de comunicação no espectro autista e desenvolver estratégias inclusivas não é apenas uma questão de acessibilidade, mas de enriquecimento mútuo. Cada pessoa autista possui uma forma única de perceber e expressar-se no mundo, e nossa responsabilidade é criar espaços onde essas diferenças sejam não apenas aceitas, mas celebradas.</p>
            
            <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Pessoa autista se comunicando" className="animate__animated" id="articleImage1" loading="lazy" />
            
            <p>Pessoas autistas podem se comunicar de diversas formas: através da fala, comunicação não-verbal, linguagem de sinais, sistemas de comunicação alternativa (CAA), ou uma combinação dessas modalidades. Algumas pessoas são verbais, outras são parcialmente verbais, e algumas são não-verbais - mas isso não significa que não têm nada a dizer. A comunicação vai muito além das palavras faladas.</p>
            
            <div className="highlight-box animate__animated" id="highlightBox">
              <p>"Não ser verbal não significa não ter nada a dizer. Significa que você precisa ouvir de forma diferente." - Ido Kedar, Autor autista</p>
            </div>
            
            <p>A comunicação aumentativa e alternativa (CAA) tem revolucionado a forma como pessoas autistas não-verbais ou com dificuldades de fala podem expressar seus pensamentos, sentimentos e necessidades. Desde aplicativos em tablets até quadros de comunicação por imagens, essas ferramentas abrem portas para conexões genuínas e participação plena na sociedade.</p>
            
            <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Tecnologia assistiva para comunicação" className="animate__animated" id="articleImage2" loading="lazy" />
            
            <p>No ambiente educacional, estratégias inclusivas de comunicação beneficiam não apenas estudantes autistas, mas toda a turma. Usar suportes visuais, dar tempo extra para processamento, oferecer alternativas de participação e ensinar colegas sobre diferentes estilos de comunicação cria um ambiente mais acolhedor e eficaz para todos.</p>
            
            <p>No local de trabalho, pequenos ajustes podem fazer uma grande diferença. Comunicação clara por escrito, ambientes com menos estímulos sensoriais, flexibilidade em métodos de apresentação e compreensão sobre diferentes estilos de interação social podem transformar o potencial de colaboração e produtividade.</p>
          </article> 
          
          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Estratégias para Comunicação Inclusiva</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Comunicação Clara e Direta</h3>
                <p>Use linguagem concisa, evite metáforas complexas e seja específico sobre expectativas. A comunicação literal é frequentemente preferida por pessoas autistas.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>2. Suportes Visuais</h3>
                <p>Incorpore imagens, gráficos, cronogramas visuais e sistemas de símbolos. Muitas pessoas autistas processam informações visuais mais facilmente que auditivas.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>3. Tempo de Processamento</h3>
                <p>Permita tempo extra para resposta e evite pressionar por respostas imediatas. O processamento pode levar mais tempo, mas as respostas são frequentemente bem elaboradas.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>4. Múltiplas Formas de Expressão</h3>
                <p>Ofereça diferentes canais de comunicação: escrita, digital, artística ou através de tecnologia assistiva. A diversidade de opções aumenta a participação.</p>
              </div>
            </div>
          </section>

          {/* Seção de Conclusão */}
          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">Conclusão</h2>
            <div className="conclusao-content">
              <p>A verdadeira inclusão começa quando paramos de tentar "normalizar" pessoas autistas e começamos a adaptar nossos ambientes e métodos de comunicação para acolher a diversidade. Cada pessoa autista tem perspectivas únicas e valiosas para compartilhar - nossa responsabilidade é criar as condições para que essas vozes sejam ouvidas.</p>
              
              <p>A comunicação inclusiva não é apenas sobre técnicas e ferramentas - é sobre mudança de mentalidade. É sobre reconhecer que diferença não é deficiência, e que a neurodiversidade enriquece nossas comunidades, escolas e locais de trabalho de formas que ainda estamos descobrindo.</p>
              
              <div className="highlight-box">
                <p>"Quando você conhece uma pessoa autista, você conhece uma pessoa autista. Cada indivíduo no espectro é único, com suas próprias fortalezas e desafios." - Dr. Stephen Shore</p>
              </div>
              
              <p>Vamos construir pontes de comunicação que honrem a diversidade, celebrem as diferenças e criem espaços onde cada pessoa possa contribuir com seus dons únicos para nossa sociedade compartilhada.</p>
            </div>
          </section>

          {/* Seção de Quiz Interativo */}
          <section className="quiz-section animate__animated">
            <h2 className="proposta-title">Teste Seu Conhecimento</h2>
            <div className="quiz-container">
              <QuizAutismoComunicacao />
            </div>
          </section>

          <ArtigosSugeridos />
        </main>

        {/* Botões flutuantes */}
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          zIndex: 9999
        }}>
          {/* Botão Voltar ao Topo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#F6B600',
              color: '#071D3B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.3)';
              e.currentTarget.querySelector('.tooltip').style.opacity = '1';
              e.currentTarget.querySelector('.tooltip').style.right = '70px';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
              e.currentTarget.querySelector('.tooltip').style.opacity = '0';
              e.currentTarget.querySelector('.tooltip').style.right = '60px';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#071D3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
            <div style={{
              position: 'absolute',
              right: '60px',
              backgroundColor: '#071D3B',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              fontSize: '0.8rem',
              whiteSpace: 'nowrap',
              opacity: '0',
              pointerEvents: 'none',
              transition: 'all 0.3s ease'
            }} className="tooltip">Voltar ao topo</div>
          </button>

          {/* Botão Compartilhar */}
          <button 
            onClick={openShareModal}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#071D3B',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.3)';
              e.currentTarget.querySelector('.tooltip').style.opacity = '1';
              e.currentTarget.querySelector('.tooltip').style.right = '70px';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
              e.currentTarget.querySelector('.tooltip').style.opacity = '0';
              e.currentTarget.querySelector('.tooltip').style.right = '60px';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
              <polyline points="16 6 12 2 8 6"></polyline>
              <line x1="12" y1="2" x2="12" y2="15"></line>
            </svg>
            <div style={{
              position: 'absolute',
              right: '60px',
              backgroundColor: '#071D3B',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              fontSize: '0.8rem',
              whiteSpace: 'nowrap',
              opacity: '0',
              pointerEvents: 'none',
              transition: 'all 0.3s ease'
            }} className="tooltip">Compartilhar</div>
          </button>
        </div>
      </main>
      <Footer />
      <ShareModal isOpen={shareModalOpen} onClose={closeShareModal} />
    </>
  );
}