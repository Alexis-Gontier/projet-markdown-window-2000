import React, { useState, useEffect } from "react";
import { fetchQuestionApi } from '../../services/TrueFalseService';

const TrueFalseDuJour = () => {
  const [question, setQuestion] = useState(null);
  const [feedback, setFeedback] = useState(""); 

  const fetchQuestion = async () => {
    const data = await fetchQuestionApi();
    setQuestion(data.results[0]);
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  const handleAnswer = (answer) => {
    if (answer === question.correct_answer) {
      setFeedback(`Bien joué, c'est ${answer === "True" ? "vrai" : "faux"} !`);
    } else {
      setFeedback(`Dommage , c'est ${question.correct_answer === "True" ? "vrai" : "faux"} !`);
    }
  };

  return (
    <div>
      <h2>Le vrai ou faux du jour :</h2>
      {question && (
        <div>
          <p>Question : {question.question}</p>
          <button onClick={() => handleAnswer("True")}>Vrai</button>
          <button onClick={() => handleAnswer("False")}>Faux</button>
          
          {feedback && <p>{feedback}</p>}
        </div>
      )}
    </div>
  );
};

export default TrueFalseDuJour;