import React, { useState, useEffect } from "react";

const depoimentosData = [
  // Autismo
  {
    id: 1,
    nome: "Maria Silva",
    idade: 28,
    condicao: "Autismo",
    texto: "O BrainWave Connect transformou minha vida. Aqui encontrei uma comunidade que me compreende e recursos que me ajudaram a desenvolver habilidades sociais de forma natural e respeitosa.",
    foto: "/imagens/img1.jpg",
    profissao: "Desenvolvedora de Software",
    destaque: true
  },
  {
    id: 6,
    nome: "Carlos Eduardo",
    idade: 29,
    condicao: "Autismo",
    texto: "Como pai de uma criança autista, encontrei aqui não apenas suporte para mim, mas também recursos valiosos para ajudar meu filho em seu desenvolvimento.",
    foto: "/imagens/img6.jpg",
    profissao: "Engenheiro",
    destaque: true
  },
  {
    id: 7,
    nome: "Beatriz Santos",
    idade: 22,
    condicao: "Autismo",
    texto: "A plataforma me ajudou a entender melhor minhas necessidades sensoriais e encontrar estratégias que tornam meu dia a dia mais confortável e produtivo.",
    foto: "/imagens/img7.jpg",
    profissao: "Estudante de Arte",
    destaque: false
  },
  

  // TDAH
  {
    id: 2,
    nome: "João Santos",
    idade: 35,
    condicao: "TDAH",
    texto: "Finalmente um espaço onde posso ser eu mesmo! Os artigos e jogos me ajudaram muito a entender melhor meu TDAH e encontrar estratégias que funcionam para mim.",
    foto: "/imagens/img2.jpg",
    profissao: "Designer Gráfico",
    destaque: true
  },
  {
    id: 9,
    nome: "Amanda Costa",
    idade: 27,
    condicao: "TDAH",
    texto: "As técnicas de organização e foco que aprendi aqui revolucionaram minha produtividade. Consegui concluir minha pós-graduação com muito mais facilidade.",
    foto: "/imagens/img9.jpg",
    profissao: "Psicóloga",
    destaque: true
  },
  {
    id: 10,
    nome: "Felipe Oliveira",
    idade: 30,
    condicao: "TDAH",
    texto: "O suporte da comunidade foi fundamental para aceitar meu diagnóstico tardio. Agora sei que não sou 'preguiçoso', apenas tenho um cérebro que funciona diferente.",
    foto: "/imagens/img10.jpg",
    profissao: "Professor",
    destaque: false
  },

  // Dislexia
  {
    id: 3,
    nome: "Ana Carolina",
    idade: 24,
    condicao: "Dislexia",
    texto: "As ferramentas educacionais da plataforma me deram confiança para voltar a estudar. Hoje estou cursando psicologia e ajudando outras pessoas como eu.",
    foto: "/imagens/img3.jpg",
    profissao: "Estudante de Psicologia",
    destaque: true
  },
  {
    id: 11,
    nome: "Gabriel Ferreira",
    idade: 26,
    condicao: "Dislexia",
    texto: "Descobri métodos de leitura e escrita que se adaptam ao meu jeito de aprender. Agora consigo estudar para concursos sem me sentir limitado.",
    foto: "/imagens/img11.jpg",
    profissao: "Contador",
    destaque: true
  },
  {
    id: 12,
    nome: "Camila Rodrigues",
    idade: 19,
    condicao: "Dislexia",
    texto: "A plataforma me mostrou que dislexia não é sinônimo de incapacidade. Desenvolvi estratégias que me ajudam tanto nos estudos quanto no trabalho.",
    foto: "/imagens/img12.jpg",
    profissao: "Estudante de Direito",
    destaque: false
  },

  // Ansiedade Social
  {
    id: 5,
    nome: "Luiza Costa",
    idade: 26,
    condicao: "Ansiedade Social",
    texto: "Através dos recursos da plataforma, aprendi técnicas de manejo da ansiedade que mudaram completamente minha qualidade de vida. Recomendo muito!",
    foto: "/imagens/img5.jpg",
    profissao: "Terapeuta Ocupacional",
    destaque: true
  },
  {
    id: 13,
    nome: "Daniel Martins",
    idade: 32,
    condicao: "Ansiedade Social",
    texto: "Os exercícios de mindfulness e as estratégias de exposição gradual me ajudaram a superar meu medo de falar em público. Hoje faço apresentações com confiança.",
    foto: "/imagens/img13.jpg",
    profissao: "Advogado",
    destaque: true
  },
  {
    id: 14,
    nome: "Priscila Alves",
    idade: 23,
    condicao: "Ansiedade Social",
    texto: "Encontrei aqui um espaço seguro para praticar habilidades sociais. O chat moderado foi perfeito para começar a me expressar sem julgamentos.",
    foto: "/imagens/img14.jpg",
    profissao: "Enfermeira",
    destaque: false
  },

  // Síndrome de Asperger
  {
    id: 4,
    nome: "Pedro Oliveira",
    idade: 31,
    condicao: "Síndrome de Asperger",
    texto: "O fórum de discussões me conectou com pessoas incríveis. Compartilhar experiências e dicas tem sido fundamental para meu crescimento pessoal e profissional.",
    foto: "/imagens/img4.jpg",
    profissao: "Analista de Dados",
    destaque: true
  },
  {
    id: 15,
    nome: "Renata Souza",
    idade: 29,
    condicao: "Síndrome de Asperger",
    texto: "A plataforma me ajudou a entender melhor as nuances sociais e desenvolver estratégias para navegar em situações sociais complexas no trabalho.",
    foto: "/imagens/img15.jpg",
    profissao: "Cientista de Dados",
    destaque: true
  },
 {
    id: 16,
    nome: "Renata Souza",
    idade: 29,
    condicao: "Síndrome de Asperger",
    texto: "A plataforma me ajudou a entender melhor as nuances sociais e desenvolver estratégias para navegar em situações sociais complexas no trabalho.",
    foto: "/imagens/img15.jpg",
    profissao: "Cientista de Dados",
    destaque: true
  }
];

const categoriasFilters = [
  { id: 'todos', label: 'Todos os Depoimentos' },
  { id: 'autismo', label: 'Autismo' },
  { id: 'tdah', label: 'TDAH' },
  { id: 'dislexia', label: 'Dislexia' },
  { id: 'ansiedade', label: 'Ansiedade Social' },
  { id: 'asperger', label: 'Síndrome de Asperger' }
];

// Componente de imagem otimizada
const OptimizedImage = ({ src, alt, className, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setLoaded(true);
  };

  return (
    <img 
      src={error ? "/imagens/img1.jpg" : src}
      alt={alt}
      className={`${className} ${!loaded ? 'loading' : ''}`}
      onLoad={handleLoad}
      onError={handleError}
      loading="lazy"
      {...props}
    />
  );
};

export default function TestimonialsSection() {
  const [filtroAtivo, setFiltroAtivo] = useState('todos');
  const [depoimentoExpandido, setDepoimentoExpandido] = useState(null);

  const filtrarDepoimentos = () => {
    if (filtroAtivo === 'todos') return depoimentosData;
    
    const filtrosMap = {
      'autismo': ['Autismo'],
      'tdah': ['TDAH'],
      'dislexia': ['Dislexia'],
      'ansiedade': ['Ansiedade Social'],
      'asperger': ['Síndrome de Asperger']
    };

    const condicoesParaFiltrar = filtrosMap[filtroAtivo] || [];
    
    return depoimentosData.filter(depoimento => 
      condicoesParaFiltrar.some(condicao => 
        depoimento.condicao.toLowerCase().includes(condicao.toLowerCase())
      )
    );
  };

  const toggleDepoimento = (id) => {
    setDepoimentoExpandido(depoimentoExpandido === id ? null : id);
  };

  const handleFilterClick = (filterId) => {
    setFiltroAtivo(filterId);
    
    // Scroll suave para o título das histórias em destaque
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        const titleElement = document.getElementById('featured-stories-title');
        if (titleElement) {
          const rect = titleElement.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const targetPosition = rect.top + scrollTop - 90; // 90px de offset para mostrar o título completo
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    }, 200); // Aumentado para 200ms para dar tempo do conteúdo atualizar
  };

  const depoimentosFiltrados = filtrarDepoimentos();

  return (
    <section className="testimonials-section">
      {/* Header da Seção - agora dentro do card de filtros */}
      <div className="testimonials-filters">
        <div className="testimonials-header-card">
          <h1>Depoimentos da Nossa Comunidade</h1>
          <p>Conheça as histórias inspiradoras de pessoas que encontraram apoio, compreensão e crescimento em nossa plataforma.</p>
        </div>
        
        <div className="filters-container">
          {categoriasFilters.map(categoria => (
            <button 
              key={categoria.id}
              className={`filter-btn ${filtroAtivo === categoria.id ? 'active' : ''}`}
              onClick={() => handleFilterClick(categoria.id)}
            >
              {categoria.label}
            </button>
          ))}
        </div>
      </div>

      {/* Container de Depoimentos */}
      <div id="testimonials-stories" className="testimonials-container">
        {/* Depoimentos em Destaque */}
        <div className="featured-testimonials">
          <h2 id="featured-stories-title">
            {filtroAtivo === 'todos' 
              ? 'Histórias em Destaque' 
              : `Histórias em Destaque - ${categoriasFilters.find(c => c.id === filtroAtivo)?.label || 'Categoria'}`
            }
          </h2>
          <div className="featured-grid">
            {depoimentosFiltrados
              .filter(depoimento => depoimento.destaque)
              .slice(0, filtroAtivo === 'todos' ? 6 : 4)
              .map(depoimento => (
                <div key={depoimento.id} className="featured-testimonial-card">
                  <div className="testimonial-photo">
                    <OptimizedImage 
                      src={depoimento.foto} 
                      alt={depoimento.nome}
                    />
                    <div className="condition-badge">{depoimento.condicao}</div>
                  </div>
                  <div className="testimonial-content">
                    <h3>{depoimento.nome}</h3>
                    <p className="profession">{depoimento.profissao}</p>
                    <p className="age">{depoimento.idade} anos</p>
                    <blockquote>"{depoimento.texto}"</blockquote>
                  </div>
                </div>
              ))}
          </div>
          
          {/* Mensagem quando não há depoimentos em destaque para a categoria */}
          {depoimentosFiltrados.filter(d => d.destaque).length === 0 && filtroAtivo !== 'todos' && (
            <div className="no-featured-message">
              <p>Ainda não temos histórias em destaque para esta categoria, mas você pode ver todos os depoimentos abaixo!</p>
            </div>
          )}
        </div>

        {/* Todos os Depoimentos */}
        <div className="all-testimonials">
          <h2>Todos os Depoimentos</h2>
          <div className="testimonials-grid">
            {depoimentosFiltrados.map(depoimento => (
              <div key={depoimento.id} className="testimonial-card">
                <div className="card-header">
                  <OptimizedImage 
                    src={depoimento.foto} 
                    alt={depoimento.nome} 
                    className="avatar"
                  />
                  <div className="user-info">
                    <h4>{depoimento.nome}</h4>
                    <p className="profession">{depoimento.profissao}</p>
                    <span className="condition-tag">{depoimento.condicao}</span>
                  </div>
                </div>
                
                <div className="card-content">
                  <blockquote 
                    className={`testimonial-text ${depoimentoExpandido === depoimento.id ? 'expanded' : ''}`}
                  >
                    "{depoimento.texto}"
                  </blockquote>
                  
                  {depoimento.texto.length > 120 && (
                    <button 
                      className="read-more-btn"
                      onClick={() => toggleDepoimento(depoimento.id)}
                    >
                      {depoimentoExpandido === depoimento.id ? 'Ler menos' : 'Ler mais'}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="testimonials-cta">
          <div className="cta-content">
            <h2>Compartilhe Sua História</h2>
            <p>Sua jornada pode inspirar e ajudar outras pessoas da nossa comunidade. Compartilhe sua experiência conosco!</p>
            <button className="cta-button">Enviar Depoimento</button>
          </div>
        </div>
      </div>
    </section>
  );
}
