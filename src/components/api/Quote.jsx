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
    <div className="absolute top-2 left-2 w-96 flex items-center bg-[#D7D0C8] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#000]">
      <div className="p-px">
        <div className="w-full h-8 px-2 py-0 bg-gradient-to-r from-[#000181] to-[#1084d0] flex justify-between items-center">
          <p className="text-white text-base">Citation du jour</p>
          <button onClick={fetchCitation} className="text-white">↻</button>
        </div>
        <div className="w-full h-full flex flex-col items-center p-4">
        <h2 className="text-lg font-bold text-center">La citattion du jour :</h2>
          {citation && <p className="text-center">{citation}</p>}
        </div>
      </div>
    </div>
  );
};

export default CitationDuJour;
