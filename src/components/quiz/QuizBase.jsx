import React, { useState, useEffect, useRef } from "react";

// Função para garantir a letra correta
const getLetter = (index) => {
  const letters = ['A', 'B', 'C', 'D'];
  return letters[index] || 'A';
};

// Componente Base de Quiz Reutilizável
function QuizBase({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const optionRefs = useRef([]);
  
  const handleAnswer = (isCorrect, index) => {
    if (answered) return; // Evita múltiplos cliques
    
    setSelectedOption(index);
    setAnswered(true);
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    // Avançar para próxima pergunta após 1.5 segundo
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setAnswered(false);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };
  
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setAnswered(false);
    setSelectedOption(null);
  };

  // Removed DOM manipulation to fix hydration issues
  
  return (
    <>
      {!showResult ? (
        <div className="quiz-question active">
          <h3>{questions[currentQuestion].question}</h3>
          <div className="quiz-options">
            {questions[currentQuestion].options.map((option, index) => {
              const letter = ['A', 'B', 'C', 'D'][index];
              return (
                <button 
                  key={`${currentQuestion}-${index}`} 
                  onClick={() => handleAnswer(option.isCorrect, index)}
                  className={`quiz-option ${
                    answered 
                      ? option.isCorrect 
                        ? "correct" 
                        : selectedOption === index 
                          ? "incorrect" 
                          : ""
                      : ""
                  }`}
                  disabled={answered}
                >
                  <span className="option-letter" key={`letter-${currentQuestion}-${index}`}>
                    {letter}-
                  </span>
                  <span className="option-text">{option.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="quiz-result" style={{ textAlign: "center", padding: "30px 20px" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "25px", color: "#333" }}>Resultado do Quiz</h3>
          <p className="result-text" style={{ fontSize: "1.2rem", marginBottom: "25px" }}>
            Você acertou {score} de {questions.length} perguntas!
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button 
              onClick={resetQuiz} 
              className="retry-button"
              style={{ 
                backgroundColor: "#ffc107", 
                color: "#000", 
                fontWeight: "bold", 
                border: "2px solid #071D3B",
                padding: "10px 20px",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#e6ad00";
                e.currentTarget.style.boxShadow = "0 0 5px rgba(7, 29, 59, 0.7)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#ffc107";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Tentar Novamente
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default QuizBase;