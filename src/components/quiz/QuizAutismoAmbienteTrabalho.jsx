import React from "react";
import QuizBase from "./QuizBase";

const QuizAutismoAmbienteTrabalho = () => {
  const questions = [
    {
      id: 1,
      question: "1. Qual adaptação é mais importante para um funcionário autista?",
      options: [
        { text: "Ambiente com múltiplos estímulos sensoriais", isCorrect: false },
        { text: "Espaço de trabalho previsível com baixo ruído", isCorrect: true },
        { text: "Mudanças constantes na rotina de trabalho", isCorrect: false },
        { text: "Reuniões longas e frequentes", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Como um gestor pode facilitar a comunicação com funcionários autistas?",
      options: [
        { text: "Usando apenas comunicação não-verbal", isCorrect: false },
        { text: "Fornecendo instruções claras e por escrito", isCorrect: true },
        { text: "Evitando feedback sobre o trabalho", isCorrect: false },
        { text: "Comunicando apenas através de terceiros", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. A diversidade neurocognitiva no trabalho:",
      options: [
        { text: "Diminui a produtividade da equipe", isCorrect: false },
        { text: "Não faz diferença nos resultados", isCorrect: false },
        { text: "Pode trazer perspectivas únicas e inovação", isCorrect: true },
        { text: "Deve ser evitada sempre", isCorrect: false }
      ]
    }
  ];

  return <QuizBase questions={questions} />;
};

export default QuizAutismoAmbienteTrabalho;