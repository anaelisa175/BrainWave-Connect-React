import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import QuizNeurodivergenciaCriatividade from "../quiz/QuizNeurodivergenciaCriatividade";
import ShareModal from "../ui/ShareModal";
import ArtigosSugeridos from "../ui/ArtigosSugeridos";

export default function NeurodivergenciaCriatividade() {
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
          <img src="/imagens/img15.jpg" alt="Neurodivergência e criatividade" className="hero-bg" loading="lazy" />
          
          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">Neurodivergência e Criatividade: Uma Força Poderosa</h1>
            
            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>outubro 15, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>Criatividade Neural</span>
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
            <span>Neurodivergência e Criatividade: Uma Força Poderosa</span>
          </div>
          
          <article className="article-content">
            <p>A neurodivergência não é apenas uma diferença neurológica - é uma fonte extraordinária de inovação, criatividade e pensamento revolucionário. Enquanto a sociedade tradicionalmente focou nos desafios, é crucial reconhecer e celebrar o potencial criativo único que diferentes tipos de cérebros trazem ao mundo. Pessoas neurodivergentes têm sido responsáveis por algumas das maiores inovações da humanidade.</p>
            
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Arte e criatividade" className="animate__animated" id="articleImage1" loading="lazy" />
            
            <p>Cérebros neurodivergentes processam informações de maneiras únicas, criando conexões inusitadas e perspectivas inovadoras. Pessoas com autismo podem ter atenção aos detalhes excepcional e pensamento sistemático. Indivíduos com TDAH frequentemente demonstram pensamento divergente notável e capacidade de hiperfoco. Pessoas com dislexia costumam ter habilidades visuoespaciais superiores e pensamento holístico.</p>
            
            <div className="highlight-box animate__animated" id="highlightBox">
              <p>"A neurodivergência não é um defeito a ser corrigido, mas uma variação natural que enriquece nossa espécie." - Dr. Ari Ne'eman</p>
            </div>
            
            <p>A história está repleta de exemplos de inovadores neurodivergentes: Albert Einstein, provavelmente autista, revolucionou a física. Temple Grandin transformou a indústria pecuária com suas perspectivas únicas sobre comportamento animal. Simone Biles, com TDAH, redefiniu a ginástica olímpica. Richard Branson, com dislexia, criou um império empresarial inovador.</p>
            
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Inovação e tecnologia" className="animate__animated" id="articleImage2" loading="lazy" />
            
            <p>O mundo corporativo e acadêmico está começando a reconhecer o valor da neurodiversidade. Empresas como Microsoft, SAP e IBM desenvolveram programas específicos para recrutar talentos neurodivergentes, reconhecendo suas contribuições únicas para inovação, resolução de problemas e pensamento criativo. Esses profissionais trazem perspectivas frescas que podem quebrar paradigmas e gerar soluções inovadoras.</p>
          </article> 
          
          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Forças Criativas da Neurodivergência</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Pensamento Divergente</h3>
                <p>Capacidade de gerar múltiplas soluções criativas para problemas, explorando caminhos não convencionais e inovadores.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>2. Hiperfoco Criativo</h3>
                <p>Habilidade de mergulhar profundamente em projetos apaixonantes, desenvolvendo expertise excepcional e soluções detalhadas.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>3. Padrões e Conexões</h3>
                <p>Talento para identificar padrões ocultos, fazer conexões inesperadas e ver relações que outros podem não perceber.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>4. Pensamento Visual</h3>
                <p>Capacidades visuoespaciais aprimoradas que facilitam design, arte, arquitetura e compreensão de sistemas complexos.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>5. Inovação Disruptiva</h3>
                <p>Tendência a questionar convenções, desafiar status quo e propor soluções revolucionárias para problemas antigos.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>6. Sensibilidade Artística</h3>
                <p>Percepção aguçada de estímulos sensoriais que pode se traduzir em expressão artística excepcional e originalidade.</p>
              </div>
            </div>
          </section>

          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">Conclusão</h2>
            <div className="conclusao-content">
              <p>A neurodivergência representa uma das maiores fontes não exploradas de inovação e criatividade em nossa sociedade. Quando proporcionamos ambientes inclusivos e apoio adequado, cérebros neurodivergentes podem florescer e contribuir com perspectivas revolucionárias que beneficiam toda a humanidade.</p>
              
              <div className="highlight-box">
                <p>"A diversidade neurológica pode ser tão crucial para a espécie humana quanto a biodiversidade é para a vida na Terra." - Harvey Blume</p>
              </div>
              
              <p>É hora de mudarmos nossa perspectiva: ao invés de focar apenas nos desafios, precisamos celebrar e cultivar as forças criativas únicas da neurodivergência. O futuro pertence às sociedades que conseguirem aproveitar toda a riqueza do espectro neurológico humano, criando espaços onde cada mente única possa contribuir com seu máximo potencial criativo.</p>
            </div>
          </section>

          <section className="quiz-section animate__animated">
            <h2 className="proposta-title">Teste Seu Conhecimento</h2>
            <div className="quiz-container">
              <QuizNeurodivergenciaCriatividade />
            </div>
          </section>

          <ArtigosSugeridos artigoAtualLink="/artigos/neurodivergencia-criatividade" />
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