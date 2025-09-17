import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Quiz from "./Quiz";
import ShareModal from "./ShareModal";

export default function TecnologiaNeurodivergentes() {
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
          <img src="/imagens/img5.jpg" alt="Tecnologia e neurodivergência" className="hero-bg" loading="lazy" />
          
          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">Tecnologia: Aliada ou Desafio para Neurodivergentes?</h1>
            
            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>setembro 15, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>Tecnologia Assistiva</span>
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
            <span>Tecnologia: Aliada ou Desafio para Neurodivergentes?</span>
          </div>
          
          <article className="article-content">
            <p>A tecnologia moderna apresenta um paradoxo fascinante para pessoas neurodivergentes: ao mesmo tempo que oferece ferramentas revolucionárias para acessibilidade e inclusão, também pode criar novas barreiras e desafios. Compreender essa dualidade é essencial para aproveitar o potencial transformador da tecnologia enquanto mitigamos seus possíveis efeitos negativos.</p>
            
            <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Tecnologia assistiva" className="animate__animated" id="articleImage1" loading="lazy" />
            
            <p>Do lado positivo, a tecnologia tem democratizado o acesso à comunicação, educação e oportunidades profissionais para neurodivergentes. Aplicativos de comunicação alternativa permitem que pessoas não-verbais se expressem, ferramentas de organização ajudam pessoas com TDAH a gerenciar tarefas, e ambientes virtuais oferecem espaços seguros para interação social sem sobrecarga sensorial.</p>
            
            <div className="highlight-box animate__animated" id="highlightBox">
              <p>"A tecnologia não é neutra - ela amplifica as intenções e valores daqueles que a criam. Quando projetada com inclusão em mente, pode ser transformadora." - Dr. Clayton Lewis, Cientista da Computação</p>
            </div>
            
            <p>No entanto, a tecnologia também pode criar exclusão quando não é projetada considerando a neurodiversidade. Interfaces confusas, sobrecarga de informações, notificações constantes e design que não considera sensibilidades sensoriais podem tornar a tecnologia mais um obstáculo do que uma ferramenta de empoderamento.</p>
            
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Design inclusivo em tecnologia" className="animate__animated" id="articleImage2" loading="lazy" />
            
            <p>O conceito de design universal está ganhando força na indústria tecnológica. Quando produtos são projetados desde o início para ser acessíveis a pessoas com diferentes necessidades neurológicas, o resultado beneficia todos os usuários. Recursos como controle de velocidade, opções de personalização sensorial e interfaces simplificadas melhoram a experiência para neurodivergentes e neurotípicos alike.</p>
          </article> 
          
          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Tecnologias Transformadoras para Neurodivergentes</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Comunicação Alternativa e Aumentativa (CAA)</h3>
                <p>Apps como Proloquo2Go e LAMP Words for Life permitem comunicação através de símbolos, transformando tablets em poderosas ferramentas de voz.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>2. Ferramentas de Organização e Foco</h3>
                <p>Aplicativos como Forest, Notion e Todoist ajudam pessoas com TDAH a gerenciar tarefas, tempo e manter foco através de gamificação e estrutura visual.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>3. Ambientes Virtuais Seguros</h3>
                <p>Plataformas VR e mundos digitais oferecem espaços para prática social, aprendizado e recreação sem pressões sensoriais ou sociais do mundo físico.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>4. IA e Personalização</h3>
                <p>Inteligência artificial está sendo usada para criar experiências personalizadas que se adaptam às necessidades específicas de cada usuário neurodivergente.</p>
              </div>
            </div>
          </section>

          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">Conclusão</h2>
            <div className="conclusao-content">
              <p>O futuro da tecnologia e neurodivergência é promissor, mas requer ação intencional. Precisamos de mais neurodivergentes nas equipes de design e desenvolvimento, mais pesquisa sobre necessidades específicas e mais consciência sobre o impacto da tecnologia em diferentes tipos de cérebros.</p>
              
              <div className="highlight-box">
                <p>"Quando projetamos para os extremos, criamos algo melhor para todos." - Kat Holmes, Inclusive Design Advocate</p>
              </div>
              
              <p>A tecnologia tem o potencial de nivelar o campo de jogo para neurodivergentes, oferecendo ferramentas que compensam desafios e amplificam forças naturais. O segredo está em garantir que essa tecnologia seja desenvolvida com, não apenas para, a comunidade neurodivergente.</p>
            </div>
          </section>

          <section className="quiz-section animate__animated">
            <h2 className="proposta-title">Teste Seu Conhecimento</h2>
            <div className="quiz-container">
              <Quiz />
            </div>
          </section>

          <section className="artigos-sugeridos animate__animated" id="artigosSugeridos">
            <h2 className="proposta-title">Continue Explorando</h2>
            <div className="sugeridos-grid">
              <div className="artigo-sugerido" onClick={() => window.location.href='/artigo-premium'}>
                <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Neurodivergência" loading="lazy" />
                <h3>Neurodivergência</h3>
                <p>Compreendendo e valorizando as diferenças neurológicas.</p>
                <span className="leia-mais">Ler artigo →</span>
              </div>
              <div className="artigo-sugerido" onClick={() => window.location.href='/autismo-comunicacao'}>
                <img src="/imagens/img3.jpg" alt="Autismo" loading="lazy" />
                <h3>Autismo e Comunicação</h3>
                <p>Estratégias para inclusão e acessibilidade.</p>
                <span className="leia-mais">Ler artigo →</span>
              </div>
              <div className="artigo-sugerido" onClick={() => window.location.href='/ansiedade-neurodivergencia'}>
                <img src="/imagens/img4.jpg" alt="Ansiedade" loading="lazy" />
                <h3>Ansiedade e Neurodivergência</h3>
                <p>Compreendendo a complexa relação entre ansiedade e neurodivergência.</p>
                <span className="leia-mais">Ler artigo →</span>
              </div>
              <div className="artigo-sugerido" onClick={() => window.location.href='#'}>
                <img src="/imagens/img6.jpg" alt="Inclusão Escolar" loading="lazy" />
                <h3>Inclusão Escolar</h3>
                <p>Transformando ambientes educacionais para todos.</p>
                <span className="leia-mais">Ler artigo →</span>
              </div>
            </div>
          </section>
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