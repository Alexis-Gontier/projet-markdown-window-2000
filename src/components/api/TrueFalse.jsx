import React, { useState, useEffect } from "react";
import { fetchQuestionApi } from '../../services/TrueFalseService';

const TrueFalseDuJour = () => {
  const [question, setQuestion] = useState(null);
  const fetchQuestion = async () => {
    const data = await fetchQuestionApi(); 
    setQuestion(data.results[0]); 
  };
  useEffect(() => {
    fetchQuestion(); 
  }, []);

  return (
    <div>
      <h2>Le vrai ou faux du jour :</h2>
      {question && (
        <div>
          <p>Question : {question.question}</p>
          <p>Réponse : {question.correct_answer}</p>
        </div>
      )}
    </div>
  );
};

export default TrueFalseDuJour;
