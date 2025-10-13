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
      descricao: "Entenda o conceito e sua importância na sociedade atual.",
      conteudo: `A neurodivergência é um conceito que reconhece e valoriza as diferenças neurológicas entre as pessoas...`,
      imagemPrincipal: "/imagens/img1.jpg",
      categoria: "Neurociência",
      visualizacoes: 0,
      destaque: true
    }
  });

  const artigo2 = await prisma.artigo.create({
    data: {
      titulo: "TDAH Além dos Estereótipos",
      descricao: "Descubra como o TDAH afeta a vida além da hiperatividade.",
      conteudo: `O TDAH é muito mais complexo do que simplesmente não conseguir ficar parado...`,
      imagemPrincipal: "/imagens/img2.jpg",
      categoria: "TDAH",
      visualizacoes: 0,
      destaque: true
    }
  });

  const artigo3 = await prisma.artigo.create({
    data: {
      titulo: "Autismo e Comunicação: Como Incluir?",
      descricao:
        "Estratégias para tornar o mundo mais acessível para autistas.",
      conteudo: `A comunicação é fundamental para a inclusão de pessoas autistas...`,
      imagemPrincipal: "/imagens/img3.jpg",
      categoria: "Autismo",
      visualizacoes: 0,
      destaque: false
    }
  });

  console.log(`✅ ${3} artigos criados`);

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
  console.log(`   - Artigos: 3`);
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
