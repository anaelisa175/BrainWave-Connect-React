import React from "react";
import QuizBase from "./QuizBase";

const QuizNeurodivergenciaCriatividade = () => {
  const questions = [
    {
      id: 1,
      question: "1. Por que pessoas neurodivergentes frequentemente demonstram alta criatividade?",
      options: [
        { text: "Por terem menos inteligência lógica", isCorrect: false },
        { text: "Pelo processamento diferenciado que gera perspectivas únicas", isCorrect: true },
        { text: "Por serem menos organizadas", isCorrect: false },
        { text: "Por não seguirem padrões sociais", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Em ambientes criativos, a neurodivergência contribui através de:",
      options: [
        { text: "Conformidade com padrões estabelecidos", isCorrect: false },
        { text: "Conexões inusitadas e abordagens inovadoras para problemas", isCorrect: true },
        { text: "Seguimento rigoroso de convenções artísticas", isCorrect: false },
        { text: "Evitar riscos criativos", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. Ambientes criativos inclusivos devem:",
      options: [
        { text: "Ter apenas um tipo de estimulação", isCorrect: false },
        { text: "Oferecer diferentes tipos de espaços e ferramentas", isCorrect: true },
        { text: "Ser barulhentos e caóticos", isCorrect: false },
        { text: "Focar apenas em métodos tradicionais", isCorrect: false }
      ]
    }
  ];

  return <QuizBase questions={questions} />;
};

export default QuizNeurodivergenciaCriatividade;