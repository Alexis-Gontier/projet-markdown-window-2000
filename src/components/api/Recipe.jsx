import React, { useState, useEffect } from "react";
import { fetchRecipeApi } from "../../services/RecipeService";

const RecetteDuJour = () => {
  const [recette, setRecette] = useState(null);
  const [showFullRecipe, setShowFullRecipe] = useState(false);

  const fetchRecette = async () => {
    const data = await fetchRecipeApi();
    setRecette(data.meals[0]);
  };

  useEffect(() => {
    fetchRecette();
  }, []);

  const toggleFullRecipe = () => {
    setShowFullRecipe(!showFullRecipe);
  };

  return (
    <div className="absolute top-10 right-100 w-96 bg-[#D7D0C8] border border-red-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#000]">
      <div className="p-px">
        <div className="w-full h-8 px-2 py-0 bg-gradient-to-r from-[#000181] to-[#1084d0] flex justify-between items-center">
          <p className="text-white text-base">Recette du jour</p>
          <button onClick={fetchRecette} className="text-white">↻</button>
        </div>
        <div className="w-full h-full flex flex-col items-center p-4">
          <h2 className="text-lg font-bold text-center">La recette du jour :</h2>
          {recette && (
            <>
              <h3 className="font-bold">{recette.strMeal}</h3>
              <img src={recette.strMealThumb} alt={recette.strMeal} style={{ width: '200px' }} />
              <button 
                onClick={toggleFullRecipe} 
                className="mt-2 text-blue-500 underline">
                {showFullRecipe ? "Voir moins" : "Voir plus"}
              </button>
              {showFullRecipe && (
                <>
                  <h4 className="font-semibold mt-4">Ingrédients :</h4>
                  <ul className="list-disc list-inside">
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
                  <h4 className="font-semibold mt-4">Instructions :</h4>
                  <p className="text-center">{recette.strInstructions}</p>
                  <h4 className="font-semibold mt-4">
                    Source : <a href={recette.strSource} className="text-blue-500 underline">{recette.strSource}</a>
                  </h4>
                </>
              )}
            </>
          )}
          {!recette && <p>Erreur lors du chargement de la recette</p>}
        </div>
      </div>
    </div>
  );
};

export default RecetteDuJour;
