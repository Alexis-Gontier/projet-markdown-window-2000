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
        const nbrMocktails = data.drinks.length
       const num = randomMocktail(nbrMocktails);
       setMocktail(data.drinks[num]); 
    }
  };

  useEffect(() => {
    fetchMocktail();
    randomMocktail(58); // Nombres de mocktails disponibles
  }, []);

  return (
    <div>
      <h2>Le mocktail du jour :</h2>
      {mocktail && (
        <div>
          <p>{mocktail.strDrink}</p>
          <img src={mocktail.strDrinkThumb} style={{ width: '200px' }} />
        </div>
      )}
    </div>
  );
};

export default MocktailDuJour;
