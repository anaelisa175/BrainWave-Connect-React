import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import QuizAutismoAmbienteTrabalho from "../quiz/QuizAutismoAmbienteTrabalho";
import ShareModal from "../ui/ShareModal";
import ArtigosSugeridos from "../ui/ArtigosSugeridos";

export default function AutismoAmbienteTrabalho() {
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
          <img src="/imagens/img14.jpg" alt="Autismo no ambiente de trabalho" className="hero-bg" loading="lazy" />
          
          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">Autismo no Ambiente de Trabalho</h1>
            
            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>setembro 22, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>Inclusão Corporativa</span>
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
            <span>Autismo no Ambiente de Trabalho</span>
          </div>
          
          <article className="article-content">
            <p>O ambiente de trabalho tradicional pode ser um campo minado sensorial e social para pessoas autistas, mas com adaptações simples e compreensão adequada, pode se tornar um espaço onde talentos únicos florescem. Empresas líderes estão descobrindo que criar ambientes verdadeiramente inclusivos para autistas não apenas beneficia esses profissionais, mas eleva o desempenho de toda a equipe e impulsiona a inovação organizacional.</p>
            
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Ambiente de trabalho inclusivo" className="animate__animated" id="articleImage1" loading="lazy" />
            
            <p>Profissionais autistas trazem qualidades excepcionais: atenção meticulosa aos detalhes, pensamento sistemático, capacidade de identificar padrões complexos, honestidade direta, lealdade excepcional e abordagens inovadoras para resolução de problemas. Quando o ambiente de trabalho é adaptado para acomodar suas necessidades, esses talentos podem ser canalizados de forma extraordinária.</p>
            
            <div className="highlight-box animate__animated" id="highlightBox">
              <p>"Não é sobre fazer caridade. É sobre reconhecer que cérebros diferentes resolvem problemas de formas diferentes - e isso é exatamente o que precisamos para inovar." - John Robison, consultor em neurodiversidade</p>
            </div>
            
            <p>Os desafios principais não estão nas capacidades dos autistas, mas na necessidade de adaptações ambientais e culturais. Ruídos excessivos, iluminação inadequada, mudanças constantes de rotina, comunicação ambígua e expectativas sociais não declaradas podem ser barreiras significativas. No entanto, essas barreiras são facilmente removíveis com planejamento consciente.</p>
            
            <img src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Colaboração e trabalho em equipe" className="animate__animated" id="articleImage2" loading="lazy" />
            
            <p>A transformação de ambientes de trabalho para incluir autistas está criando uma revolução silenciosa na cultura corporativa. Empresas relatam não apenas melhor retenção e satisfação de funcionários autistas, mas também melhorias na comunicação geral, processos mais claros e ambientes menos estressantes para todos os colaboradores.</p>
          </article> 
          
          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Criando Ambientes Inclusivos</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Adaptações Sensoriais</h3>
                <p>Controlar iluminação (evitar fluorescentes piscantes), reduzir ruídos desnecessários, criar espaços silenciosos e permitir uso de fones de ouvido ou ferramentas sensoriais.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>2. Comunicação Clara e Direta</h3>
                <p>Fornecer instruções específicas por escrito, evitar linguagem figurativa em contextos profissionais, ser explícito sobre expectativas e prazos.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>3. Estrutura e Previsibilidade</h3>
                <p>Manter rotinas consistentes, comunicar mudanças com antecedência, criar cronogramas claros e estabelecer processos estruturados para tarefas.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>4. Flexibilidade de Trabalho</h3>
                <p>Permitir trabalho remoto quando possível, oferecer horários flexíveis, pausas regulares e espaços para descompressão sensorial.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>5. Mentoria e Suporte</h3>
                <p>Designar mentores compreensivos, oferecer feedback construtivo regular, criar sistemas de apoio peer-to-peer e treinamento para gestores.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>6. Reconhecimento de Forças</h3>
                <p>Identificar e aproveitar talentos especiais, criar oportunidades para áreas de expertise e valorizar contribuições únicas.</p>
              </div>
            </div>
          </section>

          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">Conclusão</h2>
            <div className="conclusao-content">
              <p>Criar ambientes de trabalho verdadeiramente inclusivos para autistas não é apenas uma questão de compliance ou responsabilidade social - é uma estratégia inteligente de negócios que beneficia toda a organização. Quando removemos barreiras desnecessárias, descobrimos talentos extraordinários e perspectivas valiosas.</p>
              
              <div className="highlight-box">
                <p>"A inclusão começa com a compreensão de que diferenças não são deficiências, mas diversidades que enriquecem nosso ambiente de trabalho." - Steve Silberman</p>
              </div>
              
              <p>O futuro do trabalho é neurodiverso. Empresas que abraçam essa realidade agora estão se posicionando como líderes em inovação, atraindo os melhores talentos e criando culturas organizacionais mais resilientes e criativas. Autistas não precisam se "encaixar" no ambiente de trabalho tradicional - o ambiente de trabalho precisa evoluir para incluir todos os tipos de mentes brilhantes.</p>
            </div>
          </section>

          <section className="quiz-section animate__animated">
            <h2 className="proposta-title">Teste Seu Conhecimento</h2>
            <div className="quiz-container">
              <QuizAutismoAmbienteTrabalho />
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