import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import QuizSensorialidadeAutismo from "../quiz/QuizSensorialidadeAutismo";
import ShareModal from "../ui/ShareModal";
import ArtigosSugeridos from "../ui/ArtigosSugeridos";

export default function SensorialidadeAutismo() {
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
          <img src="/imagens/img7.jpg" alt="Sensorialidade no autismo" className="hero-bg" loading="lazy" />
          
          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">Sensorialidade no Autismo: Um Mundo Único</h1>
            
            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>setembro 22, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>Sensorialidade</span>
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
            <span>Sensorialidade no Autismo: Um Mundo Único</span>
          </div>
          
          <article className="article-content">
            <p>O mundo sensorial de pessoas autistas é fascinante e complexo, muitas vezes radicalmente diferente da experiência neurotípica. Compreender essas diferenças não é apenas importante para o apoio adequado, mas também nos oferece uma janela única para a diversidade da experiência humana e a riqueza das diferentes formas de perceber o mundo.</p>
            
            <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Sensorialidade e percepção" className="animate__animated" id="articleImage1" loading="lazy" />
            
            <p>Pessoas autistas podem experimentar hiper ou hipossensibilidade em qualquer um dos sentidos - visão, audição, tato, olfato, paladar, e também nos sentidos menos conhecidos como propriocepção (consciência corporal) e sistema vestibular (equilíbrio). Essa variação sensorial não é um defeito, mas uma diferença neurológica que pode trazer tanto desafios quanto habilidades extraordinárias.</p>
            
            <div className="highlight-box animate__animated" id="highlightBox">
              <p>"O autismo não é sobre ser quebrado ou precisar de conserto. É sobre ter um sistema nervoso diferente que processa o mundo de maneira única." - Ari Ne'eman, Ativista Autista</p>
            </div>
            
            <p>A hipersensibilidade pode fazer com que estímulos cotidianos se tornem avassaladores - luzes fluorescentes podem parecer estroboscópicas, tecidos podem causar desconforto extremo, ou sons de fundo podem ser impossíveis de filtrar. Por outro lado, a hiposensibilidade pode levar à busca por estímulos mais intensos ou à dificuldade em perceber sinais importantes do ambiente.</p>
            
            <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Processamento sensorial" className="animate__animated" id="articleImage2" loading="lazy" />
            
            <p>É crucial reconhecer que as necessidades sensoriais podem variar drasticamente não apenas entre diferentes pessoas autistas, mas também na mesma pessoa ao longo do dia, dependendo do nível de estresse, fadiga ou outras circunstâncias. Criar ambientes sensorialmente conscientes beneficia não apenas pessoas autistas, mas todos que podem ter sensibilidades sensoriais.</p>
          </article> 
          
          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Estratégias para Apoio Sensorial</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Identificação de Padrões</h3>
                <p>Observar e documentar como diferentes ambientes e estímulos afetam o bem-estar, criando um perfil sensorial personalizado.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>2. Ferramentas Sensoriais</h3>
                <p>Usar itens como fones com cancelamento de ruído, óculos escuros, fidget toys, ou roupas com texturas confortáveis.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>3. Ambientes Adaptados</h3>
                <p>Criar espaços com iluminação ajustável, opções de texturas variadas e possibilidades de controle sobre estímulos sensoriais.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>4. Comunicação Clara</h3>
                <p>Estabelecer sinais ou códigos para comunicar sobrecarga sensorial e necessidade de pausa ou mudança de ambiente.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>5. Valorização das Forças</h3>
                <p>Reconhecer que diferenças sensoriais podem trazer habilidades únicas como atenção a detalhes, percepção aguçada ou criatividade.</p>
              </div>
            </div>
          </section>

          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">Conclusão</h2>
            <div className="conclusao-content">
              <p>A sensorialidade no autismo nos lembra que existe uma diversidade extraordinária na forma como experimentamos o mundo. Em vez de ver essas diferenças como limitações, podemos aprender a valorizá-las como perspectivas únicas que enriquecem nossa compreensão da experiência humana.</p>
              
              <div className="highlight-box">
                <p>"Quando compreendemos verdadeiramente as diferenças sensoriais no autismo, abrimos portas para apoio mais efetivo e inclusão genuína." - Dr. Temple Grandin</p>
              </div>
              
              <p>Criar um mundo mais inclusivo significa reconhecer e acomodar essa diversidade sensorial, não tentando 'normalizar' experiências, mas sim criando espaços onde diferentes formas de perceber e interagir com o mundo sejam valorizadas e apoiadas.</p>
            </div>
          </section>

          <section className="quiz-section animate__animated">
            <h2 className="proposta-title">Teste Seu Conhecimento</h2>
            <div className="quiz-container">
              <QuizSensorialidadeAutismo />
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