import React from "react";
import QuizBase from "./QuizBase";

const QuizTDAHVidaAdulta = () => {
  const questions = [
    {
      id: 1,
      question: "1. Como o TDAH pode se manifestar diferentemente em adultos?",
      options: [
        { text: "Apenas através de hiperatividade física", isCorrect: false },
        { text: "Dificuldades organizacionais, procrastinação e inquietação mental", isCorrect: true },
        { text: "Sempre de forma idêntica à infância", isCorrect: false },
        { text: "Exclusivamente através de impulsividade", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Uma estratégia eficaz para adultos com TDAH gerenciarem suas responsabilidades é:",
      options: [
        { text: "Tentar fazer tudo de uma vez só", isCorrect: false },
        { text: "Criar sistemas de lembretes e dividir tarefas em etapas menores", isCorrect: true },
        { text: "Evitar completamente o uso de agendas", isCorrect: false },
        { text: "Depender sempre de outras pessoas", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. Um desafio comum para adultos com TDAH no trabalho é:",
      options: [
        { text: "Ter criatividade excessiva", isCorrect: false },
        { text: "Gerenciar múltiplas tarefas e prazos simultaneamente", isCorrect: true },
        { text: "Ser muito focado em uma única tarefa", isCorrect: false },
        { text: "Comunicar-se muito bem com colegas", isCorrect: false }
      ]
    }
  ];

  return <QuizBase questions={questions} />;
};

export default QuizTDAHVidaAdulta;