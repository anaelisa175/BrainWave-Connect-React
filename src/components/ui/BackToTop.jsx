import React, { useEffect, useState } from "react";

export default function BackToTop() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      setVisivel(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return visivel ? (
    <button className="back-to-top" onClick={scrollToTop} title="Voltar ao topo">
      ↑
    </button>
  ) : null;
}