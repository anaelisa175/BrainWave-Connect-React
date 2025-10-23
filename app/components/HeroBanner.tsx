"use client";

import { useState, useEffect } from 'react';
import './HeroBanner.css';

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    '/imagens/imagem1_carrossel.jpg',
    '/imagens/imagem2_carrossel.jpg',
    '/imagens/imagem3_carrossel.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="banner">
      <div className="carrossel">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Imagem ${index + 1}`}
            className={index === currentSlide ? 'active' : ''}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: 'transform 0.5s ease-in-out'
            }}
          />
        ))}
      </div>
      <div className="banner-texto">
        <h2>Transformando a Inclusão e o Apoio à Neurodiversidade</h2>
        <p>
          Nosso compromisso é transformar a vida de pessoas neurodivergentes e suas famílias, 
          proporcionando suporte especializado para aqueles com TEA, TDAH, autismo e outras condições.
        </p>
        <a href="#servicos" className="btn">Saiba Mais</a>
      </div>
    </section>
  );
}
