import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import QuizSaudeMentalNeurodivergencia from "../quiz/QuizSaudeMentalNeurodivergencia";
import ShareModal from "../ui/ShareModal";
import ArtigosSugeridos from "../ui/ArtigosSugeridos";

export default function SaudeMentalNeurodivergencia() {
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
          <img src="/imagens/img12.jpg" alt="Saúde mental e neurodivergência" className="hero-bg" loading="lazy" />
          
          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">Saúde Mental e Neurodivergência: Cuidados Essenciais</h1>
            
            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>setembro 22, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>Bem-estar Mental</span>
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
            <span>Saúde Mental e Neurodivergência: Cuidados Essenciais</span>
          </div>
          
          <article className="article-content">
            <p>A saúde mental de pessoas neurodivergentes é um tema complexo que vai muito além das características principais de condições como autismo, TDAH ou dislexia. Pesquisas mostram que neurodivergentes têm taxas significativamente mais altas de ansiedade, depressão e outros desafios de saúde mental - não porque a neurodivergência seja uma "doença", mas devido aos estressores únicos que enfrentam em uma sociedade projetada para cérebros neurotípicos.</p>
            
            <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Bem-estar mental" className="animate__animated" id="articleImage1" loading="lazy" />
            
            <p>O mascaramento constante - processo de camuflar características neurodivergentes para "se encaixar" - pode ser mental e emocionalmente exaustivo. Sensibilidades sensoriais não acomodadas, discriminação social, dificuldades de comunicação e a pressão constante para se adaptar a expectativas neurotípicas criam um estresse crônico que pode impactar profundamente o bem-estar psicológico.</p>
            
            <div className="highlight-box animate__animated" id="highlightBox">
              <p>"Cuidar da saúde mental de pessoas neurodivergentes significa primeiro compreender que seus desafios não são defeitos, mas respostas naturais a um mundo mal adaptado." - Dr. Michelle Mowery</p>
            </div>
            
            <p>É crucial distinguir entre as características naturais da neurodivergência e questões genuínas de saúde mental. Tristeza ocasional por rejeição social não é depressão clínica, mas se tornará depressão se o problema sistêmico não for abordado. Ansiedade em ambientes sensorialmente sobrecarregados é uma resposta natural, mas pode evoluir para transtornos de ansiedade sem suporte adequado.</p>
            
            <img src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Cuidado e apoio" className="animate__animated" id="articleImage2" loading="lazy" />
            
            <p>Profissionais de saúde mental precisam de formação especializada em neurodivergência para oferecer cuidado adequado. Terapias tradicionais podem não funcionar da mesma forma, e medicamentos podem ter efeitos diferentes. O mais importante é criar espaços seguros onde neurodivergentes possam ser autênticos sem medo de julgamento ou pressão para "normalizar" comportamentos.</p>
          </article> 
          
          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Pilares do Bem-estar Neurodivergente</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Autoaceitação Radical</h3>
                <p>Aprender a valorizar características neurodivergentes como diferenças valiosas, não defeitos a serem corrigidos ou escondidos.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>2. Acomodações Sensoriais</h3>
                <p>Criar ambientes que respeitam necessidades sensoriais únicas, reduzindo estressores desnecessários e sobrecarga.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>3. Comunidade e Conexão</h3>
                <p>Encontrar e cultivar relacionamentos com pessoas que compreendem e valorizam a neurodivergência, reduzindo isolamento.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>4. Regulação Emocional</h3>
                <p>Desenvolver estratégias personalizadas para gerenciar emoções intensas e navegar desafios sociais complexos.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>5. Cuidado Profissional Especializado</h3>
                <p>Buscar terapeutas e profissionais com conhecimento específico em neurodivergência e abordagens afirmativas.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>6. Autocuidado Personalizado</h3>
                <p>Desenvolver rotinas de bem-estar que honram necessidades únicas, não seguindo modelos neurotípicos padrão.</p>
              </div>
            </div>
          </section>

          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">Conclusão</h2>
            <div className="conclusao-content">
              <p>O cuidado da saúde mental neurodivergente não é sobre "consertar" ou "normalizar", mas sobre criar condições onde cérebros únicos possam prosperar autenticamente. Quando sociedade, famílias e profissionais compreendem e acomodam adequadamente as necessidades neurodivergentes, vemos uma melhoria dramática no bem-estar geral.</p>
              
              <div className="highlight-box">
                <p>"A verdadeira inclusão não é fazer com que pessoas neurodivergentes se encaixem no mundo neurotípico, mas criar um mundo onde todos os tipos de cérebros possam prosperar." - Ari Ne'eman</p>
              </div>
              
              <p>O futuro da saúde mental neurodivergente está em abordagens afirmativas que celebram a diversidade neurológica enquanto fornecem suporte genuíno para desafios reais. Quando paramos de tentar "curar" a neurodivergência e começamos a cultivar ambientes verdadeiramente inclusivos, descobrimos que muitos "problemas de saúde mental" eram na verdade problemas de adaptação social - e esses podemos resolver juntos.</p>
            </div>
          </section>

          <section className="quiz-section animate__animated">
            <h2 className="proposta-title">Teste Seu Conhecimento</h2>
            <div className="quiz-container">
              <QuizSaudeMentalNeurodivergencia />
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