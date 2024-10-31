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
      <h2 className="text-lg font-bold text-center p-2">Le vrai ou faux du jour :</h2>
      {question && (
        <div>
          <p className="font-bold">Question : <span className="font-light">{question.question}</span></p>
          <div className="flex justify-center item-center p-2  space-x-2">
          <button className="group bg-[#D7D0C8] h-full py-1 px-2 flex justify-center items-center gap-1 border-2 border-t-[#fff] border-r-[#808080] border-b-[#808080] border-l-[#fff] shadow-[1px_1px_0px_1px_#000] focus:bg-[#c7c1ba] focus:border-t-[#808080] focus:border-r-[#fff] focus:border-b-[#fff] focus:border-l-[#808080] focus:shadow-[0px_0px_0px_0px_#000] focus:translate-x-px focus:translate-y-px" onClick={() => handleAnswer("True")}>Vrai</button>
          <button className="group bg-[#D7D0C8] h-full py-1 px-2 flex justify-center items-center gap-1 border-2 border-t-[#fff] border-r-[#808080] border-b-[#808080] border-l-[#fff] shadow-[1px_1px_0px_1px_#000] focus:bg-[#c7c1ba] focus:border-t-[#808080] focus:border-r-[#fff] focus:border-b-[#fff] focus:border-l-[#808080] focus:shadow-[0px_0px_0px_0px_#000] focus:translate-x-px focus:translate-y-px" onClick={() => handleAnswer("False")}>Faux</button>
          </div>
          <div className="flex justify-center p-2">
          {feedback && <p>{feedback}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default TrueFalseDuJour;