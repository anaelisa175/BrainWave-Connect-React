'use client';

import { useState, useMemo, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './styles_premium.css';

interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'F├ícil' | 'M├®dio' | 'Dif├¡cil';
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
    title: 'Jogo da Mem├│ria das Emo├º├Áes',
    description: 'Desenvolva habilidades de memoriza├º├úo e reconhecimento emocional atrav├®s de um desafio interativo de correspond├¬ncia de cartas. Uma ferramenta educativa que combina divers├úo com aprendizado socioemocional.',
    category: 'Mem├│ria',
    difficulty: 'F├ícil',
    ageGroup: '4-12 anos',
    icon: '/imagens/icon-jogo-memoria.jpg',
    benefits: ['Melhora a concentra├º├úo', 'Desenvolve mem├│ria visual', 'Reconhecimento emocional', 'Autocontrole'],
    link: '/jogos/memoria',
    tags: ['emo├º├Áes', 'concentra├º├úo', 'visual'],
    estimatedTime: '10-15 min'
  },
  {
    id: 'forca',
    title: 'Jogo de Descoberta de Palavras',
    description: 'Expanda o vocabul├írio e aprimore habilidades lingu├¡sticas atrav├®s de um jogo estrat├®gico de adivinha├º├úo de palavras. Ideal para desenvolvimento de compet├¬ncias de leitura e escrita.',
    category: 'Linguagem',
    difficulty: 'M├®dio',
    ageGroup: '6-14 anos',
    icon: '/imagens/icon-descubra-palavra.jpg',
    benefits: ['Expande vocabul├írio', 'Melhora ortografia', 'Desenvolve racioc├¡nio', 'Pensamento estrat├®gico'],
    link: '/jogos/forca',
    tags: ['palavras', 'vocabul├írio', 'estrat├®gia'],
    estimatedTime: '5-10 min'
  },
  {
    id: 'quebra-cabeca',
    title: 'Quebra-Cabe├ºa Deslizante',
    description: 'Aprimore habilidades de racioc├¡nio l├│gico e percep├º├úo espacial atrav├®s de desafios progressivos de quebra-cabe├ºa. Uma experi├¬ncia envolvente que estimula o pensamento estrat├®gico.',
    category: 'L├│gica',
    difficulty: 'Dif├¡cil',
    ageGroup: '8+ anos',
    icon: '/imagens/icon-quebra-cabeca.jpg',
    benefits: ['Desenvolve l├│gica espacial', 'Melhora coordena├º├úo', 'Estimula persist├¬ncia', 'Planejamento estrat├®gico'],
    link: '/jogos/quebra-cabeca',
    tags: ['l├│gica', 'espacial', 'estrat├®gia'],
    estimatedTime: '15-30 min'
  },
  {
    id: 'labirinto',
    title: 'Labirinto das Palavras',
    description: 'Encontre o caminho formando palavras corretas. Desenvolve habilidades de leitura e concentra├º├úo atrav├®s de navega├º├úo estrat├®gica.',
    category: 'Linguagem',
    difficulty: 'M├®dio',
    ageGroup: '6-8 anos',
    icon: '',
    benefits: ['Melhora leitura', 'Desenvolve concentra├º├úo', 'Pensamento estrat├®gico', 'Vocabul├írio'],
    link: '/jogos/labirinto',
    tags: ['linguagem', 'leitura', 'concentra├º├úo'],
    estimatedTime: '10-20 min'
  },
  {
    id: 'numerico',
    title: 'Quebra-Cabe├ºa Num├®rico',
    description: 'Organize os n├║meros na sequ├¬ncia correta para vencer. Desenvolve racioc├¡nio matem├ítico e sequencial de forma l├║dica.',
    category: 'N├║meros',
    difficulty: 'M├®dio',
    ageGroup: '6-8 anos',
    icon: '',
    benefits: ['Racioc├¡nio matem├ítico', 'Sequenciamento', 'L├│gica num├®rica', 'Concentra├º├úo'],
    link: '/jogos/numerico',
    tags: ['n├║meros', 'racioc├¡nio', 'sequ├¬ncia'],
    estimatedTime: '10-15 min'
  },
  {
    id: 'cores',
    title: 'Detetive de Cores',
    description: 'Identifique e combine cores para resolver mist├®rios. Desenvolve reconhecimento visual e habilidades de associa├º├úo.',
    category: 'Cores',
    difficulty: 'F├ícil',
    ageGroup: '3-5 anos',
    icon: '',
    benefits: ['Reconhecimento de cores', 'Aten├º├úo visual', 'Associa├º├úo', 'Coordena├º├úo'],
    link: '/jogos/cores',
    tags: ['cores', 'reconhecimento', 'aten├º├úo'],
    estimatedTime: '5-10 min'
  },
  {
    id: 'expressoes',
    title: 'Express├Áes em A├º├úo',
    description: 'Reconhe├ºa express├Áes faciais em diferentes situa├º├Áes. Desenvolve intelig├¬ncia emocional e habilidades sociais.',
    category: 'Emocional',
    difficulty: 'M├®dio',
    ageGroup: '6-8 anos',
    icon: '',
    benefits: ['Intelig├¬ncia emocional', 'Reconhecimento facial', 'Habilidades sociais', 'Empatia'],
    link: '#em-breve',
    tags: ['emo├º├Áes', 'social', 'reconhecimento'],
    estimatedTime: '10-15 min'
  },
  {
    id: 'atencao',
    title: 'Aten├º├úo ao Detalhe',
    description: 'Encontre diferen├ºas entre imagens para treinar a aten├º├úo. Desenvolve capacidade de observa├º├úo e concentra├º├úo.',
    category: 'Aten├º├úo',
    difficulty: 'Dif├¡cil',
    ageGroup: '9-12 anos',
    icon: '',
    benefits: ['Aten├º├úo ao detalhe', 'Concentra├º├úo', 'Observa├º├úo', 'Paci├¬ncia'],
    link: '#em-breve',
    tags: ['aten├º├úo', 'concentra├º├úo', 'detalhes'],
    estimatedTime: '15-25 min'
  },
  {
    id: 'animais',
    title: 'L├│gica Animal',
    description: 'Classifique animais por categorias e caracter├¡sticas. Desenvolve pensamento l├│gico e conhecimento sobre natureza.',
    category: 'L├│gica',
    difficulty: 'M├®dio',
    ageGroup: '6-8 anos',
    icon: '',
    benefits: ['Classifica├º├úo', 'L├│gica', 'Conhecimento geral', 'Categoriza├º├úo'],
    link: '#em-breve',
    tags: ['l├│gica', 'classifica├º├úo', 'conhecimento'],
    estimatedTime: '10-20 min'
  },
  {
    id: 'sons',
    title: 'Som das Emo├º├Áes',
    description: 'Identifique os sons e combine com as emo├º├Áes correspondentes. Desenvolve percep├º├úo auditiva e reconhecimento emocional.',
    category: 'Emocional',
    difficulty: 'F├ícil',
    ageGroup: '3-5 anos',
    icon: '',
    benefits: ['Percep├º├úo auditiva', 'Reconhecimento emocional', 'Associa├º├úo', 'Concentra├º├úo'],
    link: '#em-breve',
    tags: ['emo├º├Áes', 'audi├º├úo', 'reconhecimento'],
    estimatedTime: '5-10 min'
  },
  {
    id: 'formas',
    title: 'Formas Geom├®tricas',
    description: 'Monte objetos usando formas geom├®tricas b├ísicas. Desenvolve percep├º├úo espacial e criatividade.',
    category: 'L├│gica',
    difficulty: 'F├ícil',
    ageGroup: '3-5 anos',
    icon: '',
    benefits: ['Percep├º├úo espacial', 'Criatividade', 'Coordena├º├úo', 'Formas geom├®tricas'],
    link: '#em-breve',
    tags: ['formas', 'espacial', 'criatividade'],
    estimatedTime: '10-15 min'
  },
  {
    id: 'caca-palavras',
    title: 'Ca├ºa Palavras Divertido',
    description: 'Encontre as palavras escondidas na grade. Desenvolve vocabul├írio e habilidades de busca visual.',
    category: 'Linguagem',
    difficulty: 'M├®dio',
    ageGroup: '9-12 anos',
    icon: '',
    benefits: ['Vocabul├írio', 'Aten├º├úo visual', 'Concentra├º├úo', 'Estrat├®gia'],
    link: '#em-breve',
    tags: ['linguagem', 'vocabul├írio', 'aten├º├úo'],
    estimatedTime: '15-25 min'
  },
  {
    id: 'matematica',
    title: 'Matem├ítica do Faz de Conta',
    description: 'Resolva problemas matem├íticos com personagens animados. Torna o aprendizado de matem├ítica divertido e envolvente.',
    category: 'N├║meros',
    difficulty: 'M├®dio',
    ageGroup: '6-8 anos',
    icon: '',
    benefits: ['Racioc├¡nio matem├ítico', 'C├ílculo', 'Resolu├º├úo de problemas', 'Criatividade'],
    link: '#em-breve',
    tags: ['matem├ítica', 'racioc├¡nio', 'c├ílculo'],
    estimatedTime: '10-20 min'
  },
  {
    id: 'qc-animais',
    title: 'Quebra-Cabe├ºa de Animais',
    description: 'Monte quebra-cabe├ºas com seus animais favoritos. Desenvolve paci├¬ncia e coordena├º├úo atrav├®s de imagens atrativas.',
    category: 'L├│gica',
    difficulty: 'F├ícil',
    ageGroup: '3-5 anos',
    icon: '',
    benefits: ['Coordena├º├úo', 'Paci├¬ncia', 'Reconhecimento', 'Concentra├º├úo'],
    link: '#em-breve',
    tags: ['l├│gica', 'animais', 'montagem'],
    estimatedTime: '10-20 min'
  }
];

const categories = [
  { id: 'Todos', name: 'Todos os Jogos', icon: '' },
  { id: 'Mem├│ria', name: 'Mem├│ria', icon: '' },
  { id: 'Linguagem', name: 'Linguagem', icon: '' },
  { id: 'L├│gica', name: 'L├│gica', icon: '' },
  { id: 'N├║meros', name: 'N├║meros', icon: '' },
  { id: 'Cores', name: 'Cores', icon: '' },
  { id: 'Emocional', name: 'Emocional', icon: '' },
  { id: 'Aten├º├úo', name: 'Aten├º├úo', icon: '' }
];

const pabloEpisodes: VideoEpisode[] = [
  {
    id: 'pablo-01',
    title: 'Pablo - Conhecendo o Pablo',
    description: 'Conhe├ºa Pablo, um menino de 5 anos no espectro autista que usa sua imagina├º├úo para transformar o mundo real em aventuras m├ígicas.',
    youtubeId: 'yOs0ZmB_zkHBowfQ', // ID real do Pablo - Epis├│dio 1
    duration: '11:30',
    episode: 1,
    season: 1,
    topics: ['Apresenta├º├úo', 'Imagina├º├úo', 'Autismo'],
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
      alert(`­ƒÜº O jogo "${game.title}" est├í em desenvolvimento!\n\nÔ£¿ Em breve voc├¬ poder├í desfrutar desta experi├¬ncia educativa incr├¡vel!\n\n­ƒÄ« Por enquanto, experimente nossos outros jogos dispon├¡veis.`);
    }
  };

  // Sons diferentes para cada elemento
  const playLogoSound = () => {
    // Som de "Yay!" infantil alegre para a logo
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3');
    audio.volume = 0.4;
    audio.play().catch(err => console.log('Audio play failed:', err));
  };

  const playJogosDisponiveisSound = () => {
    // Som de "ding" alegre
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3');
    audio.volume = 0.3;
    audio.play().catch(err => console.log('Audio play failed:', err));
  };

  const playJogosExploradosSound = () => {
    // Som de "pop" divertido
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3');
    audio.volume = 0.3;
    audio.play().catch(err => console.log('Audio play failed:', err));
  };

  const playProgressoSound = () => {
    // Som de "sucesso" infantil
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2001/2001-preview.mp3');
    audio.volume = 0.3;
    audio.play().catch(err => console.log('Audio play failed:', err));
  };

  const playCategorySound = () => {
    // Som de click suave para categorias
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
    audio.volume = 0.2;
    audio.play().catch(err => console.log('Audio play failed:', err));
  };

  const playCardSound = () => {
    // Som de "boop" divertido para cards de jogos
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
    audio.volume = 0.25;
    audio.play().catch(err => console.log('Audio play failed:', err));
  };

  const playButtonSound = () => {
    // Som de bot├úo alegre
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3');
    audio.volume = 0.25;
    audio.play().catch(err => console.log('Audio play failed:', err));
  };

  useEffect(() => {
    // Carregar estat├¡sticas dos jogos do localStorage
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
      // Para forca, usar vit├│rias como pontua├º├úo
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
    const levels = { 'F├ícil': 1, 'M├®dio': 2, 'Dif├¡cil': 3 };
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
          {/* Logo Principal */}
          <div className="jogos-hero-logo">
            <img 
              src="/imagens/kids-game-zone-logo.jpg" 
              alt="Kids Game Zone" 
              className="hero-main-logo"
              onMouseEnter={playLogoSound}
              style={{ cursor: 'pointer' }}
            />
          </div>
          
          <h1 className="jogos-hero-title">
            <span className="title-gradient">Jogos e V├¡deos</span>
            <span className="title-highlight">Educativos BrainWave</span>
          </h1>
          
          <p className="jogos-hero-subtitle">
            Explore nossa cole├º├úo cuidadosamente desenvolvida de experi├¬ncias educativas 
            que combinam <strong>neuroci├¬ncia</strong>, <strong>pedagogia</strong> e <strong>tecnologia</strong>. 
            Cada jogo e v├¡deo ├® projetado para estimular o desenvolvimento cognitivo e 
            emocional atrav├®s de metodologias l├║dicas e cientificamente embasadas.
          </p>
          
          <div className="jogos-hero-features">
            <div className="feature-pill" onMouseEnter={playCategorySound}>
              <span>6 jogos interativos</span>
            </div>
            <div className="feature-pill" onMouseEnter={playCategorySound}>
              <span>1 epis├│dio do Pablo</span>
            </div>
            <div className="feature-pill" onMouseEnter={playCategorySound}>
              <span>8 em desenvolvimento</span>
            </div>
          </div>
        </div>
        
        <div className="jogos-stats-premium">
          <div className="stats-container">
            <div className="jogos-stat-card" onMouseEnter={playJogosDisponiveisSound} style={{ cursor: 'pointer' }}>
              <div className="stat-icon">
                <img src="/imagens/icon-jogos-disponiveis.jpg" alt="Jogos Dispon├¡veis" className="stat-icon-img" />
              </div>
              <div className="stat-content">
                <span className="stat-number">{gameStats.totalGames}</span>
                <span className="stat-label">Jogos Dispon├¡veis</span>
              </div>
              <div className="stat-decoration"></div>
            </div>
            
            <div className="jogos-stat-card" onMouseEnter={playJogosExploradosSound} style={{ cursor: 'pointer' }}>
              <div className="stat-icon">
                <img src="/imagens/icon-jogos-explorados.jpg" alt="Jogos Explorados" className="stat-icon-img" />
              </div>
              <div className="stat-content">
                <span className="stat-number">{gameStats.gamesPlayed}</span>
                <span className="stat-label">Jogos Explorados</span>
              </div>
              <div className="stat-decoration"></div>
            </div>
            
            <div className="jogos-stat-card" onMouseEnter={playProgressoSound} style={{ cursor: 'pointer' }}>
              <div className="stat-icon">
                <img src="/imagens/icon-progresso.jpg" alt="Progresso M├®dio" className="stat-icon-img" />
              </div>
              <div className="stat-content">
                <span className="stat-number">{gameStats.averageScore}%</span>
                <span className="stat-label">Progresso M├®dio</span>
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
                  placeholder="Pesquisar jogos e v├¡deos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                {searchTerm && (
                  <button 
                    className="search-clear"
                    onClick={() => setSearchTerm('')}
                  >
                    ├ù
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
                    onClick={() => {
                      playCategorySound();
                      setSelectedCategory(category.id);
                    }}
                    onMouseEnter={playCategorySound}
                  >
                    {category.icon && <span className="category-icon">{category.icon}</span>}
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
                    <option value="F├ícil">­ƒƒó F├ícil</option>
                    <option value="M├®dio">­ƒƒí M├®dio</option>
                    <option value="Dif├¡cil">­ƒö┤ Dif├¡cil</option>
                  </select>
                </div>
              </div>

              <div className="filter-group">
                <label className="filter-label">Faixa Et├íria</label>
                <div className="custom-select">
                  <select
                    value={selectedAgeGroup}
                    onChange={(e) => setSelectedAgeGroup(e.target.value)}
                  >
                    <option value="Todas">Todas as idades</option>
                    <option value="4-6">­ƒæÂ 4-6 anos</option>
                    <option value="7-9">­ƒºÆ 7-9 anos</option>
                    <option value="10-12">­ƒæª 10-12 anos</option>
                    <option value="13+">­ƒºæ 13+ anos</option>
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
              <div 
                key={game.id} 
                className="game-card-premium"
                onMouseEnter={playCardSound}
              >
                <div className="card-background">
                  <div className="card-gradient"></div>
                  <div className="card-pattern"></div>
                </div>
                
                <div className="card-header">
                  <div className="game-icon-wrapper">
                    <div className="game-icon">
                      {game.icon.startsWith('/') ? (
                        <img src={game.icon} alt={game.title} className="game-icon-img" />
                      ) : (
                        game.icon
                      )}
                    </div>
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
                      <div className="meta-icon">­ƒæÂ</div>
                      <span className="meta-text">{game.ageGroup}</span>
                    </div>
                    
                    <div className="meta-item">
                      <div className="meta-icon">ÔÅ▒´©Å</div>
                      <span className="meta-text">{game.estimatedTime}</span>
                    </div>
                    
                    <div className="meta-item">
                      <div className="meta-icon">Ô¡É</div>
                      <div className="difficulty-indicator">
                        {getDifficultyDots(game.difficulty)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="game-benefits">
                    <div className="benefits-title">­ƒÆí Benef├¡cios:</div>
                    <div className="benefits-list">
                      {game.benefits.slice(0, 2).map((benefit, index) => (
                        <span key={index} className="benefit-item">
                          ÔÇó {benefit}
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
                    onMouseEnter={playButtonSound}
                  >
                    <div className="button-content">
                      <span className="button-icon">
                        {game.link === '#em-breve' ? '­ƒÜº' : '­ƒÄ«'}
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

        {/* Se├º├úo de Epis├│dios do Pablo */}
        <section className="pablo-section-premium">
          <div className="pablo-background">
            <div className="pablo-pattern"></div>
            <div className="pablo-gradient"></div>
          </div>
          
          <div className="pablo-header">
            <div className="pablo-badge">
              <span className="badge-icon">­ƒô║</span>
              <span>Conte├║do Premium</span>
            </div>
            
            <h2 className="pablo-title">
              <span className="title-main">Epis├│dios do Pablo</span>
              <span className="title-subtitle">Aventuras da Imagina├º├úo</span>
            </h2>
            
            <p className="pablo-description">
              Acompanhe Pablo, um menino neurodivergente de 5 anos, em suas aventuras imagin├írias! 
              Cada epis├│dio explora temas importantes sobre <strong>autismo</strong>, <strong>neurodiversidade</strong> e 
              <strong>aceita├º├úo</strong> de forma educativa e sens├¡vel.
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
              <h3 className="cta-title">Mais epis├│dios em breve!</h3>
              <p className="cta-description">
                Estamos trabalhando para trazer mais aventuras do Pablo. 
                Cada epis├│dio ├® cuidadosamente selecionado para promover compreens├úo e empatia.
              </p>
              <div className="cta-features">
                <div className="feature-item">
                  <span className="feature-icon">­ƒºá</span>
                  <span>Educativo</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">ÔØñ´©Å</span>
                  <span>Inclusivo</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">­ƒîƒ</span>
                  <span>Inspirador</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Se├º├úo Empty State */}
        {filteredGames.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">­ƒÄ«</div>
            <h3 className="empty-title">Nenhum jogo encontrado</h3>
            <p className="empty-description">
              Tente ajustar os filtros para encontrar jogos que atendam aos seus crit├®rios.
            </p>
          </div>
        )}

        {/* Se├º├úo de Benef├¡cios */}
        <section className="jogos-benefits-premium">
          <div className="benefits-background">
            <div className="benefits-pattern"></div>
            <div className="benefits-gradient"></div>
          </div>
          
          <div className="benefits-header">
            <h2 className="benefits-title">
              <span className="title-icon">­ƒîƒ</span>
              <span className="title-text">Por Que Nossos Jogos S├úo Especiais?</span>
            </h2>
            <p className="benefits-subtitle">
              Descubra como nossos jogos combinam divers├úo, aprendizado e ci├¬ncia 
              para criar experi├¬ncias ├║nicas e transformadoras.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <div className="benefit-icon">­ƒÄ»</div>
              </div>
              <h3 className="benefit-title">Feitos Especialmente Para Voc├¬</h3>
              <p className="benefit-description">
                Cada jogo foi criado pensando no seu bem-estar! Com cores alegres, 
                sons divertidos e interface intuitiva para uma experi├¬ncia confort├ível e feliz.
              </p>
              <div className="benefit-features">
                <span className="feature">Interface amig├ível</span>
                <span className="feature">Design inclusivo</span>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <div className="benefit-icon">­ƒºá</div>
              </div>
              <h3 className="benefit-title">Baseados na Ci├¬ncia</h3>
              <p className="benefit-description">
                Desenvolvidos com especialistas em neuroci├¬ncia e pedagogia, 
                garantindo que divers├úo e aprendizado andem sempre juntos.
              </p>
              <div className="benefit-features">
                <span className="feature">Neuroci├¬ncia aplicada</span>
                <span className="feature">M├®todos cient├¡ficos</span>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <div className="benefit-icon">­ƒÄ¿</div>
              </div>
              <h3 className="benefit-title">Design Acolhedor</h3>
              <p className="benefit-description">
                Cores suaves, sons relaxantes e anima├º├Áes encantadoras criam 
                um ambiente m├ígico e acolhedor para o aprendizado.
              </p>
              <div className="benefit-features">
                <span className="feature">Visual cativante</span>
                <span className="feature">Experi├¬ncia sensorial</span>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <div className="benefit-icon">­ƒôê</div>
              </div>
              <h3 className="benefit-title">Crescimento Progressivo</h3>
              <p className="benefit-description">
                Os jogos evoluem com voc├¬! Conforme seu desenvolvimento, 
                novos desafios surgem para manter o aprendizado sempre estimulante.
              </p>
              <div className="benefit-features">
                <span className="feature">Adapta├º├úo inteligente</span>
                <span className="feature">Desenvolvimento cont├¡nuo</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
