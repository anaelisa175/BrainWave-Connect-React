import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import QuizTDAHEstereotipos from "../quiz/QuizTDAHEstereotipos";
import ShareModal from "../ui/ShareModal";
import ArtigosSugeridos from "../ui/ArtigosSugeridos";

export default function ArtigoPremium2() {
  const [shareModalOpen, setShareModalOpen] = useState(false);
  
  // Scroll para o topo quando o componente for montado
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
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
        {/* Hero Section - Conteúdo modificado */}
        <section className="hero" id="heroSection">
          <img src="/imagens/img2.jpg" alt="Cérebro e emoções ilustrados" className="hero-bg" loading="lazy" />
          
          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">TDAH: Além dos Estereótipos - A Verdade Sobre o Transtorno</h1>
            
            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>setembro 15, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>Neuropsicologia</span>
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
        
        {/* Main Content - Conteúdo modificado */}
        <main className="main-content" id="articleStart">
          <div className="breadcrumb">
            <a href="#">Início</a>
            <span className="divider">/</span>
            <a href="#">Artigos</a>
            <span className="divider">/</span>
            <span>TDAH: Além dos Estereótipos</span>
          </div>
          
          <article className="article-content">
            <p>O Transtorno de Déficit de Atenção e Hiperatividade (TDAH) é uma das condições neurológicas mais incompreendidas e estigmatizadas da atualidade. Longe dos estereótipos que o reduzem a "falta de disciplina" ou "preguiça", o TDAH é uma diferença neurobiológica real que afeta milhões de pessoas ao redor do mundo. É hora de desmantelar os mitos e compreender a verdadeira natureza dessa condição fascinante e complexa.</p>
            
            <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Cérebro TDAH e conexões neurais" className="animate__animated" id="articleImage1" loading="lazy" />
            
            <p>Contrariando crenças populares, o TDAH não é resultado de má educação ou falta de força de vontade. Pesquisas em neuroimagem revelam diferenças estruturais e funcionais no cérebro de pessoas com TDAH, particularmente nas áreas responsáveis pela função executiva, controle de impulsos e regulação da atenção. Essas diferenças não são deficiências - são variações neurológicas que podem trazer tanto desafios quanto superpoderes únicos.</p>
            
            <div className="highlight-box animate__animated" id="highlightBox">
              <p>"TDAH não é um distúrbio de atenção - é um distúrbio de regulação da atenção. Pessoas com TDAH podem hiperfocalizar em coisas que as interessam." - Dr. Russell Barkley, Especialista em TDAH</p>
            </div>
            
            <p>Um dos maiores equívocos sobre o TDAH é a ideia de que é apenas um "problema de criança". Na realidade, o TDAH é uma condição vitalícia que se manifesta de diferentes formas ao longo do desenvolvimento. Enquanto a hiperatividade pode diminuir com a idade, os desafios com foco, organização e regulação emocional frequentemente persistem na vida adulta, muitas vezes não diagnosticados.</p>
            
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Adulto com TDAH trabalhando criativamente" className="animate__animated" id="articleImage2" loading="lazy" />
            
            <p>O lado positivo do TDAH raramente é discutido. Pessoas com TDAH frequentemente possuem criatividade excepcional, capacidade de pensamento "fora da caixa", alta energia, spontaneidade e uma habilidade única de ver conexões que outros não percebem. Muitos empreendedores, artistas, inventores e líderes visionários têm TDAH - sua "diferença" neurológica é frequentemente a fonte de sua genialidade.</p>
            
            <p>No ambiente de trabalho moderno, as características do TDAH podem ser verdadeiros superpoderes quando adequadamente canalizadas. A capacidade de hiperfoco, o pensamento divergente e a alta energia podem levar a inovações breakthrough. Empresas progressivas estão reconhecendo que a neurodiversidade, incluindo TDAH, traz perspectivas valiosas e soluções criativas para desafios complexos.</p>
          </article> 
          
          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Mitos vs. Realidades sobre o TDAH</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Mito: "TDAH é falta de disciplina"</h3>
                <p>Realidade: TDAH é uma diferença neurobiológica real com base genética. Neuroimagens mostram diferenças estruturais e funcionais no cérebro, especialmente nas áreas executivas.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>2. Mito: "Só crianças têm TDAH"</h3>
                <p>Realidade: TDAH é uma condição vitalícia. Muitos adultos são diagnosticados tardiamente, tendo passado anos lutando sem compreender a causa de suas dificuldades.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>3. Mito: "Pessoas com TDAH não conseguem se concentrar"</h3>
                <p>Realidade: TDAH é um problema de regulação da atenção. Pessoas com TDAH podem hiperfocalizar intensamente em atividades que despertam seu interesse.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>4. Mito: "TDAH é só hiperatividade"</h3>
                <p>Realidade: Existem três tipos de TDAH - hiperativo, desatento e combinado. Muitas pessoas, especialmente mulheres, têm o tipo desatento que passa despercebido.</p>
              </div>
            </div>
          </section>

          {/* Seção de Conclusão */}
          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">Conclusão</h2>
            <div className="conclusao-content">
              <p>É hora de mudarmos a narrativa sobre o TDAH. Em vez de focar apenas nos desafios, precisamos reconhecer e celebrar os dons únicos que acompanham essa diferença neurológica. Pessoas com TDAH não são quebradas e não precisam ser "consertadas" - elas precisam ser compreendidas, apoiadas e valorizadas por suas contribuições únicas.</p>
              
              <p>O TDAH não é uma sentença de limitação, mas uma diferença que, quando bem compreendida e apoiada, pode se tornar uma fonte de força, criatividade e inovação. Cada pessoa com TDAH tem um perfil único de habilidades e desafios, e merece estratégias personalizadas que honrem sua individualidade.</p>
              
              <div className="highlight-box">
                <p>"O TDAH não é um dom, mas também não é uma deficiência. É uma diferença neurológica que pode ser tanto um desafio quanto uma vantagem, dependendo do contexto e do apoio disponível." - Dr. Edward Hallowell</p>
              </div>
              
              <p>Se você tem TDAH ou conhece alguém que tem, lembre-se: você não está sozinho, você não é menos capaz, e você tem dons únicos para oferecer ao mundo. É hora de abraçar sua neuroDIVERSIDADE como uma força, não uma fraqueza.</p>
            </div>
          </section>

          {/* Seção de Quiz Interativo */}
          <section className="quiz-section animate__animated">
            <h2 className="proposta-title">Teste Seu Conhecimento</h2>
            <div className="quiz-container">
              {/* Quiz com React Hooks para gerenciar estado */}
              <QuizTDAHEstereotipos />
            </div>
          </section>

          {/* Seção de Artigos Sugeridos */}
          <ArtigosSugeridos artigoAtualLink="/artigos/tdah-estereotipos" />
        </main>

        {/* Botões flutuantes com estilo inline para garantir visibilidade */}
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