import React from "react";
import QuizBase from "./QuizBase";

const QuizSensorialidadeAutismo = () => {
  const questions = [
    {
      id: 1,
      question: "1. As diferenças sensoriais no autismo caracterizam-se por:",
      options: [
        { text: "Problemas apenas com texturas", isCorrect: false },
        { text: "Processamento sensorial atípico que pode afetar todos os sentidos", isCorrect: true },
        { text: "Insensibilidade completa a estímulos", isCorrect: false },
        { text: "Hipersensibilidade apenas a sons altos", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Uma estratégia eficaz para apoiar alguém com sobrecarga sensorial é:",
      options: [
        { text: "Forçar a exposição gradual a todos os estímulos", isCorrect: false },
        { text: "Oferecer espaços calmos e ferramentas de autorregulação", isCorrect: true },
        { text: "Ignorar os sinais de desconforto sensorial", isCorrect: false },
        { text: "Aumentar gradualmente os estímulos sensoriais", isCorrect: false }
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
  ];

  return <QuizBase questions={questions} />;
};

export default QuizSensorialidadeAutismo;