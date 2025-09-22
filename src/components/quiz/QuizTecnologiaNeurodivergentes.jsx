import React from "react";
import QuizBase from "./QuizBase";

const QuizTecnologiaNeurodivergentes = () => {
  const questions = [
    {
      id: 1,
      question: "1. As tecnologias assistivas para pessoas neurodivergentes têm como objetivo:",
      options: [
        { text: "Curar a neurodivergência", isCorrect: false },
        { text: "Potencializar habilidades e compensar desafios específicos", isCorrect: true },
        { text: "Isolar pessoas da sociedade", isCorrect: false },
        { text: "Substituir todas as interações sociais", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Um exemplo de tecnologia que beneficia neurodivergentes é:",
      options: [
        { text: "Interfaces complexas com muitas funcionalidades simultâneas", isCorrect: false },
        { text: "Aplicativos de organização, lembretes e comunicação alternativa", isCorrect: true },
        { text: "Sistemas que exigem respostas rápidas", isCorrect: false },
        { text: "Tecnologias que ignoram preferências sensoriais", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. O futuro da tecnologia para neurodivergentes deve focar em:",
      options: [
        { text: "Padronização de soluções únicas para todos", isCorrect: false },
        { text: "Personalização e design universal desde o desenvolvimento", isCorrect: true },
        { text: "Tecnologias apenas para déficits", isCorrect: false },
        { text: "Substituição da interação humana por IA", isCorrect: false }
      ]
    }
  ];

  return <QuizBase questions={questions} />;
};

export default QuizTecnologiaNeurodivergentes;