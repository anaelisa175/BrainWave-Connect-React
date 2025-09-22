import React from "react";
import QuizBase from "./QuizBase";

const QuizSaudeMentalNeurodivergencia = () => {
  const questions = [
    {
      id: 1,
      question: "1. Por que neurodivergentes podem ter maior risco de problemas de saúde mental?",
      options: [
        { text: "Por serem geneticamente predispostos a transtornos", isCorrect: false },
        { text: "Devido ao estresse de viver em um mundo não adaptado às suas necessidades", isCorrect: true },
        { text: "Por terem menor inteligência emocional", isCorrect: false },
        { text: "Por escolherem isolar-se socialmente", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Uma abordagem terapêutica adequada para neurodivergentes deve:",
      options: [
        { text: "Tentar eliminar todos os traços neurodivergentes", isCorrect: false },
        { text: "Afirmar a neurodiversidade e desenvolver estratégias adaptativas", isCorrect: true },
        { text: "Usar apenas técnicas tradicionais", isCorrect: false },
        { text: "Focar exclusivamente na medicação", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. Burnout neurodivergente pode ser causado por:",
      options: [
        { text: "Preguiça e falta de motivação", isCorrect: false },
        { text: "Sobrecarga sensorial e masking constante", isCorrect: true },
        { text: "Muito tempo livre", isCorrect: false },
        { text: "Falta de desafios", isCorrect: false }
      ]
    }
  ];

  return <QuizBase questions={questions} />;
};

export default QuizSaudeMentalNeurodivergencia;