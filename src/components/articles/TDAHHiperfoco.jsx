import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import QuizTDAHHiperfoco from "../quiz/QuizTDAHHiperfoco";
import ShareModal from "../ui/ShareModal";
import ArtigosSugeridos from "../ui/ArtigosSugeridos";

export default function TDAHHiperfoco() {
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
          <img src="/imagens/img11.jpg" alt="TDAH e hiperfoco" className="hero-bg" loading="lazy" />
          
          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">TDAH e Hiperfoco: Uma Superpotência?</h1>
            
            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>setembro 22, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>Hiperfoco TDAH</span>
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
            <span>TDAH e Hiperfoco: Uma Superpotência?</span>
          </div>
          
          <article className="article-content">
            <p>O hiperfoco é talvez o aspecto mais fascinante e paradoxal do TDAH. Enquanto pessoas com TDAH são frequentemente rotuladas como "desatentas", elas possuem a capacidade única de mergulhar tão profundamente em atividades interessantes que o mundo ao redor simplesmente desaparece. Essa intensa concentração pode se tornar uma verdadeira superpotência quando compreendida e direcionada adequadamente.</p>
            
            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Pessoa em estado de hiperfoco" className="animate__animated" id="articleImage1" loading="lazy" />
            
            <p>Durante episódios de hiperfoco, pessoas com TDAH podem trabalhar por horas seguidas sem perceber o tempo passar, esquecer de comer, ignorar interrupções e produzir trabalho de qualidade excepcional. É como se o cérebro TDAH encontrasse sua "frequência ideal", onde a dopamina flui adequadamente e a concentração se torna laser-focada em uma tarefa específica.</p>
            
            <div className="highlight-box animate__animated" id="highlightBox">
              <p>"Hiperfoco não é falta de atenção. É atenção tão intensa que tudo mais desaparece." - Dr. Ned Hallowell</p>
            </div>
            
            <p>O hiperfoco pode levar a descobertas científicas revolucionárias, obras de arte extraordinárias, códigos de programação elegantes, soluções criativas para problemas complexos e níveis de produtividade que impressionam até mesmo os neurotípicos. Muitos grandes inovadores e criadores da história provavelmente experimentaram esse estado de concentração intensa.</p>
            
            <img src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Inovação e criatividade" className="animate__animated" id="articleImage2" loading="lazy" />
            
            <p>No entanto, o hiperfoco também pode ser uma faca de dois gumes. Pode levar ao esquecimento de responsabilidades importantes, negligência de necessidades básicas como alimentação e sono, ou fixação em atividades menos produtivas. O desafio está em aprender a canalizar essa capacidade para objetivos construtivos e desenvolver estratégias para "sair" do hiperfoco quando necessário.</p>
          </article> 
          
          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Como Transformar Hiperfoco em Superpotência</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Identificar Gatilhos</h3>
                <p>Reconhecer quais atividades, tópicos ou projetos naturalmente desencadeiam episódios de hiperfoco para aproveitá-los estrategicamente.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>2. Criar Condições Ideais</h3>
                <p>Estabelecer ambiente adequado, eliminar distrações desnecessárias e garantir recursos disponíveis antes de iniciar sessões focadas.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>3. Definir Limites Saudáveis</h3>
                <p>Usar alarmes, lembretes externos e sistemas de apoio para garantir que necessidades básicas não sejam negligenciadas.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>4. Programar Sessões</h3>
                <p>Tentar agendar trabalhos importantes durante períodos quando o hiperfoco é mais provável de ocorrer naturalmente.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>5. Aproveitar Paixões</h3>
                <p>Alinhar projetos importantes com interesses genuínos para maximizar as chances de atingir estado de hiperfoco produtivo.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>6. Desenvolver Transições</h3>
                <p>Criar rituais e estratégias para "entrar" e "sair" do hiperfoco de forma mais controlada e intencional.</p>
              </div>
            </div>
          </section>

          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">Conclusão</h2>
            <div className="conclusao-content">
              <p>O hiperfoco é realmente uma superpotência do cérebro TDAH quando bem compreendido e gerenciado. Não se trata de "consertar" essa característica, mas de aprender a direcioná-la de forma que beneficie tanto a pessoa quanto seus objetivos de vida.</p>
              
              <div className="highlight-box">
                <p>"O hiperfoco é o cérebro TDAH funcionando no seu melhor. É onde a magia acontece." - Dr. Russell Barkley</p>
              </div>
              
              <p>Com estratégias adequadas, pessoas com TDAH podem transformar o hiperfoco em uma vantagem competitiva significativa. A chave está em honrar essa capacidade única, criar estruturas de apoio adequadas e aprender a navegar entre períodos de hiperfoco produtivo e as demandas da vida cotidiana. Quando bem canalizado, o hiperfoco pode levar a realizações extraordinárias e contribuições valiosas para o mundo.</p>
            </div>
          </section>

          <section className="quiz-section animate__animated">
            <h2 className="proposta-title">Teste Seu Conhecimento</h2>
            <div className="quiz-container">
              <QuizTDAHHiperfoco />
            </div>
          </section>

          <ArtigosSugeridos artigoAtualLink="/artigos/tdah-hiperfoco" />
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