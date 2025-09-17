import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Quiz from "./Quiz";
import ShareModal from "./ShareModal";

export default function AnsiedadeNeurodivergencia() {
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
          <img src="/imagens/img4.jpg" alt="Ansiedade e neurodivergência" className="hero-bg" loading="lazy" />
          
          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">Ansiedade e Neurodivergência: Compreendendo a Conexão Complexa</h1>
            
            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>setembro 15, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>Saúde Mental</span>
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
            <span>Ansiedade e Neurodivergência: Qual a Relação?</span>
          </div>
          
          <article className="article-content">
            <p>A relação entre ansiedade e neurodivergência é complexa e multifacetada, muitas vezes mal compreendida tanto por profissionais quanto pelo público geral. Pessoas neurodivergentes experimentam ansiedade em taxas significativamente mais altas que a população geral, e isso não é coincidência. A ansiedade pode ser tanto uma resposta natural às pressões de um mundo neurotípico quanto uma condição coexistente que requer atenção e cuidado específicos.</p>
            
            <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Pessoa lidando com ansiedade" className="animate__animated" id="articleImage1" loading="lazy" />
            
            <p>Estudos mostram que até 80% das pessoas autistas e 60% das pessoas com TDAH também apresentam transtornos de ansiedade. Essa alta prevalência não pode ser ignorada ou tratada como uma simples coincidência. A ansiedade em neurodivergentes frequentemente surge da constante necessidade de mascarar traits neurológicos, da sobrecarga sensorial e das pressões sociais para "se encaixar" em padrões neurotípicos.</p>
            
            <div className="highlight-box animate__animated" id="highlightBox">
              <p>"A ansiedade em pessoas neurodivergentes muitas vezes é o resultado de anos tentando navegar em um mundo que não foi projetado para elas." - Dr. Michelle Mowbray, Psicóloga Clínica</p>
            </div>
            
            <p>O masking, ou camuflagem social, é uma estratégia comum entre neurodivergentes para se adaptar a situações sociais. Embora possa parecer útil no curto prazo, o masking constante é extremamente exaustivo e pode levar ao burnout autista, ansiedade generalizada e depressão. É como usar uma máscara o dia inteiro - eventualmente, torna-se sufocante.</p>
            
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Sobrecarga sensorial e ansiedade" className="animate__animated" id="articleImage2" loading="lazy" />
            
            <p>A sobrecarga sensorial é outro fator crucial na ansiedade neurodivergente. Ambientes com luzes fluorescentes, ruídos inesperados, texturas desconfortáveis ou multidões podem desencadear respostas de ansiedade intensa. O que pode parecer uma "sensibilidade excessiva" para outros é, na verdade, um sistema nervoso processando estímulos de forma diferente e muitas vezes mais intensa.</p>
            
            <p>A boa notícia é que, com compreensão adequada e estratégias personalizadas, a ansiedade em neurodivergentes pode ser gerenciada eficazmente. Isso envolve não apenas tratar os sintomas de ansiedade, mas também abordar as causas subjacentes relacionadas à neurodivergência e criar ambientes mais acolhedores e compreensivos.</p>
          </article> 
          
          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Estratégias de Manejo da Ansiedade Neurodivergente</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Identificação de Triggers Sensoriais</h3>
                <p>Mantenha um diário de ansiedade para identificar padrões relacionados a estímulos sensoriais específicos. Conhecimento é o primeiro passo para o controle.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>2. Criação de Espaços Seguros</h3>
                <p>Desenvolva ambientes físicos e digitais onde você possa ser autêntico sem masking. Isso reduz significativamente a ansiedade relacionada à performance social.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>3. Técnicas de Autorregulação</h3>
                <p>Explore métodos como breathing exercises, stimming positivo, música, movimento ou ferramentas sensoriais que ajudem na regulação emocional.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>4. Apoio Profissional Especializado</h3>
                <p>Busque terapeutas que compreendam neurodivergência. A terapia cognitivo-comportamental adaptada pode ser especialmente eficaz.</p>
              </div>
            </div>
          </section>

          {/* Seção de Conclusão */}
          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">Conclusão</h2>
            <div className="conclusao-content">
              <p>Compreender a conexão entre ansiedade e neurodivergência é fundamental para o bem-estar de milhões de pessoas. A ansiedade neurodivergente não é uma fraqueza ou falha pessoal - é uma resposta natural a um mundo que frequentemente não acomoda diferenças neurológicas.</p>
              
              <p>O caminho para o bem-estar envolve tanto estratégias individuais de manejo quanto mudanças sistêmicas em nossa sociedade. Precisamos criar espaços mais inclusivos, educar profissionais de saúde mental sobre neurodivergência e normalizar conversas sobre saúde mental na comunidade neurodivergente.</p>
              
              <div className="highlight-box">
                <p>"A cura para a ansiedade neurodivergente não está em tentar ser mais 'normal', mas em criar um mundo onde ser diferente seja genuinamente aceito e valorizado." - Autistic Self Advocacy Network</p>
              </div>
              
              <p>Se você é neurodivergente e lida com ansiedade, saiba que você não está sozinho e que há esperança. Com as estratégias certas e o apoio adequado, é possível viver uma vida plena e autêntica, honrando tanto sua neurodivergência quanto cuidando de sua saúde mental.</p>
            </div>
          </section>

          {/* Seção de Quiz Interativo */}
          <section className="quiz-section animate__animated">
            <h2 className="proposta-title">Teste Seu Conhecimento</h2>
            <div className="quiz-container">
              <Quiz />
            </div>
          </section>

          {/* Seção de Artigos Sugeridos */}
          <section className="artigos-sugeridos animate__animated" id="artigosSugeridos">
            <h2 className="proposta-title">Continue Explorando</h2>
            <div className="sugeridos-grid">
              <div className="artigo-sugerido" onClick={() => window.location.href='/artigo-premium'}>
                <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Neurodivergência" loading="lazy" />
                <h3>Neurodivergência</h3>
                <p>Compreendendo e valorizando as diferenças neurológicas na sociedade atual.</p>
                <span className="leia-mais">Ler artigo →</span>
              </div>
              
              <div className="artigo-sugerido" onClick={() => window.location.href='/autismo-comunicacao'}>
                <img src="https://t3.ftcdn.net/jpg/03/34/03/28/240_F_334032893_Xd0qQrgaj2V2ohBLIXXcMRcAJqsjTrXq.jpg" alt="Autismo" loading="lazy" />
                <h3>Autismo e Comunicação</h3>
                <p>Estratégias para criar ambientes mais inclusivos e acessíveis.</p>
                <span className="leia-mais">Ler artigo →</span>
              </div>
              
              <div className="artigo-sugerido" onClick={() => window.location.href='/tdah-estereotipos'}>
                <img src="https://t3.ftcdn.net/jpg/08/34/96/16/240_F_834961628_1JgTl2RHCXvRbicYjGuTgNtozShtRYRh.jpg" alt="TDAH" loading="lazy" />
                <h3>TDAH: Além dos Estereótipos</h3>
                <p>Desvendando os mitos sobre o Transtorno de Déficit de Atenção.</p>
                <span className="leia-mais">Ler artigo →</span>
              </div>

              <div className="artigo-sugerido" onClick={() => window.location.href='#'}>
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Inclusão Escolar" loading="lazy" />
                <h3>Inclusão Escolar</h3>
                <p>Como criar ambientes educacionais verdadeiramente acolhedores.</p>
                <span className="leia-mais">Ler artigo →</span>
              </div>
            </div>
          </section>
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