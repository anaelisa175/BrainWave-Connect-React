import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import QuizAutismoEmprego from "../quiz/QuizAutismoEmprego";
import ShareModal from "../ui/ShareModal";
import ArtigosSugeridos from "../ui/ArtigosSugeridos";

export default function AutismoEmprego() {
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
          <img src="/imagens/img10.jpg" alt="Autismo e emprego" className="hero-bg" loading="lazy" />
          
          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">Autismo e Emprego: Como Incluir?</h1>
            
            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>setembro 22, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>Inclusão Profissional</span>
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
            <span>Autismo e Emprego: Como Incluir?</span>
          </div>
          
          <article className="article-content">
            <p>A inclusão de pessoas autistas no mercado de trabalho representa um dos maiores desafios - e oportunidades - da sociedade moderna. Enquanto o desemprego entre autistas alcança taxas alarmantes de até 85%, empresas que abraçam a neurodiversidade descobrem talentos excepcionais, perspectivas únicas e contribuições valiosas que transformam equipes e impulsionam a inovação.</p>
            
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Ambiente de trabalho inclusivo" className="animate__animated" id="articleImage1" loading="lazy" />
            
            <p>Pessoas autistas frequentemente possuem habilidades extraordinárias: atenção meticulosa aos detalhes, capacidade de identificar padrões complexos, pensamento analítico rigoroso, honestidade direta, lealdade excepcional e capacidade de hiperfoco em áreas de interesse. Essas qualidades são altamente valorizadas em diversos setores, desde tecnologia e engenharia até pesquisa, contabilidade e design.</p>
            
            <div className="highlight-box animate__animated" id="highlightBox">
              <p>"Quando você contrata uma pessoa autista, você não está apenas fazendo caridade. Você está adquirindo um talento único que pode revolucionar sua empresa." - Temple Grandin</p>
            </div>
            
            <p>O desafio não está na capacidade dos autistas, mas na necessidade de adaptações simples que permitam que seus talentos floresçam. Ambientes de trabalho sensorialmente amigáveis, comunicação clara e direta, rotinas previsíveis e apoio adequado podem transformar o potencial em performance excepcional.</p>
            
            <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Colaboração no trabalho" className="animate__animated" id="articleImage2" loading="lazy" />
            
            <p>Empresas como Microsoft, SAP, Ford, JPMorgan Chase e muitas outras já implementaram programas específicos de contratação de autistas, reportando não apenas benefícios sociais, mas também vantagens competitivas significativas. Esses profissionais frequentemente superam expectativas, trazendo precisão, inovação e dedicação exemplar às suas funções.</p>
          </article> 
          
          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Estratégias para Inclusão no Trabalho</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Adaptações Ambientais</h3>
                <p>Criar espaços com iluminação suave, reduzir ruídos desnecessários, oferecer áreas silenciosas e permitir uso de fones de ouvido quando apropriado.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>2. Comunicação Clara</h3>
                <p>Fornecer instruções específicas, evitar linguagem ambígua, usar comunicação escrita quando necessário e estabelecer expectativas claras.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>3. Flexibilidade de Horários</h3>
                <p>Permitir horários alternativos, trabalho remoto quando possível e pausas regulares para acomodar necessidades individuais.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>4. Mentoria e Suporte</h3>
                <p>Designar mentores compreensivos, oferecer treinamento para equipes e criar redes de apoio internas.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>5. Processo de Seleção Adaptado</h3>
                <p>Modificar entrevistas tradicionais, focar em habilidades práticas, permitir demonstrações de trabalho e avaliar potencial além das convenções.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>6. Desenvolvimento Contínuo</h3>
                <p>Oferecer treinamentos específicos, oportunidades de crescimento personalizadas e feedback construtivo regular.</p>
              </div>
            </div>
          </section>

          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">Conclusão</h2>
            <div className="conclusao-content">
              <p>A inclusão de autistas no mercado de trabalho não é apenas uma questão de responsabilidade social - é uma estratégia inteligente de negócios. Quando oferecemos oportunidades adequadas e apoio necessário, descobrimos talentos excepcionais que podem impulsionar inovação, melhorar qualidade e trazer perspectivas valiosas.</p>
              
              <div className="highlight-box">
                <p>"A diversidade não é apenas sobre fazer a coisa certa. É sobre fazer a coisa inteligente para os negócios." - CEO da Microsoft, Satya Nadella</p>
              </div>
              
              <p>O futuro do trabalho é inclusivo. Empresas que reconhecem e cultivam o potencial de todos os tipos de mentes não apenas criam ambientes mais justos, mas também se posicionam como líderes em inovação e excelência. A neurodiversidade não é um desafio a ser superado, mas um recurso valioso a ser celebrado e aproveitado.</p>
            </div>
          </section>

          <section className="quiz-section animate__animated">
            <h2 className="proposta-title">Teste Seu Conhecimento</h2>
            <div className="quiz-container">
              <QuizAutismoEmprego />
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