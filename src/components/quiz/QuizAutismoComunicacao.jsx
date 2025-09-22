import React from "react";
import QuizBase from "./QuizBase";

const QuizAutismoComunicacao = () => {
  const questions = [
    {
      id: 1,
      question: "1. A comunicação em pessoas autistas é:",
      options: [
        { text: "Sempre limitada e problemática", isCorrect: false },
        { text: "Diversa, podendo ser verbal, não-verbal ou alternativa", isCorrect: true },
        { text: "Inexistente na maioria dos casos", isCorrect: false },
        { text: "Idêntica à comunicação neurotípica", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Para facilitar a comunicação com uma pessoa autista, é recomendado:",
      options: [
        { text: "Exigir contato visual constante", isCorrect: false },
        { text: "Usar frases diretas e aguardar tempo de processamento", isCorrect: true },
        { text: "Falar de forma infantilizada", isCorrect: false },
        { text: "Usar apenas gestos e símbolos", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. A Comunicação Alternativa e Aumentativa (CAA):",
      options: [
        { text: "É uma muleta que atrasa o desenvolvimento", isCorrect: false },
        { text: "Só deve ser usada como último recurso", isCorrect: false },
        { text: "Pode facilitar e expandir a comunicação", isCorrect: true },
        { text: "É apenas para crianças pequenas", isCorrect: false }
      ]
    }
  ];

  return <QuizBase questions={questions} />;
};

export default QuizAutismoComunicacao;