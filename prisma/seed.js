const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed do banco de dados...");

  // Limpar dados existentes (opcional - comente se não quiser limpar)
  await prisma.quizOpcao.deleteMany();
  await prisma.quizPergunta.deleteMany();
  await prisma.artigo.deleteMany();
  await prisma.fAQ.deleteMany();
  await prisma.contato.deleteMany();
  console.log("✅ Dados antigos removidos");

  // ============================================
  // 1. CRIAR ARTIGOS
  // ============================================
  console.log("📝 Criando artigos...");

  const artigo1 = await prisma.artigo.create({
    data: {
      titulo: "Neurodivergência: O Que É e Por Que Importa?",
      slug: "neurodivergencia-o-que-e-por-que-importa",
      subtitulo: "Entenda o conceito e sua importância na sociedade atual",
      descricao: "Entenda o conceito e sua importância na sociedade atual.",
      conteudo: `A neurodivergência é um conceito que reconhece e valoriza as diferenças neurológicas entre as pessoas...`,
      componente: "NeurodivergenciaArtigo",
      imagemPrincipal: "/imagens/img1.jpg",
      imagemCapa: "/imagens/img1.jpg",
      categoria: "Neurociência",
      tags: '["neurodivergência", "neurociência", "diversidade", "inclusão"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: true,
      premium: true,
      ativo: true
    }
  });

  const artigo2 = await prisma.artigo.create({
    data: {
      titulo: "TDAH Além dos Estereótipos",
      slug: "tdah-alem-dos-estereotipos",
      subtitulo: "Descubra como o TDAH afeta a vida além da hiperatividade",
      descricao: "Descubra como o TDAH afeta a vida além da hiperatividade.",
      conteudo: `O TDAH é muito mais complexo do que simplesmente não conseguir ficar parado...`,
      componente: "TDAHEsterotipos",
      imagemPrincipal: "/imagens/img2.jpg",
      imagemCapa: "/imagens/img2.jpg",
      categoria: "TDAH",
      tags: '["TDAH", "estereótipos", "hiperatividade", "atenção"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: true,
      premium: true,
      ativo: true
    }
  });

  const artigo3 = await prisma.artigo.create({
    data: {
      titulo: "Autismo e Comunicação: Como Incluir?",
      slug: "autismo-comunicacao-como-incluir",
      subtitulo: "Estratégias para tornar o mundo mais acessível para autistas",
      descricao: "Estratégias para tornar o mundo mais acessível para autistas.",
      conteudo: `A comunicação é fundamental para a inclusão de pessoas autistas...`,
      componente: "AutismoComunicacao",
      imagemPrincipal: "/imagens/img3.jpg",
      imagemCapa: "/imagens/img3.jpg",
      categoria: "Autismo",
      tags: '["autismo", "comunicação", "inclusão", "acessibilidade"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: false,
      premium: true,
      ativo: true
    }
  });

  // Novos artigos adicionados
  const artigo4 = await prisma.artigo.create({
    data: {
      titulo: "TDAH na Vida Adulta: Navegando os Desafios",
      slug: "tdah-vida-adulta-navegando-desafios",
      subtitulo: "Como o TDAH afeta adultos e estratégias para uma vida plena",
      descricao: "Como o TDAH afeta adultos e estratégias para uma vida plena.",
      conteudo: `O TDAH na vida adulta apresenta características únicas e desafios específicos...`,
      componente: "TDAHVidaAdulta",
      imagemPrincipal: "/imagens/img8.jpg",
      imagemCapa: "/imagens/img8.jpg",
      categoria: "TDAH",
      tags: '["TDAH", "vida adulta", "trabalho", "relacionamentos"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: false,
      premium: true,
      ativo: true
    }
  });

  const artigo5 = await prisma.artigo.create({
    data: {
      titulo: "Autismo e Emprego: Construindo Oportunidades",
      slug: "autismo-emprego-construindo-oportunidades",
      subtitulo: "A inclusão de pessoas autistas no mercado de trabalho",
      descricao: "A inclusão de pessoas autistas no mercado de trabalho.",
      conteudo: `A inclusão de pessoas autistas no mercado de trabalho representa uma oportunidade transformadora...`,
      componente: "AutismoEmprego",
      imagemPrincipal: "/imagens/img10.jpg",
      imagemCapa: "/imagens/img10.jpg",
      categoria: "Autismo",
      tags: '["autismo", "emprego", "inclusão", "mercado de trabalho"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: false,
      premium: true,
      ativo: true
    }
  });

  const artigo6 = await prisma.artigo.create({
    data: {
      titulo: "Sensorialidade no Autismo: Compreendendo as Diferenças",
      slug: "sensorialidade-autismo-compreendendo-diferencas",
      subtitulo: "O processamento sensorial único no espectro autista",
      descricao: "O processamento sensorial único no espectro autista.",
      conteudo: `O processamento sensorial no autismo é uma das características mais significativas...`,
      componente: "SensorialidadeAutismo",
      imagemPrincipal: "/imagens/img7.jpg",
      imagemCapa: "/imagens/img7.jpg",
      categoria: "Autismo",
      tags: '["autismo", "sensorialidade", "processamento sensorial", "hipersensibilidade"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: false,
      premium: true,
      ativo: true
    }
  });

  const artigo7 = await prisma.artigo.create({
    data: {
      titulo: "TDAH e Hiperfoco: Explorando o Superpoder da Concentração",
      slug: "tdah-hiperfoco-superpoder-concentracao",
      subtitulo: "Como o hiperfoco pode ser uma força poderosa no TDAH",
      descricao: "Como o hiperfoco pode ser uma força poderosa no TDAH.",
      conteudo: `O hiperfoco é um dos aspectos mais fascinantes e mal compreendidos do TDAH...`,
      componente: "TDAHHiperfoco",
      imagemPrincipal: "/imagens/img9.jpg",
      imagemCapa: "/imagens/img9.jpg",
      categoria: "TDAH",
      tags: '["TDAH", "hiperfoco", "concentração", "produtividade"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: true,
      premium: true,
      ativo: true
    }
  });

  const artigo8 = await prisma.artigo.create({
    data: {
      titulo: "Inclusão Escolar: Construindo Pontes para Todos",
      slug: "inclusao-escolar-construindo-pontes",
      subtitulo: "Como criar ambientes educacionais verdadeiramente inclusivos",
      descricao: "Como criar ambientes educacionais verdadeiramente inclusivos.",
      conteudo: `A inclusão escolar vai muito além de apenas colocar estudantes com necessidades especiais...`,
      componente: "InclusaoEscolar",
      imagemPrincipal: "/imagens/img6.jpg",
      imagemCapa: "/imagens/img6.jpg",
      categoria: "Educação",
      tags: '["inclusão", "educação", "escola", "diversidade"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: false,
      premium: true,
      ativo: true
    }
  });

  const artigo9 = await prisma.artigo.create({
    data: {
      titulo: "Ansiedade e Neurodivergência: Navegando Águas Complexas",
      slug: "ansiedade-neurodivergencia-navegando-aguas-complexas",
      subtitulo: "A relação entre ansiedade e condições neurodivergentes",
      descricao: "A relação entre ansiedade e condições neurodivergentes.",
      conteudo: `A ansiedade em pessoas neurodivergentes apresenta características únicas...`,
      componente: "AnsiedadeNeurodivergencia",
      imagemPrincipal: "/imagens/img4.jpg",
      imagemCapa: "/imagens/img4.jpg",
      categoria: "Saúde Mental",
      tags: '["ansiedade", "neurodivergência", "saúde mental", "bem-estar"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: false,
      premium: true,
      ativo: true
    }
  });

  const artigo10 = await prisma.artigo.create({
    data: {
      titulo: "Tecnologia e Neurodivergência: Ferramentas de Empoderamento",
      slug: "tecnologia-neurodivergencia-ferramentas-empoderamento",
      subtitulo: "Como a tecnologia pode apoiar pessoas neurodivergentes",
      descricao: "Como a tecnologia pode apoiar pessoas neurodivergentes.",
      conteudo: `A tecnologia tem se mostrado uma aliada poderosa para pessoas neurodivergentes...`,
      componente: "TecnologiaNeurodivergentes",
      imagemPrincipal: "/imagens/img12.jpg",
      imagemCapa: "/imagens/img12.jpg",
      categoria: "Tecnologia",
      tags: '["tecnologia", "neurodivergência", "assistiva", "inovação"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: false,
      premium: true,
      ativo: true
    }
  });

  const artigo11 = await prisma.artigo.create({
    data: {
      titulo: "Neurodivergência e Criatividade: Quando Diferenças Geram Inovação",
      slug: "neurodivergencia-criatividade-diferencas-geram-inovacao",
      subtitulo: "A conexão entre mentes neurodivergentes e criatividade",
      descricao: "A conexão entre mentes neurodivergentes e criatividade.",
      conteudo: `A conexão entre neurodivergência e criatividade é profunda e fascinante...`,
      componente: "NeurodivergenciaCriatividade",
      imagemPrincipal: "/imagens/img5.jpg",
      imagemCapa: "/imagens/img5.jpg",
      categoria: "Criatividade",
      tags: '["neurodivergência", "criatividade", "inovação", "arte"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: true,
      premium: true,
      ativo: true
    }
  });

  const artigo12 = await prisma.artigo.create({
    data: {
      titulo: "Saúde Mental e Neurodivergência: Cuidado Integral e Inclusivo",
      slug: "saude-mental-neurodivergencia-cuidado-integral",
      subtitulo: "Abordagens de saúde mental para pessoas neurodivergentes",
      descricao: "Abordagens de saúde mental para pessoas neurodivergentes.",
      conteudo: `A saúde mental de pessoas neurodivergentes requer uma abordagem especializada...`,
      componente: "SaudeMentalNeurodivergencia",
      imagemPrincipal: "/imagens/img14.jpg",
      imagemCapa: "/imagens/img14.jpg",
      categoria: "Saúde Mental",
      tags: '["saúde mental", "neurodivergência", "bem-estar", "terapia"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: false,
      premium: true,
      ativo: true
    }
  });

  const artigo13 = await prisma.artigo.create({
    data: {
      titulo: "Dislexia e Criatividade: Transformando Desafios em Superpoderes",
      slug: "dislexia-criatividade-transformando-desafios-superpoderes",
      subtitulo: "Como a dislexia pode ser uma fonte de criatividade extraordinária",
      descricao: "Como a dislexia pode ser uma fonte de criatividade extraordinária.",
      conteudo: `A dislexia é muito mais que uma 'dificuldade de leitura'...`,
      componente: "DislexiaCriatividade",
      imagemPrincipal: "/imagens/img13.jpg",
      imagemCapa: "/imagens/img13.jpg",
      categoria: "Dislexia",
      tags: '["dislexia", "criatividade", "superpoderes", "talentos"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: false,
      premium: true,
      ativo: true
    }
  });

  console.log(`✅ ${12} artigos criados`);

  // ============================================
  // 2. CRIAR PERGUNTAS DE QUIZ
  // ============================================
  console.log("❓ Criando perguntas de quiz...");

  const pergunta1 = await prisma.quizPergunta.create({
    data: {
      artigoId: artigo1.id,
      pergunta: 'O que significa o termo "neurodivergente"?',
      ordem: 1,
      opcoes: {
        create: [
          {
            textoOpcao: "Uma pessoa com funcionamento neurológico atípico",
            correta: true,
            ordem: 1
          },
          {
            textoOpcao: "Alguém com doenças mentais graves",
            correta: false,
            ordem: 2
          },
          {
            textoOpcao: "Pessoas com QI acima da média",
            correta: false,
            ordem: 3
          },
          {
            textoOpcao: "Indivíduos com lesões cerebrais",
            correta: false,
            ordem: 4
          }
        ]
      }
    }
  });

  const pergunta2 = await prisma.quizPergunta.create({
    data: {
      artigoId: artigo1.id,
      pergunta: "Qual porcentagem da população estima-se ser neurodivergente?",
      ordem: 2,
      opcoes: {
        create: [
          { textoOpcao: "5-10%", correta: false, ordem: 1 },
          { textoOpcao: "15-20%", correta: true, ordem: 2 },
          { textoOpcao: "25-30%", correta: false, ordem: 3 },
          { textoOpcao: "Menos de 5%", correta: false, ordem: 4 }
        ]
      }
    }
  });

  const pergunta3 = await prisma.quizPergunta.create({
    data: {
      artigoId: artigo1.id,
      pergunta: "Qual destes NÃO é um benefício comum da neurodivergência?",
      ordem: 3,
      opcoes: {
        create: [
          { textoOpcao: "Pensamento criativo", correta: false, ordem: 1 },
          { textoOpcao: "Habilidade de hiperfoco", correta: false, ordem: 2 },
          { textoOpcao: "Maior agressividade", correta: true, ordem: 3 },
          { textoOpcao: "Atenção a detalhes", correta: false, ordem: 4 }
        ]
      }
    }
  });

  console.log(`✅ ${3} perguntas de quiz criadas com ${12} opções`);

  // ============================================
  // 3. CRIAR FAQs
  // ============================================
  console.log("❔ Criando FAQs...");

  await prisma.fAQ.createMany({
    data: [
      {
        pergunta: "O que é o Brainwave Connect?",
        resposta:
          "O Brainwave Connect é um espaço de informação, acolhimento e conexão para pessoas com autismo, TDAH e outras condições relacionadas à neurodiversidade.",
        ordem: 1,
        ativo: true
      },
      {
        pergunta: "O Brainwave Connect faz diagnósticos ou tratamentos?",
        resposta:
          "Não. O nosso papel é informar e orientar. Sempre indicamos que o diagnóstico e o acompanhamento devem ser feitos por profissionais de saúde especializados.",
        ordem: 2,
        ativo: true
      },
      {
        pergunta: "Que tipo de conteúdo encontro por aqui?",
        resposta:
          "Você encontrará artigos, guias práticos, informações atualizadas, dicas para o dia a dia e materiais educativos sobre autismo, TDAH e temas relacionados.",
        ordem: 3,
        ativo: true
      },
      {
        pergunta: "Como posso apoiar ou participar?",
        resposta:
          "Você pode compartilhar nossos conteúdos, indicar o Brainwave Connect para outras pessoas e, em breve, poderá se conectar em fóruns e projetos colaborativos.",
        ordem: 4,
        ativo: true
      }
    ]
  });

  console.log(`✅ ${4} FAQs criadas`);

  // ============================================
  // 4. CRIAR CONTATO DE EXEMPLO
  // ============================================
  console.log("📧 Criando contato de exemplo...");

  await prisma.contato.create({
    data: {
      nome: "João Silva",
      email: "joao.silva@example.com",
      mensagem: "Gostaria de saber mais sobre os recursos disponíveis no site.",
      status: "PENDENTE"
    }
  });

  console.log(`✅ 1 contato de exemplo criado`);

  console.log("\n🎉 Seed concluído com sucesso!");
  console.log("📊 Resumo:");
  console.log(`   - Artigos: 12`);
  console.log(`   - Perguntas de Quiz: 3`);
  console.log(`   - Opções de Quiz: 12`);
  console.log(`   - FAQs: 4`);
  console.log(`   - Contatos: 1`);
}

main()
  .catch((e) => {
    console.error("❌ Erro ao executar seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
