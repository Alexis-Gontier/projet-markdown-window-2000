import { useState, useEffect } from "react";
import { fetchCatFactApi } from '../../services/CatFactService'; 

const CatFactDuJour = () => {
  const [fact, setFact] = useState(null);

  const fetchFact = async () => {
    const data = await fetchCatFactApi(); 
    setFact(data); 
    
  };

  useEffect(() => {
    fetchFact(); 
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold text-center">Le fait du jour sur les chats :</h2>
      {fact && (
        <div>
          <p>{fact.fact}</p>
        </div>
      )}
    </div>
  );
};

export default CatFactDuJour;
