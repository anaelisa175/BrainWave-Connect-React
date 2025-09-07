import React, { useState } from "react";
import "./ThemeList.css";

// Exemplo de dados com as imagens reais
const todosOsTemas = [
  {
    id: 1,
    titulo: "Desafios da educação no Brasil",
    descricao: "Reflexão sobre os principais obstáculos enfrentados pelo sistema educacional brasileiro.",
    imagem: "/imagens/img1.jpg",
    link: "#"
  },
  {
    id: 2,
    titulo: "Inclusão social e acessibilidade",
    descricao: "A importância de políticas públicas para promover a inclusão de pessoas com deficiência.",
    imagem: "/imagens/img2.jpg",
    link: "#"
  },
  {
    id: 3,
    titulo: "Tecnologia e mercado de trabalho",
    descricao: "Como a tecnologia está transformando profissões e exigindo novas habilidades.",
    imagem: "/imagens/img3.jpg",
    link: "#"
  },
  {
    id: 4,
    titulo: "Sustentabilidade e meio ambiente",
    descricao: "Práticas sustentáveis e seu impacto na preservação dos recursos naturais.",
    imagem: "/imagens/img4.jpg",
    link: "#"
  },
  {
    id: 5,
    titulo: "Saúde mental na sociedade contemporânea",
    descricao: "Os desafios da saúde mental e a importância do cuidado psicológico.",
    imagem: "/imagens/img5.jpg",
    link: "#"
  },
  {
    id: 6,
    titulo: "Cultura digital e redes sociais",
    descricao: "Impactos das redes sociais na comunicação e comportamento social.",
    imagem: "/imagens/img6.jpg",
    link: "#"
  },
  {
    id: 7,
    titulo: "Inteligência Artificial e Ética",
    descricao: "Os dilemas éticos no desenvolvimento e uso de sistemas de inteligência artificial.",
    imagem: "/imagens/img7.jpg",
    link: "#"
  },
  {
    id: 8,
    titulo: "Globalização e Economia",
    descricao: "Como a interconexão global afeta economias locais e o mercado de trabalho.",
    imagem: "/imagens/img8.jpg",
    link: "#"
  },
  {
    id: 9,
    titulo: "Literatura Brasileira Contemporânea",
    descricao: "Análise de obras e autores que marcam a literatura brasileira atual.",
    imagem: "/imagens/img9.jpg",
    link: "#"
  },
  {
    id: 10,
    titulo: "Mudanças Climáticas e Sociedade",
    descricao: "O impacto das alterações climáticas na organização social e econômica.",
    imagem: "/imagens/img10.jpg",
    link: "#"
  },
  {
    id: 11,
    titulo: "Direitos Humanos no Século XXI",
    descricao: "Desafios atuais na defesa e promoção dos direitos humanos no mundo.",
    imagem: "/imagens/img11.jpg",
    link: "#"
  },
  {
    id: 12,
    titulo: "Política e Cidadania",
    descricao: "O papel do cidadão na construção de uma sociedade democrática e participativa.",
    imagem: "/imagens/img12.jpg",
    link: "#"
  },
  {
    id: 13,
    titulo: "Biotecnologia e Futuro da Medicina",
    descricao: "Avanços biotecnológicos e suas implicações para o futuro da saúde humana.",
    imagem: "/imagens/img13.jpg",
    link: "#"
  },
  {
    id: 14,
    titulo: "Mobilidade Urbana Sustentável",
    descricao: "Soluções para os desafios de transporte nas grandes cidades.",
    imagem: "/imagens/img14.jpg",
    link: "#"
  },
  {
    id: 15,
    titulo: "Diversidade Cultural e Identidade",
    descricao: "A importância da preservação e valorização das diferentes culturas.",
    imagem: "/imagens/img15.jpg",
    link: "#"
  }
];

export default function ThemeList() {
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const temasVisiveis = mostrarTodos ? todosOsTemas : todosOsTemas.slice(0, 6);
  
  const handleVerMais = () => {
    setMostrarTodos(true);
  };
  
  const handleVerMenos = () => {
    setMostrarTodos(false);
    // Rolagem suave para o topo da seção após ocultar temas
    document.querySelector('.temas-populares').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="temas-populares">
      <div className="container">
        <h2>Temas Populares</h2>
        <br></br>
        <div className="temas-grid">
          {temasVisiveis.map((tema) => (
            <div className="tema-card" key={tema.id}>
              <div className="tema-img">
                <img src={tema.imagem} alt={tema.titulo} />
              </div>
              <div className="tema-content">
                <h3>{tema.titulo}</h3>
                <p>{tema.descricao}</p>
                <a href={tema.link} className="btn-tema">Explorar tema</a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="botoes-controle">
          {!mostrarTodos ? (
            <a href="#" className="btn-ver-mais" onClick={(e) => {
              e.preventDefault();
              handleVerMais();
            }}>Mostrar mais</a>
          ) : (
            <a href="#" className="btn-ver-menos" onClick={(e) => {
              e.preventDefault();
              handleVerMenos();
            }}>Mostrar menos</a>
          )}
        </div>
      </div>
    </section>
  );
}