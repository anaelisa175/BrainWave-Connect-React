import React from "react";
import QuizBase from "./QuizBase";

const QuizDislexiaCriatividade = () => {
  const questions = [
    {
      id: 1,
      question: "1. A dislexia está frequentemente associada a:",
      options: [
        { text: "Baixo potencial intelectual", isCorrect: false },
        { text: "Talentos em pensamento visual e criatividade", isCorrect: true },
        { text: "Preguiça para estudar", isCorrect: false },
        { text: "Problemas comportamentais graves", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Uma estratégia eficaz para ensinar pessoas com dislexia é:",
      options: [
        { text: "Usar apenas métodos tradicionais de leitura", isCorrect: false },
        { text: "Combinar recursos visuais, auditivos e táteis", isCorrect: true },
        { text: "Aumentar a pressão por melhores notas", isCorrect: false },
        { text: "Reduzir expectativas de aprendizagem", isCorrect: false }
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
  ];

  return <QuizBase questions={questions} />;
};

export default QuizDislexiaCriatividade;