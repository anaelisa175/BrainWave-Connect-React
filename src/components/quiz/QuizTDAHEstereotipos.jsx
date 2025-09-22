import React from "react";
import QuizBase from "./QuizBase";

export default function QuizTDAHEstereotipos() {
  const questions = [
    {
      id: 1,
      question: "1. Segundo o artigo, o TDAH é:",
      options: [
        { text: "Resultado de má educação ou falta de disciplina", isCorrect: false },
        { text: "Uma diferença neurobiológica real com base genética", isCorrect: true },
        { text: "Apenas um problema comportamental temporário", isCorrect: false },
        { text: "Uma condição que afeta somente a hiperatividade", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "2. Qual é uma característica positiva comum em pessoas com TDAH?",
      options: [
        { text: "Baixa energia para atividades", isCorrect: false },
        { text: "Pensamento linear e tradicional", isCorrect: false },
        { text: "Criatividade excepcional e pensamento 'fora da caixa'", isCorrect: true },
        { text: "Dificuldade em todas as áreas da vida", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. Sobre o TDAH na vida adulta, é correto afirmar que:",
      options: [
        { text: "Desaparece completamente após a infância", isCorrect: false },
        { text: "É uma condição vitalícia que se manifesta de diferentes formas", isCorrect: true },
        { text: "Apenas a hiperatividade permanece na idade adulta", isCorrect: false },
        { text: "Não pode ser diagnosticado após os 18 anos", isCorrect: false }
      ]
    }
  ];

  return <QuizBase questions={questions} />;
}