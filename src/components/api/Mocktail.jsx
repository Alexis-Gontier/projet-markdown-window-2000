import React, { useState, useEffect } from "react";
import { fetchMocktailApi } from '../../services/MocktailService';

const randomMocktail = (max) => {
  return Math.floor(Math.random() * max); 
}

const MocktailDuJour = () => {
  const [mocktail, setMocktail] = useState(null);

  const fetchMocktail = async () => {
    const data = await fetchMocktailApi();
    if (data) {
      const nbrMocktails = data.drinks.length;
      const num = randomMocktail(nbrMocktails);
      setMocktail(data.drinks[num]); 
    }
  };

  useEffect(() => {
    fetchMocktail();
  }, []);

  return (
    <div className="absolute top-[120px] right-5 w-96 bg-[#D7D0C8] flex items-center after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#000]">
      <div className="p-px w-full">
        <div className="w-full h-8 px-2 py-0 bg-gradient-to-r from-[#000181] to-[#1084d0] flex justify-between items-center">
          <p className="text-white text-base">Mocktail du jour</p>
          <button onClick={fetchMocktail} className="text-white">↻</button>
        </div>
        <div className="w-full h-full flex flex-col items-center p-4">
          <h2 className="text-lg font-bold text-center">Le mocktail du jour :</h2>
          {mocktail && (
            <>
              <h3 className="font-bold">{mocktail.strDrink}</h3>
              <img src={mocktail.strDrinkThumb} alt={mocktail.strDrink} style={{ width: '200px' }} />
            </>
          )}
          {!mocktail && <p>Erreur lors du chargement du mocktail</p>}
        </div>
      </div>
    </div>
  );
};

export default MocktailDuJour;
