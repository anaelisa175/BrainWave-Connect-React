import React from "react";
import QuizBase from "./QuizBase";

const QuizTDAHMitosVerdades = () => {
  const questions = [
    {
      id: 1,
      question: "1. É mito afirmar que TDAH:",
      options: [
        { text: "É uma condição neurobiológica real", isCorrect: false },
        { text: "É resultado de má educação ou preguiça", isCorrect: true },
        { text: "Pode afetar adultos também", isCorrect: false },
        { text: "Apresenta sintomas diferentes em cada pessoa", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Verdade sobre o TDAH:",
      options: [
        { text: "Pessoas com TDAH são menos inteligentes", isCorrect: false },
        { text: "O TDAH tem base neurobiológica e é hereditário", isCorrect: true },
        { text: "Medicação sempre vicia quem usa", isCorrect: false },
        { text: "TDAH desaparece na adolescência", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. É mito afirmar que pessoas com TDAH:",
      options: [
        { text: "Podem ter talentos e habilidades excepcionais", isCorrect: false },
        { text: "São sempre desorganizadas e irresponsáveis", isCorrect: true },
        { text: "Beneficiam-se de estratégias adaptativas", isCorrect: false },
        { text: "Podem ser bem-sucedidas em suas áreas de interesse", isCorrect: false }
      ]
    }
  ];

  return <QuizBase questions={questions} />;
};

export default QuizTDAHMitosVerdades;