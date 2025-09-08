import React, { useState } from "react";
import "./ThemeList.css";

// Exemplo de dados com as imagens reais
const todosOsTemas = [
  {
    id: 1,
    titulo: "Neurodivergência: O Que É e Por Que Importa?",
    descricao: "Entenda o conceito e sua importância na sociedade atual.",
    imagem: "/imagens/img1.jpg",
    link: "#"
  },
  {
    id: 2,
    titulo: "TDAH Além dos Estereótipos",
    descricao: "Descubra como o TDAH afeta a vida além da hiperatividade.",
    imagem: "/imagens/img2.jpg",
    link: "#"
  },
  {
    id: 3,
    titulo: "Autismo e Comunicação: Como Incluir?",
    descricao: "Estratégias para tornar o mundo mais acessível para autistas.",
    imagem: "/imagens/img3.jpg",
    link: "#"
  },
  {
    id: 4,
    titulo: "Ansiedade e Neurodivergência: Qual a Relação?",
    descricao: "Entenda como ansiedade e neurodivergência estão conectadas.",
    imagem: "/imagens/img4.jpg",
    link: "#"
  },
  {
    id: 5,
    titulo: "Tecnologia: Aliada ou Desafio para Neurodivergentes?",
    descricao: "Explore os prós e contras da tecnologia na neurodivergência.",
    imagem: "/imagens/img5.jpg",
    link: "#"
  },
  {
    id: 6,
    titulo: "Inclusão Escolar para Neurodivergentes",
    descricao: "Como escolas podem apoiar alunos com autismo e TDAH.",
    imagem: "/imagens/img6.jpg",
    link: "#"
  },
  {
    id: 7,
    titulo: "Sensorialidade no Autismo: Um Mundo Único",
    descricao: "Entenda como autistas experienciam o mundo pelos sentidos.",
    imagem: "/imagens/img7.jpg",
    link: "#"
  },
  {
    id: 8,
    titulo: "TDAH na Vida Adulta: Desafios e Soluções",
    descricao: "Como adultos com TDAH podem lidar com o dia a dia.",
    imagem: "/imagens/img8.jpg",
    link: "#"
  },
  {
    id: 9,
    titulo: "Neurodivergência e Criatividade: Uma Força Poderosa",
    descricao: "Descubra como a neurodivergência impulsiona a inovação.",
    imagem: "/imagens/img9.jpg",
    link: "#"
  },
  {
    id: 10,
    titulo: "Autismo e Emprego: Como Incluir?",
    descricao: "Estratégias para promover a inclusão no mercado de trabalho.",
    imagem: "/imagens/img10.jpg",
    link: "#"
  },
  {
    id: 11,
    titulo: "TDAH e Hiperfoco: Uma Superpotência?",
    descricao: "Como transformar o hiperfoco em uma vantagem.",
    imagem: "/imagens/img11.jpg",
    link: "#"
  },
  {
    id: 12,
    titulo: "Saúde Mental e Neurodivergência: Cuidados Essenciais",
    descricao: "Por que a saúde mental é crucial para neurodivergentes.",
    imagem: "/imagens/img12.jpg",
    link: "#"
  },
  {
    id: 13,
    titulo: "TDAH: Mitos e Verdades",
    descricao: "Desvendando os equívocos mais comuns sobre o Transtorno de Déficit de Atenção e Hiperatividade.",
    imagem: "/imagens/img13.jpg",
    link: "#"
  },
  {
    id: 14,
    titulo: "Autismo no Ambiente de Trabalho",
    descricao: "Como empresas estão criando espaços mais inclusivos para profissionais autistas.",
    imagem: "/imagens/img14.jpg",
    link: "#"
  },
  {
    id: 15,
    titulo: "Dislexia e Criatividade",
    descricao: "A conexão surpreendente entre pensamento não-linear e soluções inovadoras.",
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