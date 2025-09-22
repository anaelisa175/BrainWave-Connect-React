import React from "react";
import QuizBase from "./QuizBase";

const QuizAnsiedadeNeurodivergencia = () => {
  const questions = [
    {
      id: 1,
      question: "1. Por que a ansiedade é mais comum em pessoas neurodivergentes?",
      options: [
        { text: "Devido a diferenças genéticas exclusivamente", isCorrect: false },
        { text: "Pela pressão social constante e necessidade de mascaramento", isCorrect: true },
        { text: "Por falta de inteligência emocional", isCorrect: false },
        { text: "Porque são naturalmente mais nervosas", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Qual é uma estratégia eficaz para gerenciar ansiedade social em neurodivergentes?",
      options: [
        { text: "Exposição forçada a situações sociais intensas", isCorrect: false },
        { text: "Desenvolvimento de scripts sociais e pausas regulares", isCorrect: true },
        { text: "Isolamento social completo", isCorrect: false },
        { text: "Medicação como única solução", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. O burnout autista pode ser causado por:",
      options: [
        { text: "Preguiça ou falta de motivação", isCorrect: false },
        { text: "Acúmulo de estresse por mascaramento e sobrecarga sensorial", isCorrect: true },
        { text: "Excesso de privilégios sociais", isCorrect: false },
        { text: "Falta de disciplina pessoal", isCorrect: false }
      ]
    }
  ];

  return <QuizBase questions={questions} />;
};

export default QuizAnsiedadeNeurodivergencia;