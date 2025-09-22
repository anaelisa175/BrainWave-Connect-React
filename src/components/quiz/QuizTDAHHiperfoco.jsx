import React from "react";
import QuizBase from "./QuizBase";

const QuizTDAHHiperfoco = () => {
  const questions = [
    {
      id: 1,
      question: "1. O hiperfoco no TDAH caracteriza-se por:",
      options: [
        { text: "Incapacidade total de concentração", isCorrect: false },
        { text: "Concentração intensa e prolongada em atividades de interesse", isCorrect: true },
        { text: "Atenção dispersa em todas as situações", isCorrect: false },
        { text: "Falta de interesse em qualquer atividade", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Para aproveitar o hiperfoco de forma saudável, é importante:",
      options: [
        { text: "Trabalhar sem pausas até o esgotamento", isCorrect: false },
        { text: "Definir lembretes para necessidades básicas e pausas", isCorrect: true },
        { text: "Evitar completamente estados de hiperfoco", isCorrect: false },
        { text: "Focar apenas em atividades não-produtivas", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. Qual é um risco do hiperfoco no TDAH?",
      options: [
        { text: "Melhorar muito a produtividade", isCorrect: false },
        { text: "Negligenciar necessidades básicas como comer ou dormir", isCorrect: true },
        { text: "Facilitar todas as tarefas do dia", isCorrect: false },
        { text: "Aumentar a atenção em todas as áreas", isCorrect: false }
      ]
    }
  ];

  return <QuizBase questions={questions} />;
};

export default QuizTDAHHiperfoco;