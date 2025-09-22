import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import QuizTDAHVidaAdulta from "../quiz/QuizTDAHVidaAdulta";
import ShareModal from "../ui/ShareModal";
import ArtigosSugeridos from "../ui/ArtigosSugeridos";

export default function TDAHVidaAdulta() {
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
          <img src="/imagens/img8.jpg" alt="TDAH na vida adulta" className="hero-bg" loading="lazy" />
          
          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">TDAH na Vida Adulta: Desafios e Soluções</h1>
            
            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>setembro 22, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>TDAH Adulto</span>
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
            <span>TDAH na Vida Adulta: Desafios e Soluções</span>
          </div>
          
          <article className="article-content">
            <p>O Transtorno de Déficit de Atenção e Hiperatividade (TDAH) na vida adulta apresenta uma complexidade única que vai muito além dos estereótipos infantis. Adultos com TDAH enfrentam desafios específicos relacionados ao trabalho, relacionamentos e gestão da vida diária, mas também possuem forças extraordinárias que, quando compreendidas e apoiadas, podem levar ao sucesso e realização pessoal.</p>
            
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Adulto com TDAH no trabalho" className="animate__animated" id="articleImage1" loading="lazy" />
            
            <p>Muitos adultos descobrem o TDAH tardiamente, após anos de luta com desorganização, procrastinação, dificuldades de relacionamento ou problemas profissionais. O diagnóstico adulto pode ser um divisor de águas, oferecendo finalmente explicações para padrões de vida que antes pareciam inexplicáveis e abrindo caminhos para estratégias efetivas de manejo.</p>
            
            <div className="highlight-box animate__animated" id="highlightBox">
              <p>"TDAH não é um distúrbio de déficit de atenção. É um distúrbio de regulação da atenção - às vezes hiperatenção, às vezes desatenção." - Dr. Russell Barkley</p>
            </div>
            
            <p>Os sintomas do TDAH adulto podem se manifestar de formas sutis: dificuldade em manter foco em tarefas longas, tendência à procrastinação seguida de períodos de hiperproductividade, esquecimentos frequentes, dificuldade em estimar tempo, ou inquietação interna constante. Essas características podem impactar significativamente a carreira, relacionamentos e autoestima.</p>
            
            <img src="https://images.unsplash.com/photo-1531177071211-2f2270082126?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Gestão de tempo e organização" className="animate__animated" id="articleImage2" loading="lazy" />
            
            <p>No entanto, o TDAH também traz qualidades valiosas: criatividade excepcional, capacidade de hiperfoco em áreas de interesse, pensamento inovador, alta energia em projetos apaixonantes, e habilidade para ver soluções que outros não conseguem enxergar. Reconhecer e cultivar essas forças é fundamental para o bem-estar e sucesso do adulto com TDAH.</p>
          </article> 
          
          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Estratégias para Adultos com TDAH</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Sistemas de Organização</h3>
                <p>Desenvolver rotinas consistentes, usar aplicativos de produtividade, criar listas visuais e estabelecer lembretes automáticos.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>2. Gestão do Tempo</h3>
                <p>Técnicas como Pomodoro, time-blocking, estimativas realistas de tempo e uso de temporizadores para tarefas.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>3. Ambiente de Trabalho</h3>
                <p>Criar espaços organizados, minimizar distrações, usar música ou ruído branco, e negociar flexibilidade quando possível.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>4. Cuidado com Relacionamentos</h3>
                <p>Comunicação aberta sobre o TDAH, estabelecimento de expectativas realistas e desenvolvimento de estratégias conjuntas.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>5. Autocuidado Integral</h3>
                <p>Exercício regular, sono adequado, alimentação balanceada, mindfulness e, quando apropriado, tratamento medicamentoso.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>6. Aproveitamento das Forças</h3>
                <p>Identificar áreas de hiperfoco, buscar carreiras que valorizem criatividade e inovação, e desenvolver projetos pessoais apaixonantes.</p>
              </div>
            </div>
          </section>

          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">Conclusão</h2>
            <div className="conclusao-content">
              <p>Viver com TDAH na idade adulta é uma jornada de autodescoberta, adaptação e crescimento. Não se trata de 'superar' o TDAH, mas de aprender a navegar a vida de forma que honre tanto os desafios quanto as forças que essa condição neurológica traz.</p>
              
              <div className="highlight-box">
                <p>"O segredo não é lutar contra o TDAH, mas aprender a dançar com ele." - Dr. Edward Hallowell</p>
              </div>
              
              <p>Com as estratégias certas, apoio adequado e compreensão das próprias necessidades, adultos com TDAH podem não apenas ter sucesso, mas também contribuir com suas perspectivas únicas e energia criativa para fazer diferença no mundo. O TDAH pode ser um desafio, mas também pode ser um superpoder quando bem compreendido e gerenciado.</p>
            </div>
          </section>

          <section className="quiz-section animate__animated">
            <h2 className="proposta-title">Teste Seu Conhecimento</h2>
            <div className="quiz-container">
              <QuizTDAHVidaAdulta />
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