'use client';

import { useState, useMemo, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles_premium.css';

interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  ageGroup: string;
  icon: string;
  benefits: string[];
  link: string;
  tags: string[];
  estimatedTime: string;
}

interface VideoEpisode {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  duration: string;
  episode: number;
  season: number;
  topics: string[];
  ageGroup: string;
}

const games: Game[] = [
  {
    id: 'memoria',
    title: 'Jogo da Memória das Emoções',
    description: 'Desenvolva habilidades de memorização e reconhecimento emocional através de um desafio interativo de correspondência de cartas. Uma ferramenta educativa que combina diversão com aprendizado socioemocional.',
    category: 'Memória',
    difficulty: 'Fácil',
    ageGroup: '4-12 anos',
    icon: '🧠',
    benefits: ['Melhora a concentração', 'Desenvolve memória visual', 'Reconhecimento emocional', 'Autocontrole'],
    link: '/jogos/memoria',
    tags: ['emoções', 'concentração', 'visual'],
    estimatedTime: '10-15 min'
  },
  {
    id: 'forca',
    title: 'Jogo de Descoberta de Palavras',
    description: 'Expanda o vocabulário e aprimore habilidades linguísticas através de um jogo estratégico de adivinhação de palavras. Ideal para desenvolvimento de competências de leitura e escrita.',
    category: 'Linguagem',
    difficulty: 'Médio',
    ageGroup: '6-14 anos',
    icon: '📝',
    benefits: ['Expande vocabulário', 'Melhora ortografia', 'Desenvolve raciocínio', 'Pensamento estratégico'],
    link: '/jogos/forca',
    tags: ['palavras', 'vocabulário', 'estratégia'],
    estimatedTime: '5-10 min'
  },
  {
    id: 'quebra-cabeca',
    title: 'Quebra-Cabeça Deslizante',
    description: 'Aprimore habilidades de raciocínio lógico e percepção espacial através de desafios progressivos de quebra-cabeça. Uma experiência envolvente que estimula o pensamento estratégico.',
    category: 'Lógica',
    difficulty: 'Difícil',
    ageGroup: '8+ anos',
    icon: '🧩',
    benefits: ['Desenvolve lógica espacial', 'Melhora coordenação', 'Estimula persistência', 'Planejamento estratégico'],
    link: '/jogos/quebra-cabeca',
    tags: ['lógica', 'espacial', 'estratégia'],
    estimatedTime: '15-30 min'
  },
  {
    id: 'labirinto',
    title: 'Labirinto das Palavras',
    description: 'Encontre o caminho formando palavras corretas. Desenvolve habilidades de leitura e concentração através de navegação estratégica.',
    category: 'Linguagem',
    difficulty: 'Médio',
    ageGroup: '6-8 anos',
    icon: '🗺️',
    benefits: ['Melhora leitura', 'Desenvolve concentração', 'Pensamento estratégico', 'Vocabulário'],
    link: '/jogos/labirinto',
    tags: ['linguagem', 'leitura', 'concentração'],
    estimatedTime: '10-20 min'
  },
  {
    id: 'numerico',
    title: 'Quebra-Cabeça Numérico',
    description: 'Organize os números na sequência correta para vencer. Desenvolve raciocínio matemático e sequencial de forma lúdica.',
    category: 'Números',
    difficulty: 'Médio',
    ageGroup: '6-8 anos',
    icon: '🔢',
    benefits: ['Raciocínio matemático', 'Sequenciamento', 'Lógica numérica', 'Concentração'],
    link: '/jogos/numerico',
    tags: ['números', 'raciocínio', 'sequência'],
    estimatedTime: '10-15 min'
  },
  {
    id: 'cores',
    title: 'Detetive de Cores',
    description: 'Identifique e combine cores para resolver mistérios. Desenvolve reconhecimento visual e habilidades de associação.',
    category: 'Cores',
    difficulty: 'Fácil',
    ageGroup: '3-5 anos',
    icon: '🎨',
    benefits: ['Reconhecimento de cores', 'Atenção visual', 'Associação', 'Coordenação'],
    link: '/jogos/cores',
    tags: ['cores', 'reconhecimento', 'atenção'],
    estimatedTime: '5-10 min'
  },
  {
    id: 'expressoes',
    title: 'Expressões em Ação',
    description: 'Reconheça expressões faciais em diferentes situações. Desenvolve inteligência emocional e habilidades sociais.',
    category: 'Emocional',
    difficulty: 'Médio',
    ageGroup: '6-8 anos',
    icon: '😊',
    benefits: ['Inteligência emocional', 'Reconhecimento facial', 'Habilidades sociais', 'Empatia'],
    link: '#em-breve',
    tags: ['emoções', 'social', 'reconhecimento'],
    estimatedTime: '10-15 min'
  },
  {
    id: 'atencao',
    title: 'Atenção ao Detalhe',
    description: 'Encontre diferenças entre imagens para treinar a atenção. Desenvolve capacidade de observação e concentração.',
    category: 'Atenção',
    difficulty: 'Difícil',
    ageGroup: '9-12 anos',
    icon: '🔍',
    benefits: ['Atenção ao detalhe', 'Concentração', 'Observação', 'Paciência'],
    link: '#em-breve',
    tags: ['atenção', 'concentração', 'detalhes'],
    estimatedTime: '15-25 min'
  },
  {
    id: 'animais',
    title: 'Lógica Animal',
    description: 'Classifique animais por categorias e características. Desenvolve pensamento lógico e conhecimento sobre natureza.',
    category: 'Lógica',
    difficulty: 'Médio',
    ageGroup: '6-8 anos',
    icon: '🦁',
    benefits: ['Classificação', 'Lógica', 'Conhecimento geral', 'Categorização'],
    link: '#em-breve',
    tags: ['lógica', 'classificação', 'conhecimento'],
    estimatedTime: '10-20 min'
  },
  {
    id: 'sons',
    title: 'Som das Emoções',
    description: 'Identifique os sons e combine com as emoções correspondentes. Desenvolve percepção auditiva e reconhecimento emocional.',
    category: 'Emocional',
    difficulty: 'Fácil',
    ageGroup: '3-5 anos',
    icon: '🔊',
    benefits: ['Percepção auditiva', 'Reconhecimento emocional', 'Associação', 'Concentração'],
    link: '#em-breve',
    tags: ['emoções', 'audição', 'reconhecimento'],
    estimatedTime: '5-10 min'
  },
  {
    id: 'formas',
    title: 'Formas Geométricas',
    description: 'Monte objetos usando formas geométricas básicas. Desenvolve percepção espacial e criatividade.',
    category: 'Lógica',
    difficulty: 'Fácil',
    ageGroup: '3-5 anos',
    icon: '▲',
    benefits: ['Percepção espacial', 'Criatividade', 'Coordenação', 'Formas geométricas'],
    link: '#em-breve',
    tags: ['formas', 'espacial', 'criatividade'],
    estimatedTime: '10-15 min'
  },
  {
    id: 'caca-palavras',
    title: 'Caça Palavras Divertido',
    description: 'Encontre as palavras escondidas na grade. Desenvolve vocabulário e habilidades de busca visual.',
    category: 'Linguagem',
    difficulty: 'Médio',
    ageGroup: '9-12 anos',
    icon: '🔤',
    benefits: ['Vocabulário', 'Atenção visual', 'Concentração', 'Estratégia'],
    link: '#em-breve',
    tags: ['linguagem', 'vocabulário', 'atenção'],
    estimatedTime: '15-25 min'
  },
  {
    id: 'matematica',
    title: 'Matemática do Faz de Conta',
    description: 'Resolva problemas matemáticos com personagens animados. Torna o aprendizado de matemática divertido e envolvente.',
    category: 'Números',
    difficulty: 'Médio',
    ageGroup: '6-8 anos',
    icon: '🧮',
    benefits: ['Raciocínio matemático', 'Cálculo', 'Resolução de problemas', 'Criatividade'],
    link: '#em-breve',
    tags: ['matemática', 'raciocínio', 'cálculo'],
    estimatedTime: '10-20 min'
  },
  {
    id: 'qc-animais',
    title: 'Quebra-Cabeça de Animais',
    description: 'Monte quebra-cabeças com seus animais favoritos. Desenvolve paciência e coordenação através de imagens atrativas.',
    category: 'Lógica',
    difficulty: 'Fácil',
    ageGroup: '3-5 anos',
    icon: '🐻',
    benefits: ['Coordenação', 'Paciência', 'Reconhecimento', 'Concentração'],
    link: '#em-breve',
    tags: ['lógica', 'animais', 'montagem'],
    estimatedTime: '10-20 min'
  }
];

const categories = [
  { id: 'Todos', name: 'Todos os Jogos', icon: '🎮' },
  { id: 'Memória', name: 'Memória', icon: '🧠' },
  { id: 'Linguagem', name: 'Linguagem', icon: '📝' },
  { id: 'Lógica', name: 'Lógica', icon: '🧩' },
  { id: 'Números', name: 'Números', icon: '🔢' },
  { id: 'Cores', name: 'Cores', icon: '🎨' },
  { id: 'Emocional', name: 'Emocional', icon: '😊' },
  { id: 'Atenção', name: 'Atenção', icon: '🔍' }
];

const pabloEpisodes: VideoEpisode[] = [
  {
    id: 'pablo-01',
    title: 'Pablo - Conhecendo o Pablo',
    description: 'Conheça Pablo, um menino de 5 anos no espectro autista que usa sua imaginação para transformar o mundo real em aventuras mágicas.',
    youtubeId: 'yOs0ZmB_zkHBowfQ', // ID real do Pablo - Episódio 1
    duration: '11:30',
    episode: 1,
    season: 1,
    topics: ['Apresentação', 'Imaginação', 'Autismo'],
    ageGroup: '4-8 anos'
  }
];

export default function JogosPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedDifficulty, setSelectedDifficulty] = useState('Todas');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('Todas');
  const [gameStats, setGameStats] = useState({
    totalGames: 14,
    gamesPlayed: 0,
    averageScore: 0
  });

  const handleGameClick = (game: Game, e: React.MouseEvent) => {
    if (game.link === '#em-breve') {
      e.preventDefault();
      alert(`🚧 O jogo "${game.title}" está em desenvolvimento!\n\n✨ Em breve você poderá desfrutar desta experiência educativa incrível!\n\n🎮 Por enquanto, experimente nossos outros jogos disponíveis.`);
    }
  };

  useEffect(() => {
    // Carregar estatísticas dos jogos do localStorage
    const memoriaRecord = localStorage.getItem('memoriaRecord');
    const forcaRecord = localStorage.getItem('forcaRecord');
    const quebracabecaRecord = localStorage.getItem('quebracabecaRecord');

    let gamesPlayed = 0;
    let totalScore = 0;

    if (memoriaRecord) {
      gamesPlayed++;
      const record = JSON.parse(memoriaRecord);
      totalScore += record.score || 0;
    }
    if (forcaRecord) {
      gamesPlayed++;
      // Para forca, usar vitórias como pontuação
      totalScore += 85;
    }
    if (quebracabecaRecord) {
      gamesPlayed++;
      totalScore += 90;
    }

    setGameStats({
      totalGames: 3,
      gamesPlayed,
      averageScore: gamesPlayed > 0 ? Math.round(totalScore / gamesPlayed) : 0
    });
  }, []);

  const filteredGames = useMemo(() => {
    return games.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          game.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'Todos' || game.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'Todas' || game.difficulty === selectedDifficulty;
      const matchesAgeGroup = selectedAgeGroup === 'Todas' || 
                             game.ageGroup.toLowerCase().includes(selectedAgeGroup.toLowerCase().replace(' anos', ''));
      
      return matchesSearch && matchesCategory && matchesDifficulty && matchesAgeGroup;
    });
  }, [searchTerm, selectedCategory, selectedDifficulty, selectedAgeGroup]);

  const getDifficultyDots = (difficulty: string) => {
    const levels = { 'Fácil': 1, 'Médio': 2, 'Difícil': 3 };
    const level = levels[difficulty as keyof typeof levels] || 1;
    
    return Array.from({ length: 3 }, (_, i) => (
      <div
        key={i}
        className={`jogos-card-difficulty-dot ${i < level ? 'active' : ''}`}
      />
    ));
  };

  return (
    <div className="jogos-container">
      <Header />
      
      {/* Hero Section */}
      <section className="jogos-hero">
        <div className="jogos-hero-background">
          <div className="jogos-hero-pattern"></div>
          <div className="jogos-hero-gradient"></div>
        </div>
        
        <div className="jogos-hero-content">
          <div className="jogos-hero-badge">
            <span className="badge-icon">🎮</span>
            <span>Plataforma Educativa Premium</span>
          </div>
          
          <h1 className="jogos-hero-title">
            <span className="title-gradient">Jogos e Vídeos</span>
            <span className="title-highlight">Educativos BrainWave</span>
          </h1>
          
          <p className="jogos-hero-subtitle">
            Explore nossa coleção cuidadosamente desenvolvida de experiências educativas 
            que combinam <strong>neurociência</strong>, <strong>pedagogia</strong> e <strong>tecnologia</strong>. 
            Cada jogo e vídeo é projetado para estimular o desenvolvimento cognitivo e 
            emocional através de metodologias lúdicas e cientificamente embasadas.
          </p>
          
          <div className="jogos-hero-features">
            <div className="feature-pill">
              <span className="feature-icon">🎯</span>
              <span>6 jogos interativos</span>
            </div>
            <div className="feature-pill">
              <span className="feature-icon">📺</span>
              <span>1 episódio do Pablo</span>
            </div>
            <div className="feature-pill">
              <span className="feature-icon">🚀</span>
              <span>8 em desenvolvimento</span>
            </div>
          </div>
        </div>
        
        <div className="jogos-stats-premium">
          <div className="stats-container">
            <div className="jogos-stat-card">
              <div className="stat-icon">🎮</div>
              <div className="stat-content">
                <span className="stat-number">{gameStats.totalGames}</span>
                <span className="stat-label">Jogos Disponíveis</span>
              </div>
              <div className="stat-decoration"></div>
            </div>
            
            <div className="jogos-stat-card">
              <div className="stat-icon">⭐</div>
              <div className="stat-content">
                <span className="stat-number">{gameStats.gamesPlayed}</span>
                <span className="stat-label">Jogos Explorados</span>
              </div>
              <div className="stat-decoration"></div>
            </div>
            
            <div className="jogos-stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-content">
                <span className="stat-number">{gameStats.averageScore}%</span>
                <span className="stat-label">Progresso Médio</span>
              </div>
              <div className="stat-decoration"></div>
            </div>
          </div>
        </div>
      </section>

      <main className="jogos-main">
        {/* Filtros */}
        <section className="jogos-filters-premium">
          <div className="filters-container">
            <div className="search-section">
              <div className="jogos-search-premium">
                <div className="search-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Pesquisar jogos e vídeos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                {searchTerm && (
                  <button 
                    className="search-clear"
                    onClick={() => setSearchTerm('')}
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            <div className="categories-section">
              <div className="jogos-categories-premium">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`category-pill ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className="category-icon">{category.icon}</span>
                    <span className="category-name">{category.name}</span>
                    {selectedCategory === category.id && (
                      <div className="category-active-indicator"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="additional-filters-section">
              <div className="filter-group">
                <label className="filter-label">Dificuldade</label>
                <div className="custom-select">
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                  >
                    <option value="Todas">Todas</option>
                    <option value="Fácil">🟢 Fácil</option>
                    <option value="Médio">🟡 Médio</option>
                    <option value="Difícil">🔴 Difícil</option>
                  </select>
                </div>
              </div>

              <div className="filter-group">
                <label className="filter-label">Faixa Etária</label>
                <div className="custom-select">
                  <select
                    value={selectedAgeGroup}
                    onChange={(e) => setSelectedAgeGroup(e.target.value)}
                  >
                    <option value="Todas">Todas as idades</option>
                    <option value="4-6">👶 4-6 anos</option>
                    <option value="7-9">🧒 7-9 anos</option>
                    <option value="10-12">👦 10-12 anos</option>
                    <option value="13+">🧑 13+ anos</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="results-counter">
              <span className="results-text">
                {filteredGames.length} {filteredGames.length === 1 ? 'jogo encontrado' : 'jogos encontrados'}
              </span>
            </div>
          </div>
        </section>

        {/* Grid de Jogos */}
        <section className="jogos-grid-premium">
          <div className="grid-container">
            {filteredGames.map(game => (
              <div key={game.id} className="game-card-premium">
                <div className="card-background">
                  <div className="card-gradient"></div>
                  <div className="card-pattern"></div>
                </div>
                
                <div className="card-header">
                  <div className="game-icon-wrapper">
                    <div className="game-icon">{game.icon}</div>
                    <div className="icon-glow"></div>
                  </div>
                  
                  <div className="game-category-badge">
                    {game.category}
                  </div>
                </div>
                
                <div className="card-content">
                  <h3 className="game-title">{game.title}</h3>
                  <p className="game-description">{game.description}</p>
                  
                  <div className="game-tags">
                    {game.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="tag-pill">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="game-meta">
                    <div className="meta-item">
                      <div className="meta-icon">👶</div>
                      <span className="meta-text">{game.ageGroup}</span>
                    </div>
                    
                    <div className="meta-item">
                      <div className="meta-icon">⏱️</div>
                      <span className="meta-text">{game.estimatedTime}</span>
                    </div>
                    
                    <div className="meta-item">
                      <div className="meta-icon">⭐</div>
                      <div className="difficulty-indicator">
                        {getDifficultyDots(game.difficulty)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="game-benefits">
                    <div className="benefits-title">💡 Benefícios:</div>
                    <div className="benefits-list">
                      {game.benefits.slice(0, 2).map((benefit, index) => (
                        <span key={index} className="benefit-item">
                          • {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="card-footer">
                  <a 
                    href={game.link} 
                    className={`play-button ${game.link === '#em-breve' ? 'coming-soon' : 'available'}`}
                    onClick={(e) => handleGameClick(game, e)}
                  >
                    <div className="button-content">
                      <span className="button-icon">
                        {game.link === '#em-breve' ? '🚧' : '🎮'}
                      </span>
                      <span className="button-text">
                        {game.link === '#em-breve' ? 'Em Breve' : 'Jogar Agora'}
                      </span>
                    </div>
                    <div className="button-glow"></div>
                  </a>
                </div>
                
                <div className="card-hover-effect"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Seção de Episódios do Pablo */}
        <section className="pablo-section-premium">
          <div className="pablo-background">
            <div className="pablo-pattern"></div>
            <div className="pablo-gradient"></div>
          </div>
          
          <div className="pablo-header">
            <div className="pablo-badge">
              <span className="badge-icon">📺</span>
              <span>Conteúdo Premium</span>
            </div>
            
            <h2 className="pablo-title">
              <span className="title-main">Episódios do Pablo</span>
              <span className="title-subtitle">Aventuras da Imaginação</span>
            </h2>
            
            <p className="pablo-description">
              Acompanhe Pablo, um menino neurodivergente de 5 anos, em suas aventuras imaginárias! 
              Cada episódio explora temas importantes sobre <strong>autismo</strong>, <strong>neurodiversidade</strong> e 
              <strong>aceitação</strong> de forma educativa e sensível.
            </p>
          </div>

          <div className="pablo-episodes-grid">
            {pabloEpisodes.map((episode) => (
              <div key={episode.id} className="episode-card-premium">
                <div className="episode-background">
                  <div className="episode-gradient"></div>
                </div>
                
                <div className="episode-video-container">
                  <div className="video-wrapper">
                    <iframe
                      src={`https://www.youtube.com/embed/${episode.youtubeId}?rel=0&showinfo=0&modestbranding=1`}
                      className="episode-iframe"
                      allowFullScreen
                      title={episode.title}
                    />
                  </div>
                  <div className="video-overlay">
                    <div className="play-indicator">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="episode-content">
                  <div className="episode-header">
                    <div className="episode-meta">
                      <span className="episode-badge">
                        T{episode.season}E{episode.episode}
                      </span>
                      <span className="episode-duration">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        {episode.duration}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="episode-title">{episode.title}</h3>
                  <p className="episode-description">{episode.description}</p>
                  
                  <div className="episode-topics">
                    <div className="topics-label">Temas abordados:</div>
                    <div className="topics-list">
                      {episode.topics.map((topic, index) => (
                        <span key={index} className="topic-tag">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="episode-footer">
                    <div className="age-indicator">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span>{episode.ageGroup}</span>
                    </div>
                    
                    <button className="episode-favorite">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pablo-cta">
            <div className="cta-content">
              <h3 className="cta-title">Mais episódios em breve!</h3>
              <p className="cta-description">
                Estamos trabalhando para trazer mais aventuras do Pablo. 
                Cada episódio é cuidadosamente selecionado para promover compreensão e empatia.
              </p>
              <div className="cta-features">
                <div className="feature-item">
                  <span className="feature-icon">🧠</span>
                  <span>Educativo</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">❤️</span>
                  <span>Inclusivo</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🌟</span>
                  <span>Inspirador</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Empty State */}
        {filteredGames.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">🎮</div>
            <h3 className="empty-title">Nenhum jogo encontrado</h3>
            <p className="empty-description">
              Tente ajustar os filtros para encontrar jogos que atendam aos seus critérios.
            </p>
          </div>
        )}

        {/* Seção de Benefícios */}
        <section className="jogos-benefits-premium">
          <div className="benefits-background">
            <div className="benefits-pattern"></div>
            <div className="benefits-gradient"></div>
          </div>
          
          <div className="benefits-header">
            <h2 className="benefits-title">
              <span className="title-icon">🌟</span>
              <span className="title-text">Por Que Nossos Jogos São Especiais?</span>
            </h2>
            <p className="benefits-subtitle">
              Descubra como nossos jogos combinam diversão, aprendizado e ciência 
              para criar experiências únicas e transformadoras.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <div className="benefit-icon">🎯</div>
              </div>
              <h3 className="benefit-title">Feitos Especialmente Para Você</h3>
              <p className="benefit-description">
                Cada jogo foi criado pensando no seu bem-estar! Com cores alegres, 
                sons divertidos e interface intuitiva para uma experiência confortável e feliz.
              </p>
              <div className="benefit-features">
                <span className="feature">Interface amigável</span>
                <span className="feature">Design inclusivo</span>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <div className="benefit-icon">🧠</div>
              </div>
              <h3 className="benefit-title">Baseados na Ciência</h3>
              <p className="benefit-description">
                Desenvolvidos com especialistas em neurociência e pedagogia, 
                garantindo que diversão e aprendizado andem sempre juntos.
              </p>
              <div className="benefit-features">
                <span className="feature">Neurociência aplicada</span>
                <span className="feature">Métodos científicos</span>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <div className="benefit-icon">🎨</div>
              </div>
              <h3 className="benefit-title">Design Acolhedor</h3>
              <p className="benefit-description">
                Cores suaves, sons relaxantes e animações encantadoras criam 
                um ambiente mágico e acolhedor para o aprendizado.
              </p>
              <div className="benefit-features">
                <span className="feature">Visual cativante</span>
                <span className="feature">Experiência sensorial</span>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <div className="benefit-icon">📈</div>
              </div>
              <h3 className="benefit-title">Crescimento Progressivo</h3>
              <p className="benefit-description">
                Os jogos evoluem com você! Conforme seu desenvolvimento, 
                novos desafios surgem para manter o aprendizado sempre estimulante.
              </p>
              <div className="benefit-features">
                <span className="feature">Adaptação inteligente</span>
                <span className="feature">Desenvolvimento contínuo</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
