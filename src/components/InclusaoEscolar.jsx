import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Quiz from "./Quiz";
import ShareModal from "./ShareModal";

export default function InclusaoEscolar() {
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
          <img src="/imagens/img6.jpg" alt="Inclusão escolar para neurodivergentes" className="hero-bg" loading="lazy" />
          
          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">Inclusão Escolar para Neurodivergentes</h1>
            
            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>setembro 20, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>Educação Inclusiva</span>
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
            <span>Inclusão Escolar para Neurodivergentes</span>
          </div>
          
          <article className="article-content">
            <p>A inclusão escolar de estudantes neurodivergentes representa um dos maiores desafios e oportunidades da educação contemporânea. Mais do que simplesmente colocar crianças com diferentes perfis neurológicos na mesma sala de aula, a verdadeira inclusão requer transformações profundas na forma como pensamos, organizamos e implementamos a educação.</p>
            
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Sala de aula inclusiva" className="animate__animated" id="articleImage1" loading="lazy" />
            
            <p>Estudantes neurodivergentes - incluindo aqueles com autismo, TDAH, dislexia, e outras condições neurológicas - possuem estilos únicos de aprendizagem, processamento de informações e interação social. Quando os ambientes educacionais são projetados para acomodar essa diversidade, todos os estudantes se beneficiam de métodos de ensino mais criativos, flexíveis e personalizados.</p>
            
            <div className="highlight-box animate__animated" id="highlightBox">
              <p>"A inclusão não é trazer pessoas para dentro do que já existe; é fazer um espaço novo, melhor, para todos." - Dr. Janice Fialka, Educadora e Defensora da Inclusão</p>
            </div>
            
            <p>A implementação bem-sucedida da inclusão escolar requer uma abordagem multifacetada. Professores precisam de formação adequada para compreender as necessidades individuais e aplicar estratégias pedagógicas diversificadas. O ambiente físico deve ser adaptado para reduzir sobrecarga sensorial e promover concentração. Materiais didáticos devem ser acessíveis e apresentados em múltiplos formatos.</p>
            
            <img src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Professora trabalhando com estudantes diversos" className="animate__animated" id="articleImage2" loading="lazy" />
            
            <p>Além dos aspectos acadêmicos, a inclusão escolar deve abordar o desenvolvimento social e emocional. Programas de sensibilização ajudam estudantes neurotípicos a compreender e valorizar a neurodiversidade, enquanto suportes específicos ajudam estudantes neurodivergentes a desenvolver habilidades sociais e de autorregulação em ambientes seguros e acolhedores.</p>
          </article> 
          
          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Estratégias para Inclusão Escolar Efetiva</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Design Universal para Aprendizagem (DUA)</h3>
                <p>Criar currículos e atividades que sejam acessíveis a diferentes estilos de aprendizagem desde o início, não como adaptações posteriores.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>2. Ambientes Sensorialmente Conscientes</h3>
                <p>Adaptar iluminação, ruídos e organização espacial para reduzir sobrecarga sensorial e promover bem-estar de todos os estudantes.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>3. Colaboração Interdisciplinar</h3>
                <p>Trabalho conjunto entre professores, terapeutas, psicólogos e famílias para criar planos educacionais individualizados e efetivos.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>4. Tecnologia Assistiva</h3>
                <p>Uso de ferramentas tecnológicas para superar barreiras de comunicação, organização e acesso ao conteúdo curricular.</p>
              </div>
              
              <div className="curiosidade-item">
                <h3>5. Educação para Neurodiversidade</h3>
                <p>Programas que ensinam toda a comunidade escolar sobre neurodiversidade, promovendo aceitação e valorização das diferenças.</p>
              </div>
            </div>
          </section>

          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">Conclusão</h2>
            <div className="conclusao-content">
              <p>A inclusão escolar de neurodivergentes não é apenas uma questão de direitos humanos - é uma oportunidade de transformar a educação para melhor. Quando escolas abraçam verdadeiramente a neurodiversidade, criam ambientes mais criativos, empáticos e efetivos para todos.</p>
              
              <div className="highlight-box">
                <p>"Uma escola inclusiva é aquela que se transforma para atender à diversidade de seus alunos, não uma que espera que os alunos se adaptem a ela." - Dr. Windyz Ferreira, Pesquisadora em Educação Especial</p>
              </div>
              
              <p>O caminho para a verdadeira inclusão requer investimento em formação de professores, adaptação de currículos, mudanças estruturais e, principalmente, uma mudança de mindset. Quando vemos a neurodivergência como uma variação natural da humanidade a ser celebrada, não como um déficit a ser corrigido, abrimos portas para um futuro educacional mais rico e equitativo.</p>
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
              <div className="artigo-sugerido" onClick={() => window.location.href='/tdah-estereotipos'}>
                <img src="/imagens/img2.jpg" alt="TDAH" loading="lazy" />
                <h3>TDAH: Além dos Estereótipos</h3>
                <p>Desmistificando conceitos sobre TDAH e promovendo compreensão.</p>
                <span className="leia-mais">Ler artigo →</span>
              </div>
              <div className="artigo-sugerido" onClick={() => window.location.href='/autismo-comunicacao'}>
                <img src="/imagens/img3.jpg" alt="Autismo" loading="lazy" />
                <h3>Autismo e Comunicação</h3>
                <p>Estratégias para inclusão e acessibilidade.</p>
                <span className="leia-mais">Ler artigo →</span>
              </div>
              <div className="artigo-sugerido" onClick={() => window.location.href='/tecnologia-desafio'}>
                <img src="/imagens/img5.jpg" alt="Tecnologia" loading="lazy" />
                <h3>Tecnologia: Aliada ou Desafio?</h3>
                <p>Como a tecnologia impacta pessoas neurodivergentes.</p>
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