import React from "react";
import QuizBase from "./QuizBase";

const QuizAutismoEmprego = () => {
  const questions = [
    {
      id: 1,
      question: "1. Qual é uma vantagem que pessoas autistas podem trazer ao mercado de trabalho?",
      options: [
        { text: "Capacidade de trabalhar apenas sozinhas", isCorrect: false },
        { text: "Atenção excepcional aos detalhes e foco intenso", isCorrect: true },
        { text: "Dificuldade em seguir regras", isCorrect: false },
        { text: "Preferência por tarefas desorganizadas", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Para uma contratação inclusiva de pessoas autistas, é importante:",
      options: [
        { text: "Usar apenas entrevistas tradicionais", isCorrect: false },
        { text: "Adaptar o processo seletivo às suas necessidades comunicativas", isCorrect: true },
        { text: "Focar apenas nas dificuldades", isCorrect: false },
        { text: "Evitar perguntas sobre habilidades específicas", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. Empresas inclusivas valorizam funcionários autistas porque eles frequentemente:",
      options: [
        { text: "Trabalham apenas sozinhos", isCorrect: false },
        { text: "Demonstram lealdade, honestidade e dedicação ao trabalho", isCorrect: true },
        { text: "Evitam responsabilidades importantes", isCorrect: false },
        { text: "Precisam de supervisão constante", isCorrect: false }
      ]
    }
  ];

  return <QuizBase questions={questions} />;
};

export default QuizAutismoEmprego;