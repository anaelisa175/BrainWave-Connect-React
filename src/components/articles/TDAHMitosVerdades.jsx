import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import QuizTDAHMitosVerdades from "../quiz/QuizTDAHMitosVerdades";
import ShareModal from "../ui/ShareModal";
import ArtigosSugeridos from "../ui/ArtigosSugeridos";

export default function TDAHMitosVerdades() {
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
          <img src="/imagens/img13.jpg" alt="TDAH mitos e verdades" className="hero-bg" loading="lazy" />
          
          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">TDAH: Mitos e Verdades</h1>
            
            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>setembro 22, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>Desmistificação</span>
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
            <span>TDAH: Mitos e Verdades</span>
          </div>
          
          <article className="article-content">
            <p>O Transtorno de Déficit de Atenção e Hiperatividade (TDAH) é uma das condições neurológicas mais mal compreendidas de nossa época. Cercado por décadas de desinformação, estereótipos prejudiciais e simplificações excessivas, o TDAH real é muito mais complexo e fascinante do que a maioria das pessoas imagina. É hora de separar os fatos da ficção e descobrir a verdade científica por trás desta condição neurológica única.</p>
            
            <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Pesquisa científica sobre TDAH" className="animate__animated" id="articleImage1" loading="lazy" />
            
            <p>Pesquisas modernas em neurociência revelam que o TDAH não é resultado de "falta de disciplina", "excesso de açúcar" ou "educação permissiva". É uma diferença neurológica real, observável em exames de neuroimagem, com forte componente genético e características neuroquímicas específicas. Compreender esses fatos é fundamental para combater o estigma e promover apoio adequado.</p>
            
            <div className="highlight-box animate__animated" id="highlightBox">
              <p>"TDAH não é um distúrbio de comportamento. É uma condição neurológica que afeta como o cérebro processa informações e regula atenção." - Dr. Russell Barkley</p>
            </div>
            
            <p>Os mitos sobre TDAH não são apenas imprecisos - são prejudiciais. Eles impedem diagnósticos corretos, perpetuam estigma social, levam a tratamentos inadequados e fazem com que milhões de pessoas vivam sem compreender suas próprias necessidades neurológicas. Desmistificar esses equívocos é um passo essencial para criar uma sociedade mais inclusiva e informada.</p>
            
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Cérebro e neurociência" className="animate__animated" id="articleImage2" loading="lazy" />
            
            <p>A verdade sobre TDAH é ao mesmo tempo mais simples e mais complexa do que os mitos sugerem. É simples porque é uma condição neurológica bem documentada com tratamentos eficazes disponíveis. É complexa porque se manifesta de forma única em cada pessoa e interage de maneiras sutis com personalidade, ambiente e experiências de vida.</p>
          </article> 
          
          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Mitos vs. Verdades sobre TDAH</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>❌ MITO: "TDAH é causado por excesso de açúcar"</h3>
                <p><strong>✅ VERDADE:</strong> Estudos científicos não encontram correlação entre consumo de açúcar e TDAH. É uma diferença neurológica com forte base genética (70-80% de herdabilidade).</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>❌ MITO: "Crianças com TDAH são apenas mal educadas"</h3>
                <p><strong>✅ VERDADE:</strong> TDAH envolve diferenças reais na estrutura e funcionamento cerebral, especialmente nas áreas responsáveis por controle inibitório e atenção executiva.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>❌ MITO: "TDAH desaparece na adolescência"</h3>
                <p><strong>✅ VERDADE:</strong> TDAH é uma condição vitalícia. Embora sintomas possam mudar com a idade, cerca de 60-70% continuam apresentando características na idade adulta.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>❌ MITO: "Medicamentos para TDAH são perigosos e viciantes"</h3>
                <p><strong>✅ VERDADE:</strong> Medicamentos para TDAH, quando prescritos adequadamente, são seguros e eficazes. Estudos mostram que tratamento reduz riscos de abuso de substâncias.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>❌ MITO: "TDAH afeta apenas meninos hiperativo"</h3>
                <p><strong>✅ VERDADE:</strong> TDAH afeta igualmente meninos e meninas, mas se manifesta diferentemente. Meninas frequentemente apresentam sintomas internalizados, sendo subdiagnosticadas.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>❌ MITO: "Pessoas com TDAH não conseguem se concentrar"</h3>
                <p><strong>✅ VERDADE:</strong> TDAH é um distúrbio de regulação da atenção. Pessoas podem ter hiperfoco em atividades interessantes e dificuldade com tarefas monótonas.</p>
              </div>
            </div>
          </section>

          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">Conclusão</h2>
            <div className="conclusao-content">
              <p>Desmistificar o TDAH é mais do que uma questão de precisão científica - é uma questão de justiça social. Quando compreendemos a verdade sobre essa condição neurológica, podemos oferecer apoio adequado, reduzir estigma e permitir que pessoas com TDAH prosperem autenticamente.</p>
              
              <div className="highlight-box">
                <p>"A educação é a arma mais poderosa que você pode usar para mudar o mundo." - Nelson Mandela. Isso inclui educar sobre neurodivergência.</p>
              </div>
              
              <p>O futuro do TDAH está em abraçar tanto os desafios quanto as forças que essa condição traz. Quando a sociedade compreende que TDAH não é um "defeito" a ser "curado", mas uma variação neurológica a ser compreendida e acomodada, criamos espaços onde cérebros únicos podem contribuir com sua máxima capacidade para o benefício de todos.</p>
            </div>
          </section>

          <section className="quiz-section animate__animated">
            <h2 className="proposta-title">Teste Seu Conhecimento</h2>
            <div className="quiz-container">
              <QuizTDAHMitosVerdades />
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