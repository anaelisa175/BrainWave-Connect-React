// Lista completa de artigos disponíveis no site
export const todosOsArtigos = [
  {
    id: 1,
    titulo: "Neurodivergência: O Que É e Por Que Importa?",
    descricao: "Entenda o conceito e sua importância na sociedade atual.",
    imagem: "/imagens/img1.jpg",
    link: "/artigos/artigo-premium"
  },
  {
    id: 2,
    titulo: "TDAH Além dos Estereótipos",
    descricao: "Descubra a verdade sobre o TDAH e como superar os mitos e estereótipos.",
    imagem: "/imagens/img2.jpg",
    link: "/artigos/tdah-estereotipos"
  },
  {
    id: 3,
    titulo: "Autismo e Comunicação: Como Incluir?",
    descricao: "Estratégias para tornar o mundo mais acessível para autistas.",
    imagem: "/imagens/img3.jpg",
    link: "/artigos/autismo-comunicacao"
  },
  {
    id: 4,
    titulo: "Ansiedade e Neurodivergência: Qual a Relação?",
    descricao: "Entenda como ansiedade e neurodivergência estão conectadas.",
    imagem: "/imagens/img4.jpg",
    link: "/artigos/ansiedade-neurodivergencia"
  },
  {
    id: 5,
    titulo: "Tecnologia: Aliada ou Desafio para Neurodivergentes?",
    descricao: "Como a tecnologia impacta pessoas neurodivergentes.",
    imagem: "/imagens/img5.jpg",
    link: "/artigos/tecnologia-desafio"
  },
  {
    id: 6,
    titulo: "Inclusão Escolar para Neurodivergentes",
    descricao: "Como escolas podem apoiar alunos com autismo e TDAH.",
    imagem: "/imagens/img6.jpg",
    link: "/artigos/inclusao-escolar"
  },
  {
    id: 7,
    titulo: "Sensorialidade no Autismo: Um Mundo Único",
    descricao: "Entenda como autistas experienciam o mundo pelos sentidos.",
    imagem: "/imagens/img7.jpg",
    link: "/artigos/sensorialidade-autismo"
  },
  {
    id: 8,
    titulo: "TDAH na Vida Adulta: Desafios e Soluções",
    descricao: "Como adultos com TDAH podem lidar com o dia a dia.",
    imagem: "/imagens/img8.jpg",
    link: "/artigos/tdah-vida-adulta"
  },
  {
    id: 9,
    titulo: "Neurodivergência e Criatividade: Uma Força Poderosa",
    descricao: "Descubra como a neurodivergência impulsiona a inovação.",
    imagem: "/imagens/img9.jpg",
    link: "/artigos/neurodivergencia-criatividade"
  },
  {
    id: 10,
    titulo: "Autismo e Emprego: Como Incluir?",
    descricao: "Estratégias para promover a inclusão no mercado de trabalho.",
    imagem: "/imagens/img10.jpg",
    link: "/artigos/autismo-emprego"
  },
  {
    id: 11,
    titulo: "TDAH e Hiperfoco: Uma Superpotência?",
    descricao: "Como transformar o hiperfoco em uma vantagem.",
    imagem: "/imagens/img11.jpg",
    link: "/artigos/tdah-hiperfoco"
  },
  {
    id: 12,
    titulo: "Saúde Mental e Neurodivergência: Cuidados Essenciais",
    descricao: "Por que a saúde mental é crucial para neurodivergentes.",
    imagem: "/imagens/img12.jpg",
    link: "/artigos/saude-mental-neurodivergencia"
  },
  {
    id: 13,
    titulo: "TDAH: Mitos e Verdades",
    descricao: "Desvendando os equívocos mais comuns sobre o Transtorno de Déficit de Atenção e Hiperatividade.",
    imagem: "/imagens/img13.jpg",
    link: "/artigos/tdah-mitos-verdades"
  },
  {
    id: 14,
    titulo: "Autismo no Ambiente de Trabalho",
    descricao: "Como empresas estão criando espaços mais inclusivos para profissionais autistas.",
    imagem: "/imagens/img14.jpg",
    link: "/artigos/autismo-ambiente-trabalho"
  },
  {
    id: 15,
    titulo: "Dislexia e Criatividade",
    descricao: "A conexão surpreendente entre pensamento não-linear e soluções inovadoras.",
    imagem: "/imagens/img15.jpg",
    link: "/artigos/dislexia-criatividade"
  }
];

// Função para pegar artigos sugeridos (exclui o artigo atual)
export function getArtigosSugeridos(artigoAtualLink, quantidade = 4) {
  const artigosFiltrados = todosOsArtigos.filter(artigo => artigo.link !== artigoAtualLink);
  
  // Retorna os primeiros artigos de forma consistente (sem randomização)
  // Para variar as sugestões, podemos usar uma lógica baseada no link atual
  let startIndex = 0;
  const artigoAtualIndex = todosOsArtigos.findIndex(artigo => artigo.link === artigoAtualLink);
  if (artigoAtualIndex !== -1) {
    startIndex = artigoAtualIndex % artigosFiltrados.length;
  }
  
  // Rotaciona o array baseado no índice para ter sugestões diferentes mas consistentes
  const artigosRotacionados = [
    ...artigosFiltrados.slice(startIndex),
    ...artigosFiltrados.slice(0, startIndex)
  ];
  
  // Retorna a quantidade especificada
  return artigosRotacionados.slice(0, quantidade);
}