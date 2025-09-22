import React from "react";
import QuizBase from "./QuizBase";

const QuizInclusaoEscolar = () => {
  const questions = [
    {
      id: 1,
      question: "1. O maior benefício da inclusão escolar é:",
      options: [
        { text: "Reduzir custos educacionais", isCorrect: false },
        { text: "Promover diversidade, empatia e aprendizado mútuo", isCorrect: true },
        { text: "Facilitar o trabalho dos professores", isCorrect: false },
        { text: "Seguir políticas governamentais apenas", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Professores podem apoiar alunos neurodivergentes:",
      options: [
        { text: "Tratando todos exatamente igual", isCorrect: false },
        { text: "Oferecendo múltiplas formas de ensino e avaliação", isCorrect: true },
        { text: "Focando apenas em suas dificuldades", isCorrect: false },
        { text: "Evitando dar responsabilidades", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. Um ambiente escolar inclusivo beneficia:",
      options: [
        { text: "Apenas alunos com necessidades especiais", isCorrect: false },
        { text: "Todos os alunos, desenvolvendo empatia e diversidade", isCorrect: true },
        { text: "Apenas alunos neurotípicos", isCorrect: false },
        { text: "Apenas os professores", isCorrect: false }
      ]
    }
  ];

  return <QuizBase questions={questions} />;
};

export default QuizInclusaoEscolar;