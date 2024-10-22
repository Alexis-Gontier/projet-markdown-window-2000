import React, { useState, useEffect } from "react";
import { fetchRecipeApi } from "../../services/RecipeService";

const RecetteDuJour = () => {
  const [recette, setRecette] = useState(null);
  const fetchRecette = async () => {
    const data = await fetchRecipeApi();
    setRecette(data.meals[0])
  };

  useEffect(() => {
    fetchRecette();
  }, []);

  return (
    <div>
      <h2>La recette du jour :</h2>
      {recette && (
        <div>
          <h3>{recette.strMeal}</h3>
          <img src={recette.strMealThumb} style={{ width: '200px' }} />
          <h4>Ingrédients :</h4>
          <ul>
            {(() => {
              const ingredients = [];
              for (let i = 0; i < 20; i++) {
                const ingredient = recette[`strIngredient${i + 1}`];
                const measure = recette[`strMeasure${i + 1}`];
                if (ingredient) {
                  ingredients.push(
                    <li key={i}>
                      {ingredient} - {measure}
                    </li>
                  );
                }
              }
              return ingredients;
            })()}
          </ul>
          <h4>Instructions :</h4>
          <p>{recette.strInstructions}</p>
          <h4>Source : <a href={recette.strSource}>{recette.strSource}</a></h4>
        </div>
      )}
    </div>
  );
};

export default RecetteDuJour;
