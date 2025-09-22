import React from "react";
import { getArtigosSugeridos } from "../../data/artigos";
import { useRouter } from "next/router";

export default function ArtigosSugeridos({ artigoAtualLink, quantidade = 4 }) {
  const router = useRouter();
  const artigosSugeridos = getArtigosSugeridos(artigoAtualLink, quantidade);

  const handleArtigoClick = (link) => {
    router.push(link);
  };

  return (
    <section className="artigos-sugeridos animate__animated" id="artigosSugeridos">
      <h2 className="proposta-title">Continue Explorando</h2>
      <div className="sugeridos-grid">
        {artigosSugeridos.map((artigo) => (
          <div 
            key={artigo.id}
            className="artigo-sugerido" 
            onClick={() => handleArtigoClick(artigo.link)}
          >
            <img 
              src={artigo.imagem} 
              alt={artigo.titulo} 
              loading="lazy" 
            />
            <h3>{artigo.titulo}</h3>
            <p>{artigo.descricao}</p>
            <span className="leia-mais">Ler artigo →</span>
          </div>
        ))}
      </div>
    </section>
  );
}