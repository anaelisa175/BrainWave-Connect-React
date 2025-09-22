// Dados dos quizzes específicos para cada artigo

export const quizData = {
  // Quiz sobre TDAH - Mitos e Verdades
  tdahMitosVerdades: [
    {
      id: 1,
      question: "1. TDAH é mais comum em:",
      options: [
        { text: "Apenas crianças", isCorrect: false },
        { text: "Pessoas de todas as idades", isCorrect: true },
        { text: "Apenas meninos", isCorrect: false },
        { text: "Apenas adultos", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. O TDAH é causado por:",
      options: [
        { text: "Má educação dos pais", isCorrect: false },
        { text: "Fatores neurobiológicos e genéticos", isCorrect: true },
        { text: "Uso excessivo de telas", isCorrect: false },
        { text: "Falta de disciplina", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. Pessoas com TDAH sempre:",
      options: [
        { text: "São hiperativas fisicamente", isCorrect: false },
        { text: "Têm dificuldades de aprendizagem", isCorrect: false },
        { text: "Apresentam sintomas únicos para cada pessoa", isCorrect: true },
        { text: "São desorganizadas", isCorrect: false }
      ]
    }
  ],

  // Quiz sobre TDAH na Vida Adulta
  tdahVidaAdulta: [
    {
      id: 1,
      question: "1. Qual é um sinal comum de TDAH em adultos?",
      options: [
        { text: "Dificuldade para manter foco em tarefas", isCorrect: true },
        { text: "Sempre estar correndo", isCorrect: false },
        { text: "Gostar de atividades físicas", isCorrect: false },
        { text: "Ser muito tímido", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Como adultos com TDAH podem melhorar a produtividade?",
      options: [
        { text: "Trabalhando 12 horas por dia", isCorrect: false },
        { text: "Usando técnicas de organização e pausas regulares", isCorrect: true },
        { text: "Evitando usar tecnologia", isCorrect: false },
        { text: "Fazendo tudo no último minuto", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. O diagnóstico de TDAH na vida adulta:",
      options: [
        { text: "É impossível após os 18 anos", isCorrect: false },
        { text: "Não existe, é coisa de criança", isCorrect: false },
        { text: "Pode trazer alívio e autocompreensão", isCorrect: true },
        { text: "Sempre indica problemas graves", isCorrect: false }
      ]
    }
  ],

  // Quiz sobre TDAH e Hiperfoco
  tdahHiperfoco: [
    {
      id: 1,
      question: "1. Hiperfoco no TDAH é:",
      options: [
        { text: "Um problema que deve ser evitado", isCorrect: false },
        { text: "Uma capacidade de concentração intensa em atividades de interesse", isCorrect: true },
        { text: "O oposto do TDAH", isCorrect: false },
        { text: "Uma técnica de meditação", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Como usar o hiperfoco de forma produtiva?",
      options: [
        { text: "Ignorar completamente outras responsabilidades", isCorrect: false },
        { text: "Estabelecer alarmes e pausas programadas", isCorrect: true },
        { text: "Focar apenas em hobbies", isCorrect: false },
        { text: "Trabalhar 24 horas seguidas", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. O hiperfoco pode ser considerado:",
      options: [
        { text: "Apenas uma desvantagem", isCorrect: false },
        { text: "Um sinal de preguiça", isCorrect: false },
        { text: "Uma superpotência quando bem direcionada", isCorrect: true },
        { text: "Uma forma de procrastinação", isCorrect: false }
      ]
    }
  ],

  // Quiz sobre Autismo e Comunicação
  autismoComunicacao: [
    {
      id: 1,
      question: "1. Comunicação no autismo:",
      options: [
        { text: "É sempre não-verbal", isCorrect: false },
        { text: "Pode ser verbal, não-verbal ou mista", isCorrect: true },
        { text: "Não existe", isCorrect: false },
        { text: "É igual para todas as pessoas autistas", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Como apoiar a comunicação de uma pessoa autista?",
      options: [
        { text: "Forçar o contato visual", isCorrect: false },
        { text: "Usar linguagem clara e dar tempo para processar", isCorrect: true },
        { text: "Falar alto e devagar", isCorrect: false },
        { text: "Evitar qualquer comunicação", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. A Comunicação Alternativa e Aumentativa (CAA):",
      options: [
        { text: "É uma muleta que atrasa o desenvolvimento", isCorrect: false },
        { text: "Só deve ser usada como último recurso", isCorrect: false },
        { text: "Pode facilitar e expandir a comunicação", isCorrect: true },
        { text: "É apenas para crianças pequenas", isCorrect: false }
      ]
    }
  ],

  // Quiz sobre Sensorialidade no Autismo
  sensorialidadeAutismo: [
    {
      id: 1,
      question: "1. Sensibilidades sensoriais no autismo podem incluir:",
      options: [
        { text: "Apenas problemas auditivos", isCorrect: false },
        { text: "Hiper ou hipossensibilidade em qualquer dos sentidos", isCorrect: true },
        { text: "Apenas problemas visuais", isCorrect: false },
        { text: "São sempre iguais para todos", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Como criar um ambiente sensorial amigável?",
      options: [
        { text: "Usando luzes fluorescentes brilhantes", isCorrect: false },
        { text: "Reduzir ruídos desnecessários e oferecer opções de iluminação", isCorrect: true },
        { text: "Pintando tudo de cores vibrantes", isCorrect: false },
        { text: "Tocando música alta constantemente", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. Estímulos sensoriais repetitivos (stims) são:",
      options: [
        { text: "Comportamentos que devem ser eliminados", isCorrect: false },
        { text: "Formas de autorregulação e expressão", isCorrect: true },
        { text: "Sinais de agressividade", isCorrect: false },
        { text: "Apenas manias temporárias", isCorrect: false }
      ]
    }
  ],

  // Quiz sobre Autismo e Emprego
  autismoEmprego: [
    {
      id: 1,
      question: "1. No ambiente de trabalho, pessoas autistas podem se beneficiar de:",
      options: [
        { text: "Instruções vagas e ambíguas", isCorrect: false },
        { text: "Comunicação clara e estrutura previsível", isCorrect: true },
        { text: "Mudanças constantes na rotina", isCorrect: false },
        { text: "Ambientes com muito ruído", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Qual é um mito comum sobre autistas no trabalho?",
      options: [
        { text: "Eles podem ser excelentes em atenção aos detalhes", isCorrect: false },
        { text: "Eles não conseguem trabalhar em equipe", isCorrect: true },
        { text: "Eles podem ter habilidades especializadas", isCorrect: false },
        { text: "Eles valorizam a honestidade", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. Acomodações no trabalho para autistas podem incluir:",
      options: [
        { text: "Apenas mudanças físicas no ambiente", isCorrect: false },
        { text: "Horários flexíveis e espaços tranquilos", isCorrect: true },
        { text: "Isolamento completo dos colegas", isCorrect: false },
        { text: "Tarefas sempre diferentes a cada dia", isCorrect: false }
      ]
    }
  ],

  // Quiz sobre Autismo e Ambiente de Trabalho
  autismoAmbienteTrabalho: [
    {
      id: 1,
      question: "1. Um ambiente de trabalho inclusivo para autistas deve ter:",
      options: [
        { text: "Ruído constante para estimulação", isCorrect: false },
        { text: "Iluminação adequada e espaços calmos", isCorrect: true },
        { text: "Mudanças diárias na organização", isCorrect: false },
        { text: "Comunicação apenas por sinais não-verbais", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Como colegas podem apoiar um funcionário autista?",
      options: [
        { text: "Fazendo piadas sobre suas diferenças", isCorrect: false },
        { text: "Sendo pacientes e respeitando suas necessidades", isCorrect: true },
        { text: "Ignorando completamente suas particularidades", isCorrect: false },
        { text: "Falando sempre em voz alta", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. A diversidade neurocognitiva no trabalho:",
      options: [
        { text: "Diminui a produtividade da equipe", isCorrect: false },
        { text: "Não faz diferença nos resultados", isCorrect: false },
        { text: "Pode trazer perspectivas únicas e inovação", isCorrect: true },
        { text: "Deve ser evitada sempre", isCorrect: false }
      ]
    }
  ],

  // Quiz sobre Ansiedade e Neurodivergência
  ansiedadeNeurodivergencia: [
    {
      id: 1,
      question: "1. A ansiedade em pessoas neurodivergentes:",
      options: [
        { text: "É sempre patológica", isCorrect: false },
        { text: "Pode ser resultado do masking e sobrecarga sensorial", isCorrect: true },
        { text: "Não existe", isCorrect: false },
        { text: "É igual à ansiedade em neurotípicos", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Estratégias para reduzir ansiedade em neurodivergentes incluem:",
      options: [
        { text: "Forçar situações desconfortáveis", isCorrect: false },
        { text: "Criar rotinas previsíveis e ambientes seguros", isCorrect: true },
        { text: "Evitar todas as situações sociais", isCorrect: false },
        { text: "Ignorar os sintomas completamente", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. O 'masking' pode contribuir para ansiedade porque:",
      options: [
        { text: "É uma técnica de relaxamento", isCorrect: false },
        { text: "Exige energia constante para camuflar traits naturais", isCorrect: true },
        { text: "Melhora a autoestima", isCorrect: false },
        { text: "É recomendado por terapeutas", isCorrect: false }
      ]
    }
  ],

  // Quiz sobre Saúde Mental e Neurodivergência
  saudeMentalNeurodivergencia: [
    {
      id: 1,
      question: "1. Saúde mental em neurodivergentes:",
      options: [
        { text: "É sempre comprometida", isCorrect: false },
        { text: "Requer cuidados específicos e compreensão das particularidades", isCorrect: true },
        { text: "É idêntica a de pessoas neurotípicas", isCorrect: false },
        { text: "Não é importante", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Terapias para neurodivergentes devem:",
      options: [
        { text: "Focar em 'normalizar' o comportamento", isCorrect: false },
        { text: "Respeitar a neurodiversidade e trabalhar pontos fortes", isCorrect: true },
        { text: "Ser idênticas para todos os pacientes", isCorrect: false },
        { text: "Evitar falar sobre diferenças neurológicas", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. Burnout neurodivergente pode ser causado por:",
      options: [
        { text: "Preguiça e falta de motivação", isCorrect: false },
        { text: "Sobrecarga sensorial e masking constante", isCorrect: true },
        { text: "Muito tempo livre", isCorrect: false },
        { text: "Falta de desafios", isCorrect: false }
      ]
    }
  ],

  // Quiz sobre Neurodivergência e Criatividade
  neurodivergenciaCriatividade: [
    {
      id: 1,
      question: "1. A relação entre neurodivergência e criatividade:",
      options: [
        { text: "Não existe correlação", isCorrect: false },
        { text: "Pensamento divergente pode gerar soluções inovadoras", isCorrect: true },
        { text: "Apenas autistas são criativos", isCorrect: false },
        { text: "Criatividade é incompatível com neurodivergência", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Como a neurodivergência pode beneficiar processos criativos?",
      options: [
        { text: "Limitando perspectivas", isCorrect: false },
        { text: "Oferecendo perspectivas únicas e pensamento fora da caixa", isCorrect: true },
        { text: "Impedindo a colaboração", isCorrect: false },
        { text: "Reduzindo a imaginação", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. Ambientes criativos inclusivos devem:",
      options: [
        { text: "Ter apenas um tipo de estimulação", isCorrect: false },
        { text: "Oferecer diferentes tipos de espaços e ferramentas", isCorrect: true },
        { text: "Ser barulhentos e caóticos", isCorrect: false },
        { text: "Focar apenas em métodos tradicionais", isCorrect: false }
      ]
    }
  ],

  // Quiz sobre Dislexia e Criatividade
  dislexiaCriatividade: [
    {
      id: 1,
      question: "1. Pessoas com dislexia frequentemente apresentam:",
      options: [
        { text: "Apenas dificuldades de leitura", isCorrect: false },
        { text: "Pensamento visual e habilidades criativas elevadas", isCorrect: true },
        { text: "Problemas de inteligência", isCorrect: false },
        { text: "Incapacidade total para aprender", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Como apoiar estudantes com dislexia?",
      options: [
        { text: "Fazendo-os ler mais devagar", isCorrect: false },
        { text: "Oferecendo múltiplas formas de apresentar informações", isCorrect: true },
        { text: "Evitando atividades de leitura completamente", isCorrect: false },
        { text: "Focando apenas em suas dificuldades", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. A dislexia pode ser vista como:",
      options: [
        { text: "Uma deficiência que impede o sucesso", isCorrect: false },
        { text: "Uma diferença que pode trazer vantagens criativas", isCorrect: true },
        { text: "Um problema temporário", isCorrect: false },
        { text: "Algo que desaparece na vida adulta", isCorrect: false }
      ]
    }
  ],

  // Quiz sobre Tecnologia e Neurodivergência
  tecnologiaNeurodivergentes: [
    {
      id: 1,
      question: "1. A tecnologia para neurodivergentes pode:",
      options: [
        { text: "Apenas criar barreiras", isCorrect: false },
        { text: "Ser tanto aliada quanto desafio, dependendo do design", isCorrect: true },
        { text: "Sempre facilitar a vida", isCorrect: false },
        { text: "Substituir completamente a interação humana", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Design inclusivo em tecnologia significa:",
      options: [
        { text: "Criar produtos apenas para neurodivergentes", isCorrect: false },
        { text: "Considerar diferentes necessidades desde o início do projeto", isCorrect: true },
        { text: "Adicionar recursos de acessibilidade depois", isCorrect: false },
        { text: "Fazer produtos idênticos para todos", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. Exemplos de tecnologia assistiva incluem:",
      options: [
        { text: "Apenas softwares de leitura", isCorrect: false },
        { text: "Apps de comunicação, organização e regulação sensorial", isCorrect: true },
        { text: "Somente dispositivos físicos", isCorrect: false },
        { text: "Apenas jogos educativos", isCorrect: false }
      ]
    }
  ],

  // Quiz sobre Inclusão Escolar
  inclusaoEscolar: [
    {
      id: 1,
      question: "1. Inclusão escolar efetiva significa:",
      options: [
        { text: "Apenas colocar alunos neurodivergentes na mesma sala", isCorrect: false },
        { text: "Adaptar métodos e ambiente para todos aprenderem juntos", isCorrect: true },
        { text: "Separar alunos por tipo de neurodivergência", isCorrect: false },
        { text: "Usar os mesmos métodos para todos os alunos", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Professores podem apoiar alunos neurodivergentes:",
      options: [
        { text: "Tratando todos exatamente igual", isCorrect: false },
        { text: "Oferecendo múltiplas formas de ensino e avaliação", isCorrect: true },
        { text: "Focando apenas em suas dificuldades", isCorrect: false },
        { text: "Evitando dar responsabilidades", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. Um ambiente escolar inclusivo beneficia:",
      options: [
        { text: "Apenas alunos com necessidades especiais", isCorrect: false },
        { text: "Todos os alunos, desenvolvendo empatia e diversidade", isCorrect: true },
        { text: "Apenas alunos neurotípicos", isCorrect: false },
        { text: "Apenas os professores", isCorrect: false }
      ]
    }
  ],

  // Quiz sobre TDAH - Além dos Estereótipos
  tdahEstereotipos: [
    {
      id: 1,
      question: "1. Segundo o artigo, o TDAH é:",
      options: [
        { text: "Resultado de má educação ou falta de disciplina", isCorrect: false },
        { text: "Uma diferença neurobiológica real com base genética", isCorrect: true },
        { text: "Apenas um problema comportamental temporário", isCorrect: false },
        { text: "Uma condição que afeta somente a hiperatividade", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Qual é uma característica positiva comum em pessoas com TDAH?",
      options: [
        { text: "Baixa energia para atividades", isCorrect: false },
        { text: "Pensamento linear e tradicional", isCorrect: false },
        { text: "Criatividade excepcional e pensamento 'fora da caixa'", isCorrect: true },
        { text: "Dificuldade em todas as áreas da vida", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. Sobre o TDAH na vida adulta, é correto afirmar que:",
      options: [
        { text: "Desaparece completamente após a infância", isCorrect: false },
        { text: "É uma condição vitalícia que se manifesta de diferentes formas", isCorrect: true },
        { text: "Apenas a hiperatividade permanece na idade adulta", isCorrect: false },
        { text: "Não pode ser diagnosticado após os 18 anos", isCorrect: false }
      ]
    }
  ],

  // Quiz padrão para neurodivergência
  default: [
    {
      id: 1,
      question: "1. O que significa o termo \"neurodivergente\"?",
      options: [
        { text: "Uma pessoa com funcionamento neurológico atípico", isCorrect: true },
        { text: "Alguém com doenças mentais graves", isCorrect: false },
        { text: "Pessoas com QI acima da média", isCorrect: false },
        { text: "Indivíduos com lesões cerebrais", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Qual porcentagem da população estima-se ser neurodivergente?",
      options: [
        { text: "5-10%", isCorrect: false },
        { text: "15-20%", isCorrect: true },
        { text: "25-30%", isCorrect: false },
        { text: "Menos de 5%", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. Qual destes NÃO é um benefício comum da neurodivergência?",
      options: [
        { text: "Pensamento criativo", isCorrect: false },
        { text: "Habilidade de hiperfoco", isCorrect: false },
        { text: "Maior agressividade", isCorrect: true },
        { text: "Atenção a detalhes", isCorrect: false }
      ]
    }
  ]
};