import React, { useState, useEffect } from "react";
import { fetchQuoteApi } from "/src/services/QuoteService.js"; 

const CitationDuJour = () => {
  const [citation, setCitation] = useState(null);

  const fetchCitation = async () => {
    const data = await fetchQuoteApi(); 
    setCitation(data.slip.advice);
  };

  useEffect(() => {
    fetchCitation(); 
  }, []);

  return (
    <div>
      <h2>La citation du jour :</h2>
      {citation && (
        <div>
          <p>{citation}</p>
        </div>
      )}
    </div>
  );
};

export default CitationDuJour;
